import React from 'react';
import './Header.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import HeaderTop from '../HeaderTop/HeaderTop';
const Header=() => {
    //header with two components along
    return (
        <div className=''>
            <HeaderTop/>
            <NavigationBar/>
        </div>
    );
};

export default Header;