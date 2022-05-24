import React from 'react'

import menuItemReparaties from './images/reparaties.png';
import menuItemHome from './images/home.png';
import menuItemAgenda from './images/agenda.png';
import menuItemProfiel from './images/profiel.png';
import menuItemBeheerder from './images/beheerder.png';

const Menu = () => {
    return (
        <div class="mobile-menu">
            <button class="menu-btn"><img src={menuItemProfiel}></img></button>
            <button class="menu-btn"><img src={menuItemAgenda}></img></button>
            <button class="menu-btn home"><img src={menuItemHome}></img></button>
            <button class="menu-btn"><img src={menuItemReparaties}></img></button>
            <button class="menu-btn"><img src={menuItemBeheerder}></img></button>
        </div>
    )
}
export default Menu