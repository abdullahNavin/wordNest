import React from 'react';
import { IoSearch } from "react-icons/io5";
import useWordHook from '../Hook/useWordHook';

const SearchBox = () => {
    const { setSearchWord, setSuggetionWord, suggetionData } = useWordHook()

    return (
        <div className='mt-7'>
            <div className="relative w-96">
                <input
                    onChange={(e) => setSuggetionWord(e.target.value)}
                    type="text"
                    placeholder="Search a word"
                    className="w-full rounded-full pl-4 pr-10 py-2 border border-gray-400 outline-none white-shadow focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <IoSearch />
                </div>
            </div>
            {
                suggetionData &&
                <ul>
                    {
                        suggetionData?.map((word, index) => <li className='' key={index}>{word}</li>)
                    }
                </ul>
            }
        </div>
    );
};

export default SearchBox;