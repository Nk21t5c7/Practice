import React from 'react';

interface FooterProps{
    copyright: string;
}

const Footer: React.FC<FooterProps> = ({copyright}) => {
    return (
        <footer>
            <p>{copyright}</p>
        </footer>
    )
}

export default Footer;