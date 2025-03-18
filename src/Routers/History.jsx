import useaxiosSecure from "../Axios-Instance/useaxiosSecure";
import useHistoryData from "../Hook/useHistoryData";

const History = () => {
    const { data,refetch } = useHistoryData()
    const axiosSecure=useaxiosSecure()

    const handleHistoryDelete=(id)=>{
        const result = axiosSecure.delete(`/history/${id}`)
        console.log(result.data);
        refetch()
    }
    return (
        <div className="h-full">
            <h1 className="text-2xl text-center my-3.5">History of search word</h1>
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
                            data.map(word=> <tr key={word._id}>
                                <th>{data.indexOf(word)+1}</th>
                                <th className="text-xl font-medium">{word.bn}</th>
                                <td className="text-xl font-medium">{word.en}</td>
                                <td className="text-xl font-medium">{word.de}</td>
                                <th>
                                    <button onClick={()=>handleHistoryDelete(word._id)} className="btn btn-ghost btn-xs">Delete</button>
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