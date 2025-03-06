import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import useaxiosPublic from "../Axios-Instance/useaxiosPublic";

export const wordContext = createContext(null)

const DictionaryContext = ({ children }) => {

    const [searchWord, setSearchWord] = useState('')
    const axiosPublic = useaxiosPublic()

    const { isPending, error, data } = useQuery({
        queryKey: ['translation',searchWord],
        queryFn: async () => {
            if(!searchWord) {
                return null
            }
            const res = await axiosPublic.get(`translation/${searchWord}`)
            return res.data
        },
        enabled: !!searchWord
    })
    // console.log(data);

    const info = { setSearchWord, data, isPending }
    return (
        <wordContext.Provider value={info}>
            {children}
        </wordContext.Provider>
    );
};

export default DictionaryContext;