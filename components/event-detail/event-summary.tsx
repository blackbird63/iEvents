import classes from './event-summary.module.css';

function EventSummary(props: { title: any; }) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;