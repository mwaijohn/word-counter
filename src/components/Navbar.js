import React from 'react'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h2>Word Count</h2>
                </div>
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
