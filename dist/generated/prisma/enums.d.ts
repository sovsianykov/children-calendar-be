export declare const EventCategory: {
    readonly school: "school";
    readonly sports: "sports";
    readonly birthday: "birthday";
    readonly doctor: "doctor";
    readonly play: "play";
    readonly music: "music";
    readonly other: "other";
};
export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory];
