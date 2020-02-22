import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/home' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' exact activeClassName='active'>
                        New
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leader-board' exact activeClassName='active'>
                        Leader Board
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/logout' exact activeClassName='active'>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}