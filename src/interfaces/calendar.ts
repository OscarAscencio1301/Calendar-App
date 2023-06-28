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

export interface EventResponse {
    ok:    boolean;
    msg:   string;
    event: Event;
}

export interface EventResponseMultiple {
    ok:    boolean;
    msg:   string;
    events: Event[];
}


// export interface Event {
//     start:  string;
//     end:    string;
//     title:  string;
//     desc:   string;
//     user:   string;
//     status: boolean;
//     id:     string;
// }


