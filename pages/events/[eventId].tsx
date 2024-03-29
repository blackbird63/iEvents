import { getEventById, getAllEvents } from '../../helpers/api-util';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Head from 'next/head';
import Comments from '../../components/input/comments';

function EventDetailPage(props: { selectedEvent: any }) {
    const event = JSON.parse(props.selectedEvent);
    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        );
    }
    return (
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description} />
            </Head>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event._id} />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const events = await getAllEvents();
    const paths = events.map((event: any) => ({ params: { eventId: event.id } }));
    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps(context: { params: { eventId: any } }) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);
    return {
        props: {
            selectedEvent: JSON.stringify(event),
        },
        revalidate: 60
    };
}

export default EventDetailPage;
