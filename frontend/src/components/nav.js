import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-entypo/home';
import portfolioIcon from '@iconify/icons-carbon/portfolio';

import {HOMEPAGE_LINK_TEXT, PORTFOLIO_LINK_TEXT} from "config";

const Nav = (props) => {
    return(
        <nav className="wp-nav wp-nav_ml">
            <Link className="wp-nav--item" alt={HOMEPAGE_LINK_TEXT} to={`/`}>
                <Icon icon={homeIcon} style={{color: '#ffff', fontSize: '30px'}} />
            </Link>
            <Link className="wp-nav--item" alt={PORTFOLIO_LINK_TEXT} to={`/portfolio`}>
                <Icon icon={portfolioIcon} style={{color: '#ffff', fontSize: '30px'}} />
            </Link>
            
        </nav>
    )
}

export default Nav;