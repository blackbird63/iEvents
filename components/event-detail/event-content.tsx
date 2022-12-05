import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import classes from './event-content.module.css';

function EventContent(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;