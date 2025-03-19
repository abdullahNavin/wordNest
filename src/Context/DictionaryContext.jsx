import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useaxiosPublic from "../Axios-Instance/useaxiosPublic";
import { getAuth, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const wordContext = createContext(null)

const DictionaryContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [searchWord, setSearchWord] = useState('')
    const [suggestionWord, setSuggestionWord] = useState('')
    const [inputValue, setInputValue] = useState(suggestionWord)
    const [showSuggestion, setShowSuggestion] = useState(true)
    const axiosPublic = useaxiosPublic()
    const auth = getAuth(app)

    // Firebase onAuthState change
    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                console.log(currentUser);
            })
        }
        return () => {
            unsubscribe()
        }
    }, [auth])
    console.log(user);

    const GoogleSignin = (provider) => {
        signInWithPopup(auth, provider)
    }
    const logOut = () => {
        signOut(auth)
    }

    // Fetch translation data
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
    // suggestion part
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
        setShowSuggestion,
        user,
        GoogleSignin,
        logOut
    }
    return (
        <wordContext.Provider value={info}>
            {children}
        </wordContext.Provider>
    );
};
DictionaryContext.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DictionaryContext;