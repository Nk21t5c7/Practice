// import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header className='flex bg-slate-200 p-10 justify-between items-center'>
            <h1 className='text-4xl font-bold'>Weather</h1>
            <nav >
                <ul className='flex gap-8 items-center'>
                    <li className="hover:text-blue-600" ><Link to = '/' >Home</Link></li>
                    <li className="hover:text-blue-600" ><Link to = '/search' >Search</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;