// FILE: src/components/SearchBar.jsx
// The top header component with the centered search bar.

import React, { useState } from 'react';
import { Search, Cloud, Menu, Sunrise, Sunset } from 'lucide-react';

const SearchBar = ({ onSearch, initialCity, sunrise, sunset }) => {
    const [searchInput, setSearchInput] = useState(initialCity);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            onSearch(searchInput.trim());
        }
    };

    return (
        <header className="flex items-center justify-between gap-4 w-full p-4 bg-black/10 rounded-2xl border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <Cloud className="text-blue-300" size={24} />
                <h1 className="text-lg font-bold hidden sm:block">Weather PH</h1>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search city..."
                        className="w-full bg-black/20 placeholder-white/60 text-white px-4 py-2.5 rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
                        <Search size={18} />
                    </button>
                </form>
            </div>
            
            <div className="flex items-center gap-4">
                 {sunrise && sunset && (
                    <div className="hidden lg:flex items-center gap-4 bg-black/20 px-4 py-2 rounded-full border border-white/20">
                        <div className="flex items-center gap-2 text-sm">
                            <Sunrise size={18} className="text-yellow-400" />
                            <span>{new Date(sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Sunset size={18} className="text-orange-400" />
                            <span>{new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>
                )}
                <button className="text-white/80 hover:text-white p-2 rounded-full hover:bg-black/20">
                    <Menu size={22} />
                </button>
            </div>
        </header>
    );
};

export default SearchBar;
