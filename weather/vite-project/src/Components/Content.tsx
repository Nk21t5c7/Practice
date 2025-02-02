import React, { useEffect, useState } from "react";

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
        <div className="weatherContainer">
            <div className="place">
                <h3>{weather.place.city} <span>{weather.place.country}</span> </h3>


            </div>
          <div className="temp-container">
            <p>Temperature: {Math.round(weather.temperature.temp - 273.15)}℃</p>
            <p>
              Temperature - Feels Like:{" "}
              {Math.round(weather.temperature.feels_like - 273.15)}℃
            </p>
            <p>
              Temperature - Min:{" "}
              {Math.round(weather.temperature.temp_min - 273.15)}℃
            </p>
            <p>
              Temperature - Max:{" "}
              {Math.round(weather.temperature.temp_max - 273.15)}℃
            </p>
          </div>
        </div>
      ) : (
        <p>LOADING</p>
      )}
    </>
  );
};

export default Content;
