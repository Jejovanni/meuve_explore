import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='Navbar'>
                <div className='logo'>meuve</div>
                <div id='btnDiv'>
                </div>
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