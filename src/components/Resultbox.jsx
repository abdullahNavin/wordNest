import React from 'react';
import useWordHook from '../Hook/useWordHook';

const Resultbox = () => {
    const { result } = useWordHook()
    console.log(result);
    const { bn, bn_syns, en, en_syns, sents } = result
    if (!result) {
        return <p className='text-center text-gray-300 text-xl'>Search a word</p>
    }
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
                    <p>{bn_syns?.slice(0,9)}</p>
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