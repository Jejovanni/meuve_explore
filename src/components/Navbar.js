import React, { useState } from 'react'
import { MenuRounded, CloseRounded } from '@mui/icons-material'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div>
            <nav className='Navbar'>
                <div className='logo'>meuve</div>
                <div id='btnDiv'>
                    <Button className='menu-toggle' onClick={toggleMenu}>
                        {isOpen ? <CloseRounded /> : <MenuRounded />}
                    </Button>
                    {/* Mobile menu */}
                    {isOpen && (
                        <div id='menuTray'>
                            <nav id='overlayNavbar'>
                                <div className='logo'>meuve</div>
                                <div id='btnDiv'>
                                    <Button className='menu-toggle' onClick={toggleMenu}>
                                        <CloseRounded />
                                    </Button>
                                </div>

                            </nav>

                            <div id='menuTrayItems'>

                                <ul id='trayList'>
                                    <li>About</li>
                                    <li><Link className='trayButton'>Login</Link></li>
                                    <li><Link className='trayButton'>Signup</Link></li>
                                </ul>
                                
                            </div>
                        </div>

                    )}


                </div>
                {/* Desktop Menu */}
                <div id='listItems'>
                    <ul>
                        <li>About</li>
                    </ul>
                    <button>Login</button>
                    <button>Signup</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar