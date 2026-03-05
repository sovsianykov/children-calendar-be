import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(dto: CreateEventDto): import("@prisma/client").Prisma.Prisma__CalendarEventClient<{
        title: string;
        date: string;
        time: string | null;
        category: import("@prisma/client").$Enums.EventCategory;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(date?: string, category?: string): import("@prisma/client").Prisma.PrismaPromise<{
        title: string;
        date: string;
        time: string | null;
        category: import("@prisma/client").$Enums.EventCategory;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        date: string;
        time: string | null;
        category: import("@prisma/client").$Enums.EventCategory;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateEventDto): Promise<{
        title: string;
        date: string;
        time: string | null;
        category: import("@prisma/client").$Enums.EventCategory;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        date: string;
        time: string | null;
        category: import("@prisma/client").$Enums.EventCategory;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
