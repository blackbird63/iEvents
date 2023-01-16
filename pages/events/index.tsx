import Head from 'next/head';
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
            <Head>
                <title>All Events</title>
                <meta name="description" content="Find a lot great events with iEvent" />
            </Head>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
}
export async function getStaticProps() {
    const events = await getAllEvents();
    return {
        props: {
            events: JSON.stringify(events),
        },
        revalidate: 60,
    };
}

export default AllEventsPage;
