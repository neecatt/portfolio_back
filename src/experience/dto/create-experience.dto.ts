import { IsBoolean, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  jobTitle: string;

  @IsString()
  companyName: string;

  @IsString()
  date: string;

  @IsString()
  description: string;

  @IsBoolean()
  latest: boolean;
}
