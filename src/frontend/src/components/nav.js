import React from 'react';
import { Link } from "react-router-dom";


export default function Nav() {
    return(
        <div className="nav-menu">
            <nav>
                <ul>
                    <Link to="/">
                        <li className="nav-item">Home</li>
                    </Link>
                    <Link to="/portfolio">
                        <li className="nav-item">Port</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
