import React from 'react';
import './Header.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import HeaderTop from '../HeaderTop/HeaderTop';
const Header = () => {
    return (
        <div>
            <HeaderTop/>
            <NavigationBar/>
        </div>
    );
};

export default Header;