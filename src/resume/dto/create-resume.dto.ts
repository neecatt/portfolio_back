import { IsString } from 'class-validator';

export class CreateResumeDto {
  @IsString()
  link: string;
}
