import React from 'react';
import './tabs.css';

import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome, faChartBar, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function BottomBar() {
    return (
        <div>
            <Navbar bg = "light" fixed = "bottom">
                <div className = "icon"><FontAwesomeIcon icon = {faHome} /></div>
                <div className = "icon"><FontAwesomeIcon icon = {faChartBar} /></div>
                <div className = "icon"><FontAwesomeIcon icon = {faSearch} /></div>
                <div className = "icon"><FontAwesomeIcon icon = {faUserCircle} /></div>
            </Navbar>
        </div>
    );
}

export default BottomBar;   