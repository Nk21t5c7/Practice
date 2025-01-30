import React from 'react';

interface CardProps{
    
}

const Card: React.FC<CardProps> = ({copyright}) => {
    return (
        <footer>
            <p>{copyright}</p>
        </footer>
    )
}



export default Card;