import React from "react";

interface CityProps{
    city:{
        name?: string;
        country?: string;
        description?: string
    }
}


const Description:React.FC<CityProps> = ({city}) => {

    console.log(city);
    return (
        <div className="descriptionContainer bg-indigo-50 p-4 ">
            <h3 className = "text-2xl">
                Country : {city.country}
            </h3>
            <p>
                {city.description}
            </p>

        </div>
    )
}

export default Description;