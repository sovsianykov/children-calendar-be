"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const toPrismaColor = (color) => color.replace('-', '_');
const toApiColor = (color) => color.replace('_', '-');
function toApiLesson(lesson) {
    return { ...lesson, color: toApiColor(lesson.color) };
}
let LessonsService = class LessonsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const data = { ...dto, color: toPrismaColor(dto.color) };
        const lesson = await this.prisma.lesson.create({ data: data });
        return toApiLesson(lesson);
    }
    async findAll(day) {
        const where = day !== undefined ? { day } : {};
        const lessons = await this.prisma.lesson.findMany({
            where,
            orderBy: [{ day: 'asc' }, { period: 'asc' }],
        });
        return lessons.map(toApiLesson);
    }
    async findOne(id) {
        const lesson = await this.prisma.lesson.findUnique({ where: { id } });
        if (!lesson)
            throw new common_1.NotFoundException(`Lesson ${id} not found`);
        return toApiLesson(lesson);
    }
    async update(id, dto) {
        await this.findOne(id);
        const data = dto.color ? { ...dto, color: toPrismaColor(dto.color) } : { ...dto };
        const lesson = await this.prisma.lesson.update({ where: { id }, data: data });
        return toApiLesson(lesson);
    }
    async remove(id) {
        await this.findOne(id);
        const lesson = await this.prisma.lesson.delete({ where: { id } });
        return toApiLesson(lesson);
    }
};
exports.LessonsService = LessonsService;
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LessonsService);
//# sourceMappingURL=lessons.service.js.map