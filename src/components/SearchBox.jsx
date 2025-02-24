import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className='mt-7'>
            <div className="relative w-96">
                <input
                    type="text"
                    placeholder="Search a word"
                    className="w-full rounded-full pl-4 pr-10 py-2 border border-gray-400 outline-none white-shadow focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <IoSearch />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;