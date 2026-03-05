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
exports.CreateLessonDto = exports.LessonColor = void 0;
const class_validator_1 = require("class-validator");
var LessonColor;
(function (LessonColor) {
    LessonColor["kid_blue"] = "kid-blue";
    LessonColor["kid_green"] = "kid-green";
    LessonColor["kid_pink"] = "kid-pink";
    LessonColor["kid_red"] = "kid-red";
    LessonColor["kid_orange"] = "kid-orange";
    LessonColor["kid_purple"] = "kid-purple";
    LessonColor["kid_yellow"] = "kid-yellow";
})(LessonColor || (exports.LessonColor = LessonColor = {}));
class CreateLessonDto {
    subject;
    day;
    period;
    room;
    teacher;
    color;
}
exports.CreateLessonDto = CreateLessonDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(4),
    __metadata("design:type", Number)
], CreateLessonDto.prototype, "day", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", Number)
], CreateLessonDto.prototype, "period", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "room", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "teacher", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(LessonColor),
    __metadata("design:type", String)
], CreateLessonDto.prototype, "color", void 0);
//# sourceMappingURL=create-lesson.dto.js.map