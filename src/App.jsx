// FILE: src/App.jsx
// This is now the main component. It's clean and only responsible for layout.

import React from 'react';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import PopularCities from './components/PopularCities';
import WeatherAlerts from './components/WeatherAlerts';

const App = () => {
    const { city, weatherData, forecastData, loading, error, setCity } = useWeather('Manila');

    return (
        <div className="min-h-screen w-full bg-blue-500 text-white font-sans p-4 sm:p-6 lg:p-8 flex flex-col items-center">
            <div className="w-full max-w-6xl space-y-6">
                
                <SearchBar onSearch={setCity} initialCity={city} sunrise={weatherData?.sys.sunrise} sunset={weatherData?.sys.sunset} />
                
                <main className="space-y-6">
                    {loading && (
                        <div className="text-center p-8 bg-black/10 rounded-2xl backdrop-blur-md">
                            <p className="text-lg animate-pulse">Fetching Weather Data...</p>
                        </div>
                    )}
                    {error && <div className="text-center p-8 text-yellow-300 bg-red-900/50 rounded-lg">{error}</div>}
                    
                    {weatherData && (
                        <CurrentWeather data={weatherData} />
                    )}

                    {forecastData && (
                        <Forecast data={forecastData} />
                    )}

                    <PopularCities onCityClick={(clickedCity) => setCity(clickedCity)} />
                    
                    <WeatherAlerts />
                </main>
            </div>
        </div>
    );
};

export default App;
