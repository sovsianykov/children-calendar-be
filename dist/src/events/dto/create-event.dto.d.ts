export declare enum EventCategory {
    school = "school",
    sports = "sports",
    birthday = "birthday",
    doctor = "doctor",
    play = "play",
    music = "music",
    other = "other"
}
export declare class CreateEventDto {
    title: string;
    date: string;
    time?: string;
    category: EventCategory;
    description?: string;
}
