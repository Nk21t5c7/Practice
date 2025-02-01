import React from 'react';

interface HeaderProps{
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <header className='mb-3'>
            <h1 className='text-2xl'>{title}</h1>
        </header>
    )
}

export default Header;