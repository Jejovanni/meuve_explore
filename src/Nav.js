import React from 'react';
import Button from '@mui/material/Button';
import './Nav.css';

function Nav() {
    return (
        <nav className='Navbar'>
            <div className='logo'>meuve</div>
            <div id='btnDiv'>
                <Button className='navLinks' variant='text'>Places</Button>
                <Button className='navLinks' variant='text'>Events</Button>
                <Button className='navLinks' variant='text'>Tickets</Button>
                <Button className='navLinks' variant='text'>Partners</Button>
                <Button className='navLinks' variant='text'>Log In</Button>
                <Button className='btns' variant='contained'>Get Started</Button>
            </div>

        </nav>
    )
}

export default Nav;