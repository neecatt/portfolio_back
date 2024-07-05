import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Injectable()
export class ExperienceService {
  constructor(private prisma: PrismaService) {}

  async createExperience(createExperienceDto: CreateExperienceDto) {
    return await this.prisma.experience.create({
      data: createExperienceDto,
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
    }
    return experience;
  }

  async update(id: number, updateExperienceDto: UpdateExperienceDto) {
    const foundExperience = await this.prisma.experience.findUnique({
      where: {
        id,
      },
    });
    if (!foundExperience) {
      throw new BadRequestException(`Experience with id ${id} not found`);
    }

    return await this.prisma.experience.update({
      where: {
        id: id,
      },
      data: updateExperienceDto,
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
    }

    const experience = await this.prisma.experience.delete({
      where: {
        id: id,
      },
    });

    return experience;
  }
}
