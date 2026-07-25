import { IsArray, IsBoolean, IsInt, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsUrl()
  githubLink?: string;

  @IsOptional()
  @IsUrl()
  websiteLink?: string;

  @IsArray()
  @IsString({ each: true })
  techStack: string[];

  @IsOptional() @IsString() category?: string;
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsBoolean() featured?: boolean;
  @IsOptional() @IsBoolean() published?: boolean;
  @IsOptional() @IsInt() sortOrder?: number;
  @IsOptional() @IsString() role?: string;
  @IsOptional() @IsString() challenge?: string;
  @IsOptional() @IsString() solution?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) outcomes?: string[];
  @IsOptional() @IsString() thumbnail?: string;
}
