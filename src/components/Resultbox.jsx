import useWordHook from '../Hook/useWordHook';

const Resultbox = () => {
    const { result } = useWordHook()
    console.log(result);
    if (result.length === 0) {
        return <p className='text-center text-gray-400 text-xl italic'>Search a word</p>
    }
    const { bn, bn_syns, en, en_syns, sents } = result[0]
    return (
        <div className='flex gap-1'>
            <div className='border rounded-xl'>
                <h1 className='text-center border-b py-1 text-2xl'>Bangla</h1>
                <div className='border-b p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Meaning:</h1>
                    <p>{bn}</p>
                </div>
                <div className='border-b p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Synonym:</h1>
                    <p>{bn_syns?.slice(0,9).join(', ')}</p>
                </div>
                <div className='p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Example:</h1>
                    <p className='italic text-gray-400'>Comming soon</p>
                </div>
            </div>
        </div>
    );
};

export default Resultbox;