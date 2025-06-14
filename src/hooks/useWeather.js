// FILE: src/hooks/useWeather.js
// This custom hook manages all the state and data fetching logic for the weather app.

import { useState, useEffect, useCallback } from 'react';

export const useWeather = (defaultCity) => {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; 

    const [city, setCity] = useState(defaultCity);
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeatherData = useCallback(async (location) => {
        setLoading(true);
        setError(null);
        setWeatherData(null);
        setForecastData(null);

        try {
            // Fetch current weather data
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},PH&appid=${API_KEY}&units=metric`);
            if (!weatherResponse.ok) {
                 if (weatherResponse.status === 404) {
                    throw new Error('City not found. Please enter a valid city in the Philippines.');
                 }
                 throw new Error('Could not fetch weather data.');
            }
            const current = await weatherResponse.json();
            setWeatherData(current);

            // Fetch 5-day forecast data
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location},PH&appid=${API_KEY}&units=metric`);
            if (!forecastResponse.ok) throw new Error('Could not fetch forecast data.');
            const forecast = await forecastResponse.json();
            
            // Process forecast data to get daily min/max
            const dailyData = {};
            forecast.list.forEach((item) => {
                const date = item.dt_txt.split(' ')[0];
                if (!dailyData[date]) {
                    dailyData[date] = {
                        temps: [],
                        weather: item.weather[0],
                        dt: item.dt,
                    };
                }
                dailyData[date].temps.push(item.main.temp);
            });

            const dailyForecasts = Object.keys(dailyData).map(date => {
                const day = dailyData[date];
                return {
                    dt: day.dt,
                    weather: day.weather,
                    temp_max: Math.round(Math.max(...day.temps)),
                    temp_min: Math.round(Math.min(...day.temps)),
                };
            }).slice(0, 5); // Ensure we only get 5 days

            setForecastData(dailyForecasts);
            
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [API_KEY]);

    useEffect(() => {
        if (city) {
            fetchWeatherData(city);
        }
    }, [city, fetchWeatherData]);

    return { city, weatherData, forecastData, loading, error, setCity };
};
