import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://word-nest-server.vercel.app'
})

const useaxiosPublic = () => {
    return axiosPublic
};

export default useaxiosPublic;