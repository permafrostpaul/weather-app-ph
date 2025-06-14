Weather PH - A Philippine Weather App
Weather PH is a clean, modern, and fully responsive web application that provides real-time weather information for cities across the Philippines. It was built with a modern frontend stack to showcase API integration, state management, and component-based architecture in React.

✨ Features
Real-Time Weather Data: Fetches and displays current weather conditions, including temperature, humidity, wind speed, and more.

5-Day Forecast: Provides a detailed 5-day weather forecast to help users plan ahead.

City Search: Users can search for any major city in the Philippines to get instant weather updates.

Responsive Design: A mobile-first design that looks and works beautifully on all devices, from phones to desktops.

Modern UI/UX: A sleek, "glassmorphism" inspired interface built with Tailwind CSS.

Organized Codebase: Built with a clean, component-based structure and a custom hook for state management, making the code easy to read and maintain.

🚀 Tech Stack
Frontend: React with Vite

Styling: Tailwind CSS

API: OpenWeatherMap API

Icons: Lucide React

🛠️ Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js (which includes npm) and Yarn installed on your machine.

Installation
Clone the repository:

git clone [https://github.com/permafrostpaul/weather-app-ph](https://github.com/permafrostpaul/weather-app-ph)

Navigate to the project directory:

cd weather-app-ph

Install dependencies using Yarn:

yarn install

Configuration
To fetch weather data, you need a free API key from OpenWeatherMap.

Create a .env file: In the main root folder of the project, create a new file named .env.

Add your API key: Inside the .env file, add the following line, replacing your_key_here with your actual OpenWeatherMap API key. The VITE_ prefix is essential.

VITE_OPENWEATHER_API_KEY=your_key_here

The .gitignore file is already set up to ignore .env files, keeping your key secure.

Running the Development Server
Once the dependencies are installed and your API key is configured, you can start the local development server:

yarn dev

Open http://localhost:5173 (or the address shown in your terminal)
