import EventItem from './event-item';
import classes from './event-list.module.css'

function EventList(props: { items: any[]; }) {
    return (
        <ul className={classes.list} >
            {props.items.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                />
            ))}
        </ul>
    );
}

export default EventList;
