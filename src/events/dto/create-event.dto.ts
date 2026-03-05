import { IsString, IsOptional, IsEnum, Matches } from 'class-validator';

export enum EventCategory {
  school = 'school',
  sports = 'sports',
  birthday = 'birthday',
  doctor = 'doctor',
  play = 'play',
  music = 'music',
  other = 'other',
}

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'date must be in YYYY-MM-DD format',
  })
  date: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d{2}:\d{2}$/, { message: 'time must be in HH:MM format' })
  time?: string;

  @IsEnum(EventCategory)
  category: EventCategory;

  @IsOptional()
  @IsString()
  description?: string;
}
