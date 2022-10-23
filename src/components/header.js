import React from "react";
import {Link} from 'react-router-dom'
import './header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black': ''}>
            <div className="header--logo">
                <a href='/'>
                    <img src="/images/Luztol Logo.png"/>
                </a>
            </div>
            <div className="header--user">
                <Link to='/login'><img src="/images/default user.png" /></Link>
            </div>
        </header>
    )
}