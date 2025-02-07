import React, { useEffect, useState } from "react";
import CityWeather from "../Components/CityWeather";
import Description from "../Components/Description";

interface Citydata{
  name: string;
  country: string;
  description: string;
}

export interface WeatherData {
  place: {
    city: string;
    country: string;
  };
  temperature: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    sky: string;
  };
}

const Place = () => {
  const [city, setCity] = useState<string>("london");
  const [data, setData] = useState<WeatherData | null>(null);
  const [cityData, setCityData] = useState<Citydata | null>(null);

  useEffect(() => {
    if (city) {
      fetchContent(city);
      getCityDescription(city);
  
    };

  }, [city]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setCity(e.currentTarget.value);
  }

  function getCityDescription(cityName: string): Promise<void> {
    console.log("cityName", cityName);
    return new Promise((res, rej) => {
      fetch(`http://localhost:3098/place/description/${cityName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: cityName }),
      })
        .then((result) => {
          console.log(result);
          return result.json();
        })
        .then((data) => {
          console.log((data));
          setCityData({
            name: data.name,
            country: data.country,
            description: data.description
          })
       
        res();
      })
        .catch((error) => {
          rej(error);
        });
    });
  }

      

  function fetchContent(cityName: string): Promise<void> {
    console.log("cityName", cityName);
    return new Promise((res, rej) => {
      fetch(`http://localhost:3098/place/${cityName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: cityName }),
      })
        .then((result) => {
          console.log(result);
          return result.json();
        })
        .then((data) => {
            console.log(typeof(data));
          setData({
            place: {
              city: data.name,
              country: data.sys.country,
            },
            temperature: {
              temp: data.main.temp,
              feels_like: data.main.feels_like,
              temp_min: data.main.temp_min,
              temp_max: data.main.temp_max,
            },
            weather: {
              sky: data.weather[0].main,
            },
          });
          res();
        })

        .catch((err) => {
          rej(err);
        });
    });
  }

  return (
    <main className="px-6 py-3">
      <div className="buttonContainer ">
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
        <CityWeather data={data} city={city} />
        <Description city = {cityData} />
      </div>
    </main>
  );
};

export default Place;
