// FILE: src/components/PopularCities.jsx
// Displays a list of popular cities that users can click to see the weather.

import React, { useState, useEffect } from 'react';
import WeatherIcon from './WeatherIcon';

const PopularCityCard = ({ city, onCityClick }) => {
    const [data, setData] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; // Use the same API key

    useEffect(() => {
        const fetchCityWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},PH&appid=${API_KEY}&units=metric`);
                const result = await response.json();
                setData(result);
            } catch (e) {
                console.error("Failed to fetch popular city weather");
            }
        };
        fetchCityWeather();
    }, [city, API_KEY]);

    if (!data || !data.main) return (
        <div className="bg-black/10 p-4 rounded-lg flex justify-between items-center animate-pulse">
            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
        </div>
    );

    return (
        <div onClick={() => onCityClick(city)} className="bg-black/10 p-4 rounded-lg flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer">
            <div>
                <p className="font-bold">{data.name}</p>
                <p className="text-xs text-white/70">{data.weather[0].main}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-bold text-xl">{Math.round(data.main.temp)}°C</p>
                <div className="text-yellow-300">
                    <WeatherIcon iconCode={data.weather[0].icon} className="w-8 h-8"/>
                </div>
            </div>
        </div>
    );
};

const PopularCities = ({ onCityClick }) => {
    const cities = ["Cebu City", "Davao", "Iloilo City", "Baguio", "Zamboanga"];

    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Popular Cities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cities.map(city => <PopularCityCard key={city} city={city} onCityClick={onCityClick} />)}
            </div>
        </div>
    );
};

export default PopularCities;
