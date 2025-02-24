import { createContext, useEffect, useState } from "react";

export const wordContext = createContext(null)

const DictionaryContext = ({ children }) => {
    const [words, setWords] = useState([])
    const [searchWord, setSearchWord] = useState('')
    const [result, setResult] = useState({})
    // console.log(result);
    useEffect(() => {
        fetch('/updatedWords.json')
            .then(res => res.json())
            .then(data => setWords(data))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        setResult(words.filter(word => word.en === searchWord))
    }, [searchWord])

    const info = { words, setSearchWord,result }
    return (
        <wordContext.Provider value={info}>
            {children}
        </wordContext.Provider>
    );
};

export default DictionaryContext;