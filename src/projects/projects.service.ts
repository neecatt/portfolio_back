import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto) {
    const { techStack, ...projectData } = createProjectDto;

    const existingTechStack = await this.prisma.techStack.findMany({
      where: {
        name: {
          in: techStack,
        },
      },
    });

    const existingTechStackMap = new Map(
      existingTechStack.map((item) => [item.name, item.id]),
    );

    const techStackData = techStack.map((name) => ({
      where: { id: existingTechStackMap.get(name) || undefined, name },
      create: { name },
    }));

    return await this.prisma.projects.create({
      data: {
        ...projectData,
        techStack: {
          connectOrCreate: techStackData,
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.projects.findMany({
      include: {
        techStack: true,
      },
    });
  }

  async findOne(id: number) {
    const existingProject = await this.prisma.projects.findUnique({
      where: {
        id,
      },
      include: {
        techStack: true,
      },
    });
    if (!existingProject) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    return existingProject;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const { techStack, ...projectData } = updateProjectDto;

    const existingTechStack = await this.prisma.techStack.findMany({
      where: {
        name: {
          in: techStack,
        },
      },
    });

    const existingTechStackMap = new Map(
      existingTechStack.map((item) => [item.name, item.id]),
    );

    const techStackData = techStack.map((name) => ({
      where: { id: existingTechStackMap.get(name) || undefined, name },
      create: { name },
    }));

    return await this.prisma.projects.update({
      where: {
        id,
      },
      data: {
        ...projectData,
        techStack: {
          connectOrCreate: techStackData,
        },
      },
    });
  }

  async remove(id: number) {
    const existingProject = await this.prisma.projects.findUnique({
      where: {
        id,
      },
    });

    if (!existingProject) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    const project = await this.prisma.projects.delete({
      where: {
        id,
      },
    });

    return project;
  }
}
