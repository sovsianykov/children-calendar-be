import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateEventDto) {
    return this.prisma.calendarEvent.create({ data: dto });
  }

  findAll() {
    return this.prisma.calendarEvent.findMany({
      orderBy: [{ date: 'asc' }, { time: 'asc' }],
    });
  }

  findByDate(date: string) {
    return this.prisma.calendarEvent.findMany({
      where: { date },
      orderBy: { time: 'asc' },
    });
  }

  findByCategory(category: string) {
    return this.prisma.calendarEvent.findMany({
      where: { category: category as any },
      orderBy: [{ date: 'asc' }, { time: 'asc' }],
    });
  }

  async findOne(id: string) {
    const event = await this.prisma.calendarEvent.findUnique({ where: { id } });
    if (!event) throw new NotFoundException(`Event ${id} not found`);
    return event;
  }

  async update(id: string, dto: UpdateEventDto) {
    await this.findOne(id);
    return this.prisma.calendarEvent.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.calendarEvent.delete({ where: { id } });
  }
}
