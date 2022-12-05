import {
    Fragment,
    JSXElementConstructor,
    ReactElement,
    ReactFragment,
    ReactPortal,
} from 'react';
import MainHeader from './main-header';

function Layout(props: {
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
}) {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;
