import React, { useEffect, useState } from "react";
import {
  faSnowflake,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCloudRain, faWind } from "@fortawesome/free-solid-svg-icons";

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
          .then((coords)=> {
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
        <div className="weatherContainer ">
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
              ) :weather.weather.sky === "Clouds" ? (
                <FontAwesomeIcon icon={faCloud} />
              ): weather.weather.sky === "Windy" ? (
                <FontAwesomeIcon icon={faWind} />
              ) : (
                ""
              )}
            </p>
          </div>

          <div className="temp-container border-2 w-fit p-5 rounded-2xl my-3">
            <p>Temperature: {Math.round(weather.temperature.temp - 273.15)}℃</p>
            <p>
              Feels Like: {Math.round(weather.temperature.feels_like - 273.15)}℃
            </p>
            <p>Min: {Math.round(weather.temperature.temp_min - 273.15)}℃</p>
            <p>Max: {Math.round(weather.temperature.temp_max - 273.15)}℃</p>
          </div>
        </div>
      ) : (
        <p>LOADING</p>
      )}

    </>
  );
};

export default Content;
