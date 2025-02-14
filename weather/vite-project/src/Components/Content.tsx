import React, { useEffect, useState } from "react";
import { faSnowflake, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

interface WeatherData {
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
  pressure: number;
}

const Content: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  // const [coordinates, setCoordinates] = useState<object | null>(null);

  useEffect(() => {
    const weatherdata = async () => {
      if (navigator.geolocation) {
        const getGeolocation = async () => {
          return await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        };

        // try {
        await getGeolocation()
          .then((data) => {
            console.log("data.coords", data.coords);
            return data.coords;
          })
          .then((coords) => {
            // setCoordinates(coords);
            return coords;
          })
          .then((data) => {
            return fetch("http://localhost:3098/current-weather", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                lat: data.latitude,
                long: data.longitude,
              }),
            });
          })
          .then(async (res) => {
            if (res.status === 200) {
              const data = await res.json();
              console.log(data);
              return data;
            } else {
              throw new Error("error");
            }
          })
          .then((result) => {
            setWeather({
              place: {
                city: result.name,
                country: result.sys.country,
              },
              temperature: {
                temp: result.main.temp,
                feels_like: result.main.feels_like,
                temp_min: result.main.temp_min,
                temp_max: result.main.temp_max,
              },
              weather: {
                sky: result.weather[0].main,
              },
              pressure: result.main.pressure,
            });
          })
          .catch((err) => {
            console.log(err);
          });
        //   setLat(pos.coords.latitude);
        //   setLong(pos.coords.longitude);
      }
    };

    weatherdata();
  }, []);

  return (
    <>
      {weather ? (
        <div className="weatherContainer m-auto max-w-[1200px]">
          <div className="place">
            <h2 className="text-2xl">
              Current Weather in
              <span>&nbsp;</span>
              <span className="text-2xl text-cyan-700">
                {weather.place.city}, {weather.place.country}{" "}
              </span>
            </h2>
          </div>

          <div className="skyContainer text-4xl py-4">
            <p>
              {weather.weather.sky}
              <span>&nbsp;</span>
              {weather.weather.sky === "Snow" ? (
                <FontAwesomeIcon icon={faSnowflake} />
              ) : weather.weather.sky === "Rain" ? (
                <FontAwesomeIcon icon={faCloudRain} />
              ) : weather.weather.sky === "Clear" ? (
                <FontAwesomeIcon icon={faSun} />
              ) : weather.weather.sky === "Clouds" ? (
                <FontAwesomeIcon icon={faCloud} />
              ) : weather.weather.sky === "Windy" ? (
                <FontAwesomeIcon icon={faWind} />
              ) : (
                ""
              )}
            </p>
          </div>

          <div className = 'grid grid-cols-[2fr_1fr] text-center items-center'>
            <img src="https://picsum.photos/1000/700" className="w-[100%] h-auto " />

            <div className="temp-container my-3  bg-violet-200 p-4 translate-x-[-5rem] h-[50%] items-center flex flex-col content-center justify-center">
              <p className="py-2">
                Temperature: {Math.round(weather.temperature.temp - 273.15)}℃
              </p>
              <p className="py-2">
                Feels Like:{" "}
                {Math.round(weather.temperature.feels_like - 273.15)}℃
              </p>
              <p className="py-2">Min: {Math.round(weather.temperature.temp_min - 273.15)}℃</p>
              <p className="py-2">Max: {Math.round(weather.temperature.temp_max - 273.15)}℃</p>
            
              <p className="py-2">
                Pressure: {weather.pressure} Pa
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="m-auto max-w-[1200px]  p-6">LOADING</p>
      )}
    </>
  );
};

export default Content;
