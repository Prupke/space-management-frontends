import React from 'react'

import menuItemReparaties from './images/reparaties.png';
import menuItemHome from './images/home.png';
import menuItemAgenda from './images/agenda.png';
import menuItemProfiel from './images/profiel.png';
import menuItemBeheerder from './images/beheerder.png';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <div class="mobile-menu">
            <Link class="menu-btn" to="/profile" ><img src={menuItemProfiel} /></Link>
            <Link class="menu-btn" to="/agenda" ><img src={menuItemAgenda} /></Link>
            <Link class="menu-btn home" to="/" ><img src={menuItemHome} /></Link>
            <Link class="menu-btn" to="/reparaties" ><img src={menuItemReparaties} /></Link>
            <Link class="menu-btn" to="/beheerder" ><img src={menuItemBeheerder} /></Link>
        </div>
    )
}
export default Menu