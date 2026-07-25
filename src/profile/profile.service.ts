import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  get() {
    return this.prisma.profile.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
  }

  update(data: any) {
    return this.prisma.profile.upsert({ where: { id: 1 }, create: { id: 1, ...data }, update: data });
  }
}
