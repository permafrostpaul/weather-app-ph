// FILE: src/components/Forecast.jsx
// Displays the 5-day weather forecast in a horizontal grid.

import React from 'react';
import WeatherIcon from './WeatherIcon';

const Forecast = ({ data }) => {
    if (!data || data.length === 0) return null;

    // Helper to get day name
    const getDayName = (dt) => {
        const date = new Date(dt * 1000);
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        // Reset time part for accurate date comparison
        today.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);
        tomorrow.setHours(0, 0, 0, 0);

        if (date.getTime() === today.getTime()) {
            return 'Today';
        }
        if (date.getTime() === tomorrow.getTime()) {
            return 'Tomorrow';
        }
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-full">
            <h3 className="text-lg font-semibold mb-4">5-Day Forecast</h3>
            {/* Changed to a responsive horizontal grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {data.map((day) => (
                    // Each forecast item is now a self-contained card, centered
                    <div key={day.dt} className="bg-black/10 p-4 rounded-lg flex flex-col items-center justify-center text-center gap-2 hover:bg-black/20 transition-colors cursor-pointer">
                        <p className="font-bold text-sm">{getDayName(day.dt)}</p>
                        <div className="text-yellow-300">
                            <WeatherIcon iconCode={day.weather.icon} className="w-12 h-12" />
                        </div>
                        <div className="flex items-baseline gap-1">
                            <p className="font-bold text-xl">{day.temp_max}°</p>
                            <p className="text-sm text-white/60">{day.temp_min}°</p>
                        </div>
                        <p className="text-xs text-white/70 capitalize">{day.weather.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
