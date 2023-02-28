import { IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  header: string;

  @IsString()
  description: string;
}
