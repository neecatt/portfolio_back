import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { Experience } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Injectable()
export class ExperienceService {

  constructor(private prisma: PrismaService) {}



  async createExperience(createExperienceDto: CreateExperienceDto): Promise<Experience>{
    const {header, description} = createExperienceDto;
    return await this.prisma.experience.create({
      data: {
        header,
        description,     
        },
    });
  }

  async findAll() {
   return await this.prisma.experience.findMany();
  }

  async findOne(id: number) {
    const experience = await this.prisma.experience.findUnique({
      where: {
        id: id,
        },
        });
    if (!experience) {
      throw new BadRequestException(`Experience with id ${id} not found`);
    };
    return experience;
  }

  async update(id: number, updateExperienceDto: UpdateExperienceDto) {
    const {header, description} = updateExperienceDto;
    const foundExperience = await this.prisma.experience.findUnique({
      where: {
        id: id,
        },
        });
    if (!foundExperience) {
      throw new BadRequestException(`Experience with id ${id} not found`);
    };
    
    return await this.prisma.experience.update({
      where: {
        id: id,
        },
        data: {
          header,
          description,
          },
          });
  }

  async remove(id: number) {

    const foundExperience = await this.prisma.experience.findUnique({
      where: {
        id: id,
        },
        });


    if (!foundExperience) {
      throw new BadRequestException(`Experience with id ${id} not found`);
    };



    const experience = await this.prisma.experience.delete({
      where: {
        id: id,
        },
        });
    
 

  return experience;
}

    
}

