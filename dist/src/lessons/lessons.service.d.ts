import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
export declare class LessonsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateLessonDto): Promise<any>;
    findAll(day?: number): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: UpdateLessonDto): Promise<any>;
    remove(id: string): Promise<any>;
}
