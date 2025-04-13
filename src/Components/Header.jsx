import React from 'react';
import { NavLink } from 'react-router';
import "../App.css"
const Header = () => {
    return (
        <div>
            <nav className='flex gap-3 font-semibold'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <NavLink to="/headphone">Headphone</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;