// FILE: src/components/WeatherDetails.jsx
// This component displays the card with additional details like humidity, wind, sunrise, and sunset.

import React from 'react';
import { Wind, Droplets, Sunrise, Sunset } from 'lucide-react';

const WeatherDetails = ({ data }) => {
    if (!data) return null;

    return (
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 grid grid-cols-2 gap-4">
            <div className="text-center">
                <Droplets className="mx-auto text-blue-400 mb-1" size={24} />
                <p className="text-xl font-bold">{data.main.humidity}%</p>
                <p className="text-xs text-slate-400">Humidity</p>
            </div>
            <div className="text-center">
                <Wind className="mx-auto text-blue-400 mb-1" size={24} />
                <p className="text-xl font-bold">{data.wind.speed} m/s</p>
                <p className="text-xs text-slate-400">Wind</p>
            </div>
            <div className="text-center">
                <Sunrise className="mx-auto text-blue-400 mb-1" size={24} />
                <p className="text-lg font-bold">{new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p className="text-xs text-slate-400">Sunrise</p>
            </div>
            <div className="text-center">
                <Sunset className="mx-auto text-blue-400 mb-1" size={24} />
                <p className="text-lg font-bold">{new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p className="text-xs text-slate-400">Sunset</p>
            </div>
        </div>
    );
};

export default WeatherDetails;
