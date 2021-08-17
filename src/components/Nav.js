import React from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/home' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/add' exact activeClassName='active'>
                        New Question
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/leaderboard' exact activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Log out
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
