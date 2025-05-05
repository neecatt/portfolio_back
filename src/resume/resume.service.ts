import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResumeService {
  constructor(private readonly prisma: PrismaService) {}
  async createResume(createResumeDto: CreateResumeDto) {
    return await this.prisma.resume.create({
      data: createResumeDto,
    });
  }

  async findAll() {
    return await this.prisma.resume.findMany();
  }

  async findOne(id: number) {
    const resume = await this.prisma.resume.findUnique({
      where: {
        id: id,
      },
    });
    if (!resume) {
      throw new BadRequestException(`Resume with id ${id} not found`);
    }
    return resume;
  }

  async update(id: number, updateResumeDto: UpdateResumeDto) {
    const foundResume = await this.prisma.resume.findUnique({
      where: {
        id,
      },
    });
    if (!foundResume) {
      throw new BadRequestException(`Resume with id ${id} not found`);
    }

    return await this.prisma.resume.update({
      where: {
        id: id,
      },
      data: updateResumeDto,
    });
  }

  async remove(id: number) {
    const foundResume = await this.prisma.resume.findUnique({
      where: {
        id: id,
      },
    });

    if (!foundResume) {
      throw new BadRequestException(`Resume with id ${id} not found`);
    }

    const resume = await this.prisma.resume.delete({
      where: {
        id: id,
      },
    });

    return resume;
  }
}
