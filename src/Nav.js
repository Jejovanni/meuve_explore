import React from 'react';
import PositionedMenu from './PositionedMenu';
import './Nav.css';

function Nav() {
    return (
        <nav className='Navbar'>
            <div className='logo'>meuve</div>
            <div id='btnDiv'>
            <PositionedMenu/>
            </div>

        </nav>
    )
}

export default Nav;