import React from 'react'

import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <nav>
                <ul style= {{display: 'flex', justifyContent:'space-around'}}>
                    <li>
                        <Link to='/home'> Home </Link>
                    </li>
                    <li>
                        <Link to='/profile'> Profile </Link>
                    </li>
                    <li>
                        <Link to='/aboutus'> About Us </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
