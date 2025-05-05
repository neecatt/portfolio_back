import { IsArray, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  githubLink?: string;

  @IsString()
  websiteLink?: string;

  @IsArray({ each: true })
  techStack: string[];
}
