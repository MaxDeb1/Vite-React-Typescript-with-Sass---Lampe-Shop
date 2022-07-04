import React from 'react';

import './style.scss';

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar__list'>
                <li className="navbar__item"><a href="">Collections</a></li>
                <li className="navbar__item"><a href="">Blog</a></li>
                <li className="navbar__item"><a href="">About</a></li>
                <li className="navbar__item"><a href="">Contracts</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;