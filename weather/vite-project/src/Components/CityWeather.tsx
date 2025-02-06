import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCloudRain,
  faSmog,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { WeatherData } from "../pages/Place";

interface DataProps {
  data: WeatherData | null;
  city: string;
}

const CityWeather: React.FC<DataProps> = ({ city, data }) => {
  console.log(data);
  return (
    <div className="cityDataContainer my-6 px-4">
      <h3 className="text-3xl">{city.toUpperCase()}</h3>
      <div className="skyContainer  py-4">
        <p className="text-2xl">
          {/* {data} */}
          {data ? data.weather.sky : "Loading"}
          <span>&nbsp;</span>
          {data && data.weather.sky === "Snow" ? (
            <FontAwesomeIcon icon={faSnowflake} />
          ) : data && data.weather.sky === "Rain" ? (
            <FontAwesomeIcon icon={faCloudRain} />
          ) : data && data.weather.sky === "Clear" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : data && data.weather.sky === "Clouds" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : data && data.weather.sky === "Windy" ? (
            <FontAwesomeIcon icon={faWind} />
          ) : data && data.weather.sky === "Haze" ? (
            <FontAwesomeIcon icon={faWater} />
          ) : data && data.weather.sky === "Foggy" ? (
            <FontAwesomeIcon icon={faSmog} />
          ) : (
            ""
          )}
          {" "}
          <span>{data ? Math.round(data?.temperature.temp - 273) : null}℃</span>
        </p>
      </div>
    </div>
  );
};

export default CityWeather;
