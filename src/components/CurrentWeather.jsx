// FILE: src/components/CurrentWeather.jsx
// Displays the main current weather information, including a live clock.

import React, { useState, useEffect } from 'react';
import { MapPin, Eye, Wind, Droplets, Gauge } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

const DetailItem = ({ icon: Icon, label, value }) => (
    <div className="bg-black/10 p-4 rounded-lg flex flex-col items-center justify-center text-center gap-1">
        <Icon size={20} className="text-white/70 mb-1" />
        <p className="font-semibold text-lg">{value}</p>
        <p className="text-xs text-white/70">{label}</p>
    </div>
);

const CurrentWeather = ({ data }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Set up an interval to update the time every second
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(timer);
    }, []);

    if (!data) return null;

    // Format the date and time for display
    const formattedDate = currentTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const formattedTime = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-full flex flex-col justify-between">
            {/* Centered Main Weather Display */}
            <div className="flex flex-col items-center text-center">
                <p className="text-lg flex items-center gap-2 text-white/80">
                    <MapPin size={18} /> {data.name}, {data.sys.country}
                </p>
                {/* New Live Date and Time Display */}
                <p className="text-sm text-white/60 mt-1">
                    {formattedDate} | {formattedTime}
                </p>
                <div className="flex items-center gap-4 my-4">
                    <p className="text-8xl font-bold tracking-tighter">{Math.round(data.main.temp)}°</p>
                    <div className="text-yellow-300">
                        <WeatherIcon iconCode={data.weather[0].icon} className="w-24 h-24" />
                    </div>
                </div>
                <p className="capitalize text-xl text-white/90">{data.weather[0].description}</p>
                <p className="text-sm text-white/70 mt-1">Feels like {Math.round(data.main.feels_like)}°</p>
            </div>

            {/* Additional Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <DetailItem icon={Eye} label="Visibility" value={`${data.visibility / 1000} km`} />
                <DetailItem icon={Droplets} label="Humidity" value={`${data.main.humidity}%`} />
                <DetailItem icon={Wind} label="Wind" value={`${data.wind.speed} m/s`} />
                <DetailItem icon={Gauge} label="Pressure" value={`${data.main.pressure} hPa`} />
            </div>
        </div>
    );
};

export default CurrentWeather;
