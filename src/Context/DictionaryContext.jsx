import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import useaxiosPublic from "../Axios-Instance/useaxiosPublic";

export const wordContext = createContext(null)

const DictionaryContext = ({ children }) => {
    const [searchWord, setSearchWord] = useState('')
    const [suggestionWord, setSuggestionWord] = useState('')
    const [inputValue, setInputValue] = useState(suggestionWord)
    const [showSuggestion, setShowSuggestion] = useState(true)
    const axiosPublic = useaxiosPublic()



    const { isLoading, data } = useQuery({
        queryKey: ['translation', searchWord],
        queryFn: async () => {
            if (!searchWord) {
                return null
            }
            const res = await axiosPublic.get(`translation/${searchWord}`)
            return res.data
        },
        enabled: !!searchWord
    })

    const { data: suggestionData } = useQuery({
        queryKey: ['suggestion', suggestionWord],
        queryFn: async () => {
            const res = await axiosPublic.get(`/suggestion/${suggestionWord}`)
            return res.data
        },
        enabled: !!suggestionWord
    })

    const info = {
        setSearchWord,
        inputValue,
        setInputValue,
        data,
        isLoading,
        setSuggestionWord,
        suggestionData,
        suggestionWord,
        showSuggestion,
        setShowSuggestion
    }
    return (
        <wordContext.Provider value={info}>
            {children}
        </wordContext.Provider>
    );
};

export default DictionaryContext;