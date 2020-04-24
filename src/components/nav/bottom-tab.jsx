import React from 'react';
import './tabs.css';

import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faHome, faChartBar, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function BottomBar() {
    return (
        <div>
            <Navbar bg="light" fixed="bottom">
                <Link to="/" className="icon"><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/profile" className="icon"><FontAwesomeIcon icon={faChartBar} /></Link>
                <Link to="/search" className="icon"><FontAwesomeIcon icon={faSearch} /></Link>
                <Link className="icon"><FontAwesomeIcon icon={faUserCircle} /></Link>
            </Navbar>
        </div>
    );
}

export default BottomBar;   