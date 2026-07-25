import { IsArray, IsBoolean, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  jobTitle: string;

  @IsString()
  companyName: string;

  @IsString()
  date: string;

  @IsArray()
  @IsString({ each: true })
  description: string[];

  @IsBoolean()
  latest: boolean;

  @IsString()
  category: string;
}
