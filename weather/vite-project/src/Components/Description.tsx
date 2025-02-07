import React from "react";

interface CityProps{
    city:string;
}


const Description:React.FC<CityProps> = ({city}) => {

    return (
        <div>
            {city}

        </div>
    )
}

export default Description;