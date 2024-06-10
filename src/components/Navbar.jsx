import React from 'react';
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
           <h1>
            <Link to="/">#VANLIFE</Link>
           </h1>

           <div>
                <Link className='about' to='/about'>About</Link>
                <Link className='vans' to='/vans'>Vans</Link>
           </div>
        </nav>
    )
}