import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [weather, setWeather] = useState();
    const url = `https://api.weatherbit.io/v2.0/current?city=Chicago&units=I&key=9f55bedf98284c1f8f97fb06b6899356`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((resJson) => setWeather(resJson))
            .catch(console.error);
    }, [])

    return (
		<div className='weather-container'>
			{console.log(weather)}
			<div className='location'>
				<h1>{`${weather?.data[0].city_name}, ${weather?.data[0].state_code}`}</h1>
				<h2>{weather?.data[0].datetime}</h2>
				<h3>{weather?.data[0].weather.description}</h3>
				<div className='temp-image-info'>
					<img
						src={`https://www.weatherbit.io/static/img/icons/${weather?.data[0].weather.icon}.png`}
						alt=''
					/>
					<h1 id='temperature'>{`${weather?.data[0].temp}°F`}</h1>
				</div>
			</div>
			<div className='temp-info'>
				<h5>Precipitation: {weather?.data[0].precip}%</h5>
				<h5>Humidity: {weather?.data[0].rh}%</h5>
				<h5>Wind: {(weather?.data[0].wind_spd * 2.237).toFixed(0)}</h5>
			</div>
		</div>
		);
};

export default Weather;