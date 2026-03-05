import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './events/events.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [PrismaModule, EventsModule, LessonsModule],
})
export class AppModule {}
