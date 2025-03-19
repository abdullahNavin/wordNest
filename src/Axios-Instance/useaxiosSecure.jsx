import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://word-nest-server.vercel.app'
})

const useaxiosSecure = () => {
    return axiosSecure
};

export default useaxiosSecure;