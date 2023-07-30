// import {
//     BadRequestException,
//     HttpStatus,
//     Injectable,
//     InternalServerErrorException,
//     NotAcceptableException,
//     NotFoundException,
//   } from '@nestjs/common';
//   import { ElasticsearchService } from '../elasticsearch/elasticsearch.service';
//   import { Client } from '@elastic/elasticsearch';
//   import { PPlacesPutResponse } from './dto/places.payload';
//   import { HttpService } from '@nestjs/axios';
//   import { catchError, firstValueFrom } from 'rxjs';
//   import { ErrorFormat } from '../../../types/commons';
//   import {
//     PlaceCreateBody,
//     PlacesPostRequest,
//     PlacesPostResponse,
//     PlacesPutRequest,
//     LayerType,
//     PlacesDeleteResponse,
//     PlacesGetResponse,
//     IPlacesPutCommonObject,
//     IPlacePutBody,
//   } from '../../../types/places';
//   import { ConfigService } from '@nestjs/config';
//   import { ceil } from 'lodash';
//   import { AppLogger } from '../../config/logger/logger.service';
  
//   @Injectable()
//   export class PlacesService {
//     esClient: Client;
//     constructor(
//       private readonly elasticsearchService: ElasticsearchService,
//       private readonly httpService: HttpService,
//       private readonly configService: ConfigService,
//       private readonly appLogger: AppLogger,
//     ) {
//       this.esClient = this.elasticsearchService.getClient();
//     }
//     async updateByPlaceId(userId: string, placeId: string, payload: PlacesPutRequest): Promise<PPlacesPutResponse> {
//       const index = this.configService.get('PELIAS_INDEX');
//       const pipHostUrl = this.configService.get('PIP_SERVICE_HOST');
//       placeId = `custom_location:${payload.layer}:${placeId}`;
//       const exists = await this.checkIfDocumentExists(placeId, index);
//       if (exists) {
//         if (this.checkIfUpdatePayloadIsValid(payload)) {
//           try {
//             const doc = await this.generateUpdateDocument(payload, userId, pipHostUrl);
//             const result = await this.updateInElasticSearch(index, placeId, doc);
//             await this.esClient.indices.refresh();
//             this.appLogger.log(
//               "updated place",
//               { meta: { placeId: placeId }, user: userId },
//             );
//             return result;
//           } catch (error) {
//             this.appLogger.error(
//               error.message,
//               { meta: { error: error }, user: userId },
//             );
//             throw new InternalServerErrorException({
//               error: 'Already Exists',
//               messages: [`${error}`],
//               statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
//             } as ErrorFormat)
//           }
//         } else {
//           this.badRequesException(["Payload not valid"]);
//         }
//       } else {
//         throw new NotFoundException(
//           {
//             error: 'Not Found',
//             messages: ["Place Not Found"],
//             statusCode: HttpStatus.NOT_FOUND,
//           } as ErrorFormat,
//         );
//       }
//     }
  
//     checkIfUpdatePayloadIsValid(payload: PlacesPutRequest) {
//       if (!payload) {
//         this.badRequesException(["request body is required"]);
//       }
//       return true;
//     }
//     async generateUpdateDocument(payload: PlacesPutRequest, userId: string, pipHostUrl?: string): Promise<IPlacePutBody> {
//       const addendum = {
//         metadata: {
//           address: payload.address,
//           city: payload.city,
//           state: payload.state,
//           postalCode: payload.postalCode,
//         }
//       };
//       if (payload.addendum) {
//         addendum.metadata = { ...addendum.metadata, ...payload.addendum };
//       }
//       const document: IPlacePutBody = {
//         name: { "default": payload.name },
//         layer: payload.layer,
//         category: payload['type']?.split(','),
//         center_point: { lat: payload.latitude, lon: payload.longitude },
//         updated_at: new Date(),
//         updated_by: userId,
//         parent: pipHostUrl ?
//           await this.getParentDetails(pipHostUrl, payload.latitude, payload.longitude) :
//           null,
//         addendum: { metadata: JSON.stringify(addendum.metadata) }
//         ,
//       };
//       return document;
//     }
  
//     async getParentDetails(hostUrl: string, latitude: number, longitude: number) {
//       const { data } = await firstValueFrom(
//         this.httpService.get<any>(`${hostUrl}/${longitude}/${latitude}`).pipe(
//           catchError((error: Error) => {
//             throw new InternalServerErrorException(
//               {
//                 error: 'Internal Server Error',
//                 messages: [error.message, "unable to fetch parent details"],
//                 statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
//               } as ErrorFormat,
//             );
//           }),
//         ),
//       );
  
