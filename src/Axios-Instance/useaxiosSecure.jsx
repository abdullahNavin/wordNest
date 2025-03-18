import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useaxiosSecure = () => {
    return axiosSecure
};

export default useaxiosSecure;