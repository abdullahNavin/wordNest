import { useQuery } from "@tanstack/react-query";
import useaxiosSecure from "../Axios-Instance/useaxiosSecure";
import useWordHook from "./useWordHook";


const useHistoryData = () => {
    const { user } = useWordHook()
    const axiosSecure = useaxiosSecure()
    const { refetch, data = [], isLoading } = useQuery({
        queryKey: ['history', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/history?email=${user?.email}`)
            return result.data
        }
    })
    return { data, isLoading, refetch }
};

export default useHistoryData;