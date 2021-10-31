import React, { Fragment, useState } from 'react';
import { useWindowSize } from '../custom-hooks/window-size.hook';
import FixtTopNavigation from './FixedTopNavigation';
import FixedBottomNavigation from './FixedBottomNavigation';

const Layout = (props: any) => {

    const { children } = props;
    const size = useWindowSize();

    const onMenuChange = (value: any) => {
        console.log(value);
    }

    return (
        <Fragment>
            {
                size && size.width > 900 ? (
                    <FixtTopNavigation>
                        {children}
                    </FixtTopNavigation>
                ) : (
                    <FixedBottomNavigation onMenuChange={onMenuChange}>
                        {children}
                    </FixedBottomNavigation>
                )
            }
        </Fragment>
    )
}

export default Layout;