import useaxiosSecure from "../Axios-Instance/useaxiosSecure";
import useHistoryData from "../Hook/useHistoryData";
import { BiSolidTrash } from "react-icons/bi";
import useWordHook from "../Hook/useWordHook";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "sonner";

const History = () => {
    const { data, refetch, isLoading } = useHistoryData()
    const { user, GoogleSignin } = useWordHook()
    const axiosSecure = useaxiosSecure()

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider()
        GoogleSignin(provider)
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    }

    if (!user?.email) {
        return (
            <div className="flex flex-col items-center justify-center gap-2.5 h-full">
                <h1 className="text-xl">Plese Login to see history</h1>
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-3 bg-white text-black py-3 px-5 rounded-full shadow-md hover:bg-gray-200 transition-all"
                >
                    <FcGoogle className="text-xl" /> Sign in with Google
                </button>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center gap-2.5 h-full">
                <h1 className="text-xl">Loading...</h1>
            </div>
        )
    }

    if (!data.length) {
        return (
            <div className="flex flex-col items-center justify-center gap-2.5 h-full">
                <h1 className="text-xl">No history found</h1>
            </div>
        )

    }

    const handleHistoryDelete = async (id) => {
        const result = await axiosSecure.delete(`/history/${id}`)
        if (result.data.deletedCount === 1) {
            toast.success('Deleted successfully')
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
            </div>
        </div>
    );
};

export default History;