//       const parent = {}
//       for (const key in data) {
//         if (data[key]) {
//           parent[`${key}`] = [data[key][0]['name']];
//           parent[`${key}_id`] = [data[key][0]['id']];
//         }
//       }
//       return parent;
//     }
  
//     // Delete data by placeId:
//     async deletePlaceById(placeId: string, userId: string): Promise<PlacesDeleteResponse> {
//       const index = this.configService.get('PELIAS_INDEX');
//       const documents = await this.searchBySourceId(index, placeId);
//       if (documents.length && !documents[0]._source.is_deleted) {
//         const doc = {
//           is_deleted: true,
//           deleted_by: userId,
//           deleted_at: new Date(),
//         };
//         const result = await this.updateInElasticSearch(index, documents[0]._id, doc);
//         if (result.statusCode === 200) {
//           await this.esClient.indices.refresh();
//           this.appLogger.log(
//             "deleted place",
//             { meta: { placeId }, user: userId },
//           );
//           return { message: 'Operation performed sucessfully', statusCode: 200 };
//         } else {
//           this.appLogger.error(
//             "Failed to delete",
//             { meta: { placeId, statusCode: result.statusCode }, user: userId },
//           );
//           throw new InternalServerErrorException(
//             {
//               error: "Internal Server Error",
//               messages: ["Failed to delete"],
//               statusCode: result.statusCode,
//             } as ErrorFormat,
//           );
//         }
//       } else {
//         throw new NotFoundException(
//           {
//             error: 'Not Found',
//             messages: ["Place Not Found"],
//             statusCode: HttpStatus.NOT_FOUND,
//           } as ErrorFormat,
//         );
//       }
//     }
  
//     // Get data by PlaceId:
//     async getByPlaceId(placeId: string, userId: string): Promise<PlacesGetResponse> {
//       const index = this.configService.get('PELIAS_INDEX');
//       const documents = await this.searchBySourceId(index, placeId);
//       if (documents.length && !documents[0]._source.is_deleted) {
//         this.appLogger.log(
//           "read place by id",
//           { meta: { message: `read place by id ${placeId}` }, user: userId },
//         );
//         return this.mapPlaceResponse(documents[0]);
//       } else {
//         this.appLogger.log(
//           "read place by id",
//           { meta: { message: `Failed to read place by id ${placeId}` }, user: userId },
//         );
//         throw new NotFoundException(
//           {
//             error: 'Not Found',
//             messages: ["Place Not Found"],
//             statusCode: HttpStatus.NOT_FOUND,
//           } as ErrorFormat,
//         );
//       }
//     }
  
//     mapPlaceResponse(document: any): PlacesGetResponse {
//       const metadata = JSON.parse(document._source.addendum?.metadata || {});
//       const response: PlacesGetResponse = {
//         id: document._id,
//         name: document._source.name.default,
//         address: metadata.address,
//         city: metadata.city,
//         state: metadata.state,
//         postalCode: metadata.postalCode,
//         latitude: document._source.center_point.lat,
//         longitude: document._source.center_point.lon,
//         layer: document._source.layer,
//         types: document._source.category
//       };
  
//       delete metadata.address;
//       delete metadata.city;
//       delete metadata.state;
//       delete metadata.postalCode;
//       if (metadata && response.layer != LayerType.olalocation)
//         response.addendum = metadata;
//       return response;
  
//     }
  
//     async checkIfDocumentExists(placeId: string, index: string): Promise<boolean> {
//       const exists = await this.esClient.exists({
//         index: index,
//         id: placeId,
//       });
//       if (exists.statusCode !== 200) {
//         return false;
//       }
  
//       const document = await this.esClient.get({
//         index: index,
//         id: placeId,
//       });
  
//       if (document.body._source.is_deleted === true) {
//         return false;
//       }
  
//       return true;
//     }
  
//     async updateInElasticSearch(index: string, placeId: string, doc: any) {
//       const updatedResult = await this.esClient.update({
//         index: index,
//         id: placeId,
//         body: { "doc": doc }
//       });
//       if (updatedResult.statusCode === 200) {
//         return { message: "Operation performed sucessfully", statusCode: 200 }
//       } else {
//         throw new InternalServerErrorException(
//           {
//             error: 'Internal Server error',
//             messages: ["Failed to update"],
//             statusCode: updatedResult.statusCode,
//           } as ErrorFormat,
//         );
//       }
//     }
  
