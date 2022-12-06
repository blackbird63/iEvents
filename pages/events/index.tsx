import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../helpers/api-util';

function AllEventsPage(props: { events: any }) {
    const { events } = props;
    const router = useRouter();

    function findEventsHandler(year: number, month: number) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
}
export async function getStaticProps() {
    const events = await getAllEvents();
    return {
        props: {
            events: events,
        },
        revalidate: 60,
    };
}

export default AllEventsPage;
