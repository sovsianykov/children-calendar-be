import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
export declare class LessonsController {
    private readonly lessonsService;
    constructor(lessonsService: LessonsService);
    create(dto: CreateLessonDto): Promise<any>;
    findAll(day?: string): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: UpdateLessonDto): Promise<any>;
    remove(id: string): Promise<any>;
}
