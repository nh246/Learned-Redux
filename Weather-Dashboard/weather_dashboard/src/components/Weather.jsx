import { useDispatch, useSelector } from "react-redux";
import weatherBanner from "../assets/weather-banner.png";
import WeatherCard from "./WeatherCard";
import { useState } from "react";
import { clearWeatherData, fetchWeatherData } from "../redux/featurs/weather/weatherSlice";
function Weather() {
  const [city, setCity] = useState("");

  const { weatherData, loading, error } = useSelector((state) => state.Weather);
  const dispatch = useDispatch();

  console.log(weatherData);

  const handleFetchWeather = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    dispatch(fetchWeatherData(city));
    setCity("");
  };

  return (
    <div className="bg-blue-300">
      <div className="px-6 py-20 container max-w-screen-lg mx-auto min-h-screen">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
          Weather DashBoard
        </h1>

        <div className="flex w-full justify-center">
          <p className="bg-red-500 text-white inline-block text-center mb-6 rounded p-1">
            fetches weather data from different cities using redux toolkit and
            redux thunk
          </p>
        </div>
        <div className="flex justify-center">
          <img src={weatherBanner} alt="weather-banner" />
        </div>

        {/* search weather  */}

        <form
          onSubmit={handleFetchWeather}
          className="my-6 flex flex-wrap gap-2 md:gap-4"
        >
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter City Name"
            className="flex-grow p-2 border rounded"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded"
          >
            Search Weather
          </button>
          <button onClick={()=>dispatch(clearWeatherData())} className="px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded">
            Clear
          </button>
        </form>

        {/* weather card with loading and error  */}

        {loading && <p className="text-center text-blue-50">loading....</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* weather cards  */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4" >
          {weatherData.map((data, index) => (
            <WeatherCard
              key={index}
              city={data.name}
              temp={((data.main.temp) - 273.15).toFixed(2)}
              description={data.weather[0].description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Weather;
