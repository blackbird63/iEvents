import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list'
import Head from 'next/head';
import NewsletterRegistration from '../components/input/newsletter-registration';

function HomePage(props: { events: any[]; }) {
  
    return (
        <div>
            <Head>
                <title>iEvent</title>
                <meta name="description" content="Find a lot great events with iEvent" />
            </Head>
            <NewsletterRegistration />
            <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
    }
}

export default HomePage;
