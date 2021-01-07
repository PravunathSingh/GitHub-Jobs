import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-4 p-2">
            <Link to="/" className="navbar-brand mx-auto h1 mb-0">GitHub Jobs</Link>
        </nav>
    )
}

export default Navbar;
