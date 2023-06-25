import { EventProps } from 'react-big-calendar';

export interface PropsEvent {
    id: number;
    title: string;
    allDay?: boolean;
    start: Date;
    end: Date;
    user: {
      id: number,
      username: string
    }
}

const CalendarEvent: React.FC<EventProps<PropsEvent>> = ({ event }) => {
    return (
        <>
            <strong>{event.title} </strong>
            <span>- {event.user.username}</span>
        </>
    );
};

export default CalendarEvent;