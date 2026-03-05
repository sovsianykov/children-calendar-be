export declare enum LessonColor {
    kid_blue = "kid-blue",
    kid_green = "kid-green",
    kid_pink = "kid-pink",
    kid_red = "kid-red",
    kid_orange = "kid-orange",
    kid_purple = "kid-purple",
    kid_yellow = "kid-yellow"
}
export declare class CreateLessonDto {
    subject: string;
    day: number;
    period: number;
    room?: string;
    teacher?: string;
    color: LessonColor;
}
