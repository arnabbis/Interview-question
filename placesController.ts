import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    UseGuards,
    Request,
    Param,
    Put,
    Delete,
    NotAcceptableException,
    HttpStatus,
    ParseIntPipe,
    Query,
  } from '@nestjs/common';
  import {
    ApiTags,
    ApiExtraModels,
    ApiQuery,
    ApiResponse,
    ApiUnauthorizedResponse,
    getSchemaPath,
    ApiOkResponse,
    ApiForbiddenResponse,
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiBody,
    ApiSecurity,
    ApiParam,
    ApiCreatedResponse,
  } from '@nestjs/swagger';
  import {
    PPlacesPostRequest,
    PPlacesPostResponse,
    PPlacesPutRequest,
    PPlacesPutResponse,
    PPlacesGetResponse,
    PPlacesDeleteResponse,
  } from './dto/places.payload';
  import { AccessParams } from '../auth/guards/accessparams.decorator';
  import { PBadRequest, PForbidden, PNotFound, PUnauthorized } from 'utils/common.payload';
  import { ErrorFormat } from '../../../types/commons';
  import { PlacesService } from './places.service';
  import { PaginatedDto } from '../../utils/pagination/paginated-interface';
  import { RoleAuth } from '../auth/guards/role-guard';
  import { BadRequestException } from '@nestjs/common/exceptions';
  import {
    LayerType,
  } from '../../../types/places';
  import {
    PPlacesPostLOCRequestExample,
    PPlacesPostHCRequestExample,
    PPlacesPostECRequestExample,
    PPlacesPostSCRequestExample,
    PPlacesPutLOCRequestExample,
    PPlacesPutECRequestExample,
    PPlacesPutSCRequestExample,
    PPlacesPutHCRequestExample,
  } from './dto/places.examples';
  import { ApiKeyAuthGuard } from '../auth/guards/api-key-gaurd';
  import { EnumValidationPipe } from 'utils/validator/enum-validation-pipe';
  
  @Controller('v1/api/places')
  @ApiTags('places')
  @ApiSecurity('X-API-Key')
  @UseGuards(ApiKeyAuthGuard, RoleAuth)
  @ApiExtraModels(
    PPlacesPostRequest,
    PPlacesPostResponse,
    PPlacesPutRequest,
    PPlacesPutResponse,
    PPlacesGetResponse,
    PPlacesDeleteResponse,
  )
  export class PlacesController {
    constructor(private readonly placesService: PlacesService) { }
  
    @Put(':id')
    @HttpCode(200)
    @AccessParams('update', 'places')
    @ApiOkResponse({
      description: 'Successful operation',
      schema: { $ref: getSchemaPath(PPlacesPutResponse) },
    })
    @ApiBadRequestResponse({
      schema: { $ref: getSchemaPath(PBadRequest) },
    })
    @ApiUnauthorizedResponse({
      schema: { $ref: getSchemaPath(PUnauthorized) },
    })
    @ApiNotFoundResponse({
      schema: { $ref: getSchemaPath(PNotFound) },
    })
    @ApiForbiddenResponse({
      schema: { $ref: getSchemaPath(PForbidden) },
    })
    @ApiBody({
      schema: {
        description: 'Following schema is valid for updating a place.',
        allOf: [{ $ref: getSchemaPath(PPlacesPutRequest) }]
      },
      description: 'Request payload for updating a place',
      examples: {
        olalocation: {
          value: PPlacesPutLOCRequestExample
        },
        hypercharger: {
          value: PPlacesPutHCRequestExample
        },
        experiencecenter: {
          value: PPlacesPutECRequestExample
        },
        servicecenter: {
          value: PPlacesPutSCRequestExample
        }
      }
    })
    @ApiParam({
      name: "id",
      description: "Place id to be updated",
      examples: {
        olalocation: {
          value: "LOC001"
        },
        hypercharger: {
          value: "HC001"
        },
        experiencecenter: {
          value: "EC001"
        },
        servicecenter: {
          value: "SC001"
        }
      },
    })
    async updateByPlaceId(
      @Body() payload: PPlacesPutRequest,
      @Param('id') placeId: string,
      @Request() request,
    ): Promise<PPlacesPutResponse> {
      try {
        return await this.placesService.updateByPlaceId(
          request.user.id,
          placeId,
          payload,
        );
      } catch (error) {
        return error;
      }
    }
  
    @Delete(':id')
    @HttpCode(200)
    @AccessParams('delete', 'places')
    @ApiOkResponse({
      description: 'Delete place by id',
      schema: { $ref: getSchemaPath(PPlacesDeleteResponse) },
    })
    @ApiBadRequestResponse({
      schema: { $ref: getSchemaPath(PBadRequest) },
    })
    @ApiUnauthorizedResponse({
      schema: { $ref: getSchemaPath(PUnauthorized) },
    })
    @ApiNotFoundResponse({
      schema: { $ref: getSchemaPath(PNotFound) },
    })
    @ApiForbiddenResponse({
      schema: { $ref: getSchemaPath(PForbidden) },
    })
    @ApiParam({
      name: "id",
      description: "Place id to be deleted",
      examples: {
        olalocation: {
          value: "LOC001"
        },
        hypercharger: {
          value: "HC001"
        },
        experiencecenter: {
          value: "EC001"
        },
        servicecenter: {
          value: "SC001"
        }
      },
    })
    async deletePlaceById(
      @Param('id') placeId: string,
      @Request() request,
    ): Promise<PPlacesDeleteResponse> {
      if (placeId) {
        return await this.placesService.deletePlaceById(
          placeId,
          request.user.id,
        );
      } else {
        throw new NotAcceptableException({
          error: 'Not Acceptable',
          messages: ['Id is required'],
          statusCode: HttpStatus.NOT_ACCEPTABLE,
        } as ErrorFormat);
      }
    }
  
    @Get(':id')
    @HttpCode(200)
    @AccessParams('read', 'places')
    @ApiOkResponse({
      description: 'Get place by id',
      schema: { $ref: getSchemaPath(PPlacesGetResponse) },
    })
    @ApiBadRequestResponse({
      schema: { $ref: getSchemaPath(PBadRequest) },
    })
    @ApiUnauthorizedResponse({
      schema: { $ref: getSchemaPath(PUnauthorized) },
    })
    @ApiNotFoundResponse({
      schema: { $ref: getSchemaPath(PNotFound) },
    })
    @ApiForbiddenResponse({
      schema: { $ref: getSchemaPath(PForbidden) },
    })
    @ApiParam({
      name: "id",
      description: "Place id to get",
      examples: {
        olalocation: {
          value: "LOC001"
        },
        hypercharger: {
          value: "HC001"
        },
        experiencecenter: {
          value: "EC001"
        },
        servicecenter: {
          value: "SC001"
        }
      },
    })
    async getByPlaceId(
      @Param('id') placeId: string,
      @Request() request,
    ): Promise<PPlacesGetResponse> {
      if (placeId) {
        return await this.placesService.getByPlaceId(placeId, request.user.id);
      } else {
        throw new NotAcceptableException({
          error: 'Not Acceptable',
          messages: ['Id is required'],
          statusCode: HttpStatus.NOT_ACCEPTABLE,
        } as ErrorFormat);
      }
    }
  
    @Post('')
    @HttpCode(201)
    @AccessParams('create', 'places')
    @ApiCreatedResponse({
      description: 'Create new point of interest',
      schema: { $ref: getSchemaPath(PPlacesPostResponse) },
    })
    @ApiBadRequestResponse({
      description: 'Bad Request',
      schema: { $ref: getSchemaPath(PBadRequest) },
    })
    @ApiUnauthorizedResponse({
      description: 'Unathorized',
      schema: { $ref: getSchemaPath(PUnauthorized) },
    })
    @ApiNotFoundResponse({
      description: 'Not Found',
      schema: { $ref: getSchemaPath(PNotFound) },
    })
    @ApiForbiddenResponse({
      description: 'Forbidden',
      schema: { $ref: getSchemaPath(PForbidden) },
    })
    @ApiBody({
      schema: {
        description: 'Following schema is valid for creating a new place.',
        allOf: [
          {
            $ref: getSchemaPath(PPlacesPostRequest),
          }
        ]
      },
      description: 'Request payload for creating new place',
      examples: {
        olalocation: {
          value: PPlacesPostLOCRequestExample
        },
        hypercharger: {
          value: PPlacesPostHCRequestExample
        },
        experiencecenter: {
          value: PPlacesPostECRequestExample
        },
        servicecenter: {
          value: PPlacesPostSCRequestExample
        }
      }
    })
    async create(
      @Body() payload: PPlacesPostRequest,
      @Request() request,
    ): Promise<PPlacesPostResponse> {
      return await this.placesService.create(payload, request.user.id);
    }
  
    @Get('')
    @HttpCode(200)
    @AccessParams('read', 'places')
    @ApiResponse({
      status: 200,
      description: 'List of places by layer',
      schema: {
        allOf: [
          {
            properties: {
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(PPlacesGetResponse) },
              },
              meta: {
                type: 'object',
                $ref: getSchemaPath(PaginatedDto)
              }
            },
          },
        ],
      },
    })
    @ApiBadRequestResponse({
      description: 'Bad Request',
      schema: { $ref: getSchemaPath(PBadRequest) },
    })
    @ApiForbiddenResponse({
      description: 'Forbidden',
      schema: { $ref: getSchemaPath(PForbidden) },
    })
    @ApiQuery({ name: 'page', type: 'number', required: true, example: 1 })
    @ApiQuery({ name: 'limit', type: 'number', required: true, example: 10 })
    @ApiQuery({ name: 'layer', type: 'string', required: true, enum: LayerType })
    async index(
      @Query('page', ParseIntPipe) page,
      @Query('limit', ParseIntPipe) limit,
      @Query('layer', new EnumValidationPipe(LayerType)) layer: LayerType,
      @Request() request,
    ): Promise<{ items: Array<PPlacesGetResponse>, meta: PaginatedDto<any> }> {
      if (page < 1 || limit < 1) {
        throw new BadRequestException({
          error: 'Bad Request',
          messages: ['page & limit must be > 0'],
          statusCode: HttpStatus.BAD_REQUEST,
        } as ErrorFormat);
      }
      if (!layer) {
        throw new BadRequestException({
          error: 'Bad Request',
          messages: ['At least one layer is required'],
          statusCode: HttpStatus.BAD_REQUEST,
        } as ErrorFormat);
      }
      return this.placesService.getByLayer(layer, page, limit, request.user.id);
    }
  }
  