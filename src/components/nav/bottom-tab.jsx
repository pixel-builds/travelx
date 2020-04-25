import React from 'react';
import './tabs.css';

import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faHome, faSearch, faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class BottomBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" fixed="bottom">
                    <Link to="/" className="icon"><FontAwesomeIcon icon={faHome} /></Link>
                    <Link to="/dashboard" className="icon"><FontAwesomeIcon icon={faEnvelope} /></Link>
                    <Link to="/search" className="icon"><FontAwesomeIcon icon={faSearch} /></Link>
                    <Link to="/profile" className="icon"><FontAwesomeIcon icon={faUserCircle} /></Link>
                </Navbar>
            </div>
        );
    }
}

export default BottomBar;