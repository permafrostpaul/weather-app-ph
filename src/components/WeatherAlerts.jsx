// FILE: src/components/WeatherAlerts.jsx
// A placeholder component for weather advisories.

import React, { useState } from 'react';
import { TriangleAlert, X } from 'lucide-react';

const WeatherAlerts = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;
    
    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="flex items-start gap-4">
                <div className="text-yellow-400 mt-1">
                    <TriangleAlert size={20} />
                </div>
                <div>
                    <h4 className="font-bold">Weather Advisory</h4>
                    <p className="text-sm text-white/80 mt-1">
                        Partly cloudy skies with isolated thunderstorms possible in Metro Manila and surrounding areas this weekend. Stay safe and plan accordingly.
                    </p>
                </div>
                <button onClick={() => setIsVisible(false)} className="ml-auto text-white/50 hover:text-white">
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default WeatherAlerts;
