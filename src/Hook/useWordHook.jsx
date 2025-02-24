import { useContext } from "react";
import { wordContext } from "../Context/DictionaryContext";

const useWordHook = () => {
    const info = useContext(wordContext)
    return info
};

export default useWordHook;