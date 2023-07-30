import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Max, Min } from 'class-validator';
import {
  IsNotEmpty,
  IsNumber,
} from "class-validator";
import {
  IPlacesPostRequest,
  IPlacesPostResponse,
  IPlacesPutRequest,
  IPlacesPutResponse,
  IPlacesGetResponse,
  IPlacesDeleteResponse,
  LayerType,
} from "../../../../types/places/interfaces";
import { trimInput } from "../../../utils/validator/trim-payload-input.validator"
import { Transform } from 'class-transformer';
export class PPlacesPostRequest implements IPlacesPostRequest {
  @ApiProperty({
    type: 'string',
    required: true,
    example: 'HC001',
    description: 'Unique identifire for place'
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => trimInput(value))
  id: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Ola Campus Pune',
    description: 'A free-form string that represents the name of a place',
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => trimInput(value))
  name: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Amar tech park, Balewadi, Pune',
    description: 'A free-form string that represents the address of a place',
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => trimInput(value))
  address: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Pune',
    description: 'A string that represents the city of a place',
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => trimInput(value))
  city: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Maharashtra',
    description: 'A string that represents the state of a place',
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => trimInput(value))
  state: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: '411045',
    description: 'A string that represents the pincode of a place',
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => trimInput(value))
  postalCode: string;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 18.575733225410158,
    description: 'It should be a WGS84 value between -90.0 and 90.0',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 73.76489637767304,
    description: 'It should be a WGS84 value between -180.0 and 180.0',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'olalocation',
    enum: LayerType,
    description: 'A string that represents a layer',
  })
  @IsEnum(LayerType)
  @IsNotEmpty()
  layer: LayerType;

  @ApiProperty({
    type: 'object',
    required: false,
    example: { "status": "active" },
    description: 'Json object for extra fields',
  })
  @IsOptional()
  addendum?: Record<string, unknown>;
}

export class PPlacesPostResponse implements IPlacesPostResponse {

  @ApiProperty({ type: 'string', required: true, example: 'Operation performed sucessfully' })
  @IsNotEmpty()
  message: string;

  @ApiProperty({ type: 'number', required: true, default: 201, example: 201 })
  @IsNotEmpty()
  statusCode: number;
}

export class PPlacesPutRequest implements IPlacesPutRequest {
  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Ola Campus Pune',
    description: 'A free-form string that represents the name of a place',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => trimInput(value))
  name: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Amar tech park, Balewadi, Pune',
    description: 'A free-form string that represents the address of a place',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => trimInput(value))
  address: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Pune',
    description: 'A string that represents the city of a place',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => trimInput(value))
  city: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Maharashtra',
    description: 'A string that represents the state of a place',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => trimInput(value))
  state: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: '411045',
    description: 'A string that represents the pincode of a place',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => trimInput(value))
  postalCode: string;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 18.575733225410158,
    description: 'It should be a WGS84 value between -90.0 and 90.0',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 73.76489637767304,
    description: 'It should be a WGS84 value between -180.0 and 180.0',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'olalocation',
    enum: LayerType,
    description: 'A string that represents a layer',
  })
  @IsEnum(LayerType)
  @IsNotEmpty()
  layer: LayerType;

  @ApiProperty({
    type: 'object',
    required: false,
    example: { "status": "active" },
    description: 'Json object for extra fields',
  })
  @IsOptional()
  addendum?: Record<string, unknown>;
}

export class PPlacesPutResponse implements IPlacesPutResponse {
  @ApiProperty({ type: 'string', required: true, example: 'Operation performed sucessfully' })
  @IsNotEmpty()
  message: string;

  @ApiProperty({ type: 'number', required: true, default: 200, example: 200 })
  @IsNotEmpty()
  statusCode: number;
}


export class PPlacesGetResponse implements IPlacesGetResponse {
  @ApiProperty({
    type: 'string',
    required: true,
    example: 'HC001',
    description: 'A string that is unique identifire of a record'
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Ola Campus Pune',
    description: 'A free-form string that represents the name of a place',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Amar tech park, Balewadi, Pune',
    description: 'A free-form string that represents the address of a place',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Pune',
    description: 'A string that represents the city of a place',
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Maharashtra',
    description: 'A string that represents the state of a place',
  })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: '411045',
    description: 'A string that represents the pincode of a place',
  })
  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 18.575733225410158,
    description: 'It should be a WGS84 value between -90.0 and 90.0',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 73.76489637767304,
    description: 'It should be a WGS84 value between -180.0 and 180.0',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;

  @ApiProperty({
    type: 'string',
    required: true,
    example: LayerType.hypercharger,
    enum: LayerType,
    description: 'A string that represents a layer',
  })
  @IsEnum(LayerType)
  @IsNotEmpty()
  layer: LayerType;

  @ApiProperty({
    type: 'object',
    required: false,
    example: { "status": "active" },
    description: 'Json object for extra fields',
  })
  @IsOptional()
  addendum?: Record<string, unknown>;
}

export class PPlacesDeleteResponse implements IPlacesDeleteResponse {
  @ApiProperty({ type: 'string', required: true, example: 'Operation performed sucessfully' })
  @IsNotEmpty()
  message: string;

  @ApiProperty({ type: 'number', required: true, default: 200, example: 200 })
  @IsNotEmpty()
  statusCode: number;
}
