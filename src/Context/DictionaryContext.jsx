import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useaxiosPublic from "../Axios-Instance/useaxiosPublic";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const wordContext = createContext(null)

const DictionaryContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userLoading, setUserLoading] = useState(true)
    const [searchWord, setSearchWord] = useState('')
    const [suggestionWord, setSuggestionWord] = useState('')
    const [showSuggestion, setShowSuggestion] = useState(true)
    const axiosPublic = useaxiosPublic()
    const auth = getAuth(app)



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setUserLoading(false);
        });

        return () => {
            unsubscribe(); // Properly clean up the listener
        };
    }, [auth]);


    const GoogleSignin = (provider) => {
        signInWithPopup(auth, provider)
    }
    const logOut = () => {
        signOut(auth)
    }

    const saveHistory = async (data) => {
        if (!user?.email || !data) {
            return
        }
        try {
            const result = await axiosPublic.post('/history', {
                email: user.email,
                en: data?.en,
                bn: data?.bn,
                de: data?.de,
                DateOfSearch: new Date()
            })
            return result.data
        }
        catch (err) {
            console.error(err.message);
        }
    }

    // Fetch translation data
    const { isLoading, data = null } = useQuery({
        queryKey: ['translation', searchWord],
        queryFn: async () => {
            if (!searchWord) {
                return null
            }
            const res = await axiosPublic.get(`translation/${searchWord}`)
            return res.data
        },
        enabled: !!searchWord,
        
        onSuccess: (data) => {
            if(userLoading){
                console.log('User is loading...');
            }
            if (user?.email) {
                saveHistory(data)
                console.log('History saved successfully!');
            }
        }
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