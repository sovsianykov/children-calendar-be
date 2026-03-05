import {
  IsString,
  IsOptional,
  IsEnum,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export enum LessonColor {
  kid_blue = 'kid-blue',
  kid_green = 'kid-green',
  kid_pink = 'kid-pink',
  kid_red = 'kid-red',
  kid_orange = 'kid-orange',
  kid_purple = 'kid-purple',
  kid_yellow = 'kid-yellow',
}

export class CreateLessonDto {
  @IsString()
  subject: string;

  @IsInt()
  @Min(0)
  @Max(4)
  day: number; // 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri

  @IsInt()
  @Min(1)
  @Max(10)
  period: number; // 1-based

  @IsOptional()
  @IsString()
  room?: string;

  @IsOptional()
  @IsString()
  teacher?: string;

  @IsEnum(LessonColor)
  color: LessonColor;
}
