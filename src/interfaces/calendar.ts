


export interface Calendars {
    events: Event[],
    eventActive: Event | null
}

export interface Event {
    id?: number;
    title: string;
    allDay?: boolean;
    start: Date;
    end: Date;
    desc: string
    user?: {
        id: number,
        username: string
    }
}

