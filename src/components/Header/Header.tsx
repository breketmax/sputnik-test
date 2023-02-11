import React from 'react';
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
    return (
        <div className='page-header'>
                <NavLink to="weather">Weather</NavLink>
                <NavLink to="gallery">Gallery</NavLink>
        </div>
    );
};

export default Header;