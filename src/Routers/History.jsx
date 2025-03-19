import { toast, ToastContainer } from "react-toastify";
import useaxiosSecure from "../Axios-Instance/useaxiosSecure";
import useHistoryData from "../Hook/useHistoryData";
import { BiSolidTrash } from "react-icons/bi";

const History = () => {
    const { data, refetch } = useHistoryData()
    const axiosSecure = useaxiosSecure()

    const handleHistoryDelete = async (id) => {
        const result = await axiosSecure.delete(`/history/${id}`)
        if (result.data.deletedCount === 1) {
            toast.success("Deleted successfully")
            refetch()
        }
    }
    return (
        <div className="h-full overflow-y-auto">
            <h1 className="text-2xl text-center my-3.5">History of search the word</h1>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Bangla</th>
                            <th>English</th>
                            <th>German</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(word => <tr className="hover:bg-gray-900 transition-all" key={word._id}>
                                <th>{data.indexOf(word) + 1}</th>
                                <th className="text-xl font-medium">{word.bn}</th>
                                <td className="text-xl font-medium">{word.en}</td>
                                <td className="text-xl font-medium">{word.de}</td>
                                <th>
                                    <button onClick={() => handleHistoryDelete(word._id)} className="flex justify-center items-center text-xl cursor-pointer hover:text-red-500 transition-all ease-in-out"><BiSolidTrash /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
                <ToastContainer autoClose={2000} />
            </div>
        </div>
    );
};

export default History;