import React, { useEffect, useState } from "react";
import CityWeather from '../Components/CityWeather'

const Place = () => {
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<object>({});

  useEffect(() => {
    if(city) fetchContent(city);
  }, [city])

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setCity(e.currentTarget.value);
  }

  function fetchContent(cityName:string): Promise<string>{
    console.log('cityName', cityName);
    return new Promise ((res, rej) =>{
        fetch(`http://localhost:3098/place/${cityName}`, {
            method : "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ city: cityName}),
        })
        .then((result) => {
            console.log(result);
            return result.json()
        })
        .then((data)=>{
            console.log('data', data);
            setData(data);
            res(data);
        })
        
        .catch((err) => {
            rej(err);
        });
        
    })
  }

  return (
    <main className="px-6 py-3 flex">
      <div className="buttonContainer flex flex-col items-start flex-wrap">
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="london"
          onClick={handleClick}
        >
          London
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="paris"
          onClick={handleClick}
        >
          Paris
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="delhi"
          onClick={handleClick}
        >
          Delhi
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="newyork"
          onClick={handleClick}
        >
          New York
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="tokyo"
          onClick={handleClick}
        >
          Tokyo
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="singapore"
          onClick={handleClick}
        >
          Singapore
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="amsterdam"
          onClick={handleClick}
        >
          Amsterdam
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="stockholm"
          onClick={handleClick}
        >
          Stockholm
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="cairo"
          onClick={handleClick}
        >
          Cairo
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="bangkok"
          onClick={handleClick}
        >
          Bangkok
        </button>
        <button
          className="bg-cyan-100  m-2 rounded-3xl p-4 hover:bg-cyan-500 hover:text-white hover:border-none "
          value="shanghai"
          onClick={handleClick}
        >
          Shanghai
        </button>
      </div>

      <div className="city-weather-info">
        <CityWeather data = {}/>

      </div>
    </main>
  );
};

export default Place;