//     async create(
//       payload: PlacesPostRequest,
//       userId: string,
//     ): Promise<PlacesPostResponse> {
//       const index = this.configService.get('PELIAS_INDEX');
//       const pipHostUrl = this.configService.get('PIP_SERVICE_HOST');
//       const id = `custom_location:${payload.layer}:${payload.id}`
//       const exists = await this.checkIfDocumentExists(id, index);
//       if (!exists) {
//         try {
//           const document = await this.createPlaceDocument(userId, payload, pipHostUrl);
//           const result = await this.elasticsearchIndex(index, id, document.body);
//           await this.esClient.indices.refresh();
//           this.appLogger.log(
//             "created place",
//             { meta: { placeId: id }, user: userId },
//           );
//           return result;
//         } catch (error) {
//           this.appLogger.error(
//             error.message,
//             { meta: { error: error }, user: userId },
//           );
//           throw error;
//         }
//       } else {
//         this.appLogger.error(
//           'Failed to create',
//           { meta: { error: `Place with the given id ${payload.id} already exists` }, user: userId },
//         );
//         throw new BadRequestException(
//           {
//             error: 'Already Exists',
//             messages: [`Place with the given id ${payload.id} already exists`],
//             statusCode: HttpStatus.BAD_REQUEST,
//           } as ErrorFormat,
//         );
//       }
//     }
  
//     async searchBySourceId(index, sourceId) {
//       const response = await this.esClient.search({
//         index: index,
//         body: {
//           "query": {
//             "match": {
//               "source_id": sourceId
//             }
//           }
//         }
//       });
//       return response.body.hits.hits;
//     }
  
//     async elasticsearchIndex(index: string, id: string, document: PlaceCreateBody) {
//       const data = await this.esClient.index({
//         index: index,
//         id: id,
//         body: document,
//       });
//       if (data.statusCode === 201 || data.statusCode === 200) {
//         return await { message: "Operation performed sucessfully", statusCode: 200 }
//       } else {
//         throw new InternalServerErrorException(
//           {
//             error: 'Internal Server Error',
//             messages: ['Failed to create'],
//             statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
//           } as ErrorFormat
//         );
//       }
//     }
  
//     async createPlaceDocument(userId: string, payload: PlacesPostRequest, pipHostUrl?: string) {
//       const addendum = {
//         metadata: {
//           address: payload.address,
//           city: payload.city,
//           state: payload.state,
//           postalCode: payload.postalCode,
//         }
//       };
//       if (payload.addendum) {
//         addendum.metadata = { ...addendum.metadata, ...payload.addendum };
//       }
//       const document: PlaceCreateBody = {
//         name: { "default": payload.name },
//         source: 'custom_location',
//         source_id: payload.id,
//         layer: payload.layer,
//         center_point: { lat: payload.latitude, lon: payload.longitude },
//         is_deleted: false,
//         created_at: new Date(),
//         created_by: userId,
//         popularity: 40000,
//         category: payload['type']?.split(','),
//         parent: pipHostUrl ?
//           await this.getParentDetails(pipHostUrl, payload.latitude, payload.longitude) :
//           null,
//         addendum: { metadata: JSON.stringify(addendum.metadata) }
//         ,
//       };
//       return {
//         id: `custom_location:${payload.layer}:${payload.id}`,
//         body: document
//       }
//     }
  
//     badRequesException(messages: Array<string>) {
//       throw new BadRequestException(
//         {
//           error: 'Bad Request',
//           messages,
//           statusCode: HttpStatus.BAD_REQUEST,
//         } as ErrorFormat,
//       );
//     }
  
//     notAcceptable(messages: Array<string>) {
//       throw new NotAcceptableException(
//         {
//           error: 'Not Acceptable',
//           messages,
//           statusCode: HttpStatus.NOT_ACCEPTABLE,
//         } as ErrorFormat,
//       );
//     }
  
//     async getByLayer(
//       layer: string,
//       page: number,
//       limit: number,
//       userId: string,
//     ): Promise<any> {
//       const index = this.configService.get('PELIAS_INDEX');
//       const from = (page - 1) * limit;
//       const document = await this.esClient.search({
//         index: index,
//         body: {
//           "from": from,
//           "size": limit,
//           "query": {
//             "bool": {
//               "must_not": [
//                 {
//                   "match": { "is_deleted": true }
//                 }
//               ],
//               "filter": [
//                 {
//                   "term": {
//                     "layer": layer,
//                   }
//                 }
//               ]
//             }
//           },
//           "sort": [
//             "created_at"
//           ]
//         }
//       });
//       const dataFromES = document.body.hits.hits;
//       const items = dataFromES.map(item => this.mapPlaceResponse(item));
//       const totalPages = ceil(document.body.hits.total.value / limit)
//       const meta = {
//         "totalItems": document.body.hits.total.value,
//         "itemsPerPage": limit,
//         "currentPage": page,
//         "itemCount": items.length,
//         "totalPages": totalPages
//       }
//       this.appLogger.log(
//         "search places",
//         { meta: { message: `read places by layer ${layer}` }, user: userId },
//       );
//       return { items: items, meta: meta }
//     }
//   }
  