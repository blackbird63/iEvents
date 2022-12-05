import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import classes from './error-alert.module.css';

function ErrorAlert(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;