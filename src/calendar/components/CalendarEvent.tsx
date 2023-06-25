import { EventProps } from 'react-big-calendar';
import { Event } from '../../interfaces/calendar';



export const CalendarEvent: React.FC<EventProps<Event>> = ({ event }) => {
    return (
        <>
            <strong>{event.title} </strong>
            <span>- {event?.user?.username}</span>
        </>
    );
};

