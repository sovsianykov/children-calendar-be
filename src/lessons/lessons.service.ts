import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

// Convert "kid-blue" (API/frontend) <-> "kid_blue" (Prisma enum key)
const toPrismaColor = (color: string) => color.replace('-', '_');
const toApiColor = (color: string) => color.replace('_', '-');

function toApiLesson(lesson: any) {
  return { ...lesson, color: toApiColor(lesson.color) };
}

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLessonDto) {
    const data = { ...dto, color: toPrismaColor(dto.color) };
    const lesson = await this.prisma.lesson.create({ data: data as any });
    return toApiLesson(lesson);
  }

  async findAll(day?: number) {
    const where = day !== undefined ? { day } : {};
    const lessons = await this.prisma.lesson.findMany({
      where,
      orderBy: [{ day: 'asc' }, { period: 'asc' }],
    });
    return lessons.map(toApiLesson);
  }

  async findOne(id: string) {
    const lesson = await this.prisma.lesson.findUnique({ where: { id } });
    if (!lesson) throw new NotFoundException(`Lesson ${id} not found`);
    return toApiLesson(lesson);
  }

  async update(id: string, dto: UpdateLessonDto) {
    await this.findOne(id);
    const data = dto.color ? { ...dto, color: toPrismaColor(dto.color) } : { ...dto };
    const lesson = await this.prisma.lesson.update({ where: { id }, data: data as any });
    return toApiLesson(lesson);
  }

  async remove(id: string) {
    await this.findOne(id);
    const lesson = await this.prisma.lesson.delete({ where: { id } });
    return toApiLesson(lesson);
  }
}
