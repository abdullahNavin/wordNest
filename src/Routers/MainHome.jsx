import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import SideBar from '../components/SideBar';

const MainHome = () => {
    const [words, setWords] = useState([])
    const [searchWord, setSearchWord] = useState('')
    const [result, setResult] = useState([])
    useEffect(() => {
        fetch('/words.json')
            .then(res => res.json())
            .then(data => setWords(data))
    }, [])

    useEffect(() => {
        setResult(words.filter(word => word.en.toLowerCase() === searchWord.toLowerCase()))
    }, [searchWord])
    // console.log(result[0]?.bn);

    return (
        <div className='mainBG h-screen w-full'>
            <div className='glassy py-6 px-3.5 flex'>
                <SideBar/>
                <Content />
            </div>
        </div>
    );
};

export default MainHome;