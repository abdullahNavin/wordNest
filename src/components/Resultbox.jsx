import { PacmanLoader } from 'react-spinners';
import useWordHook from '../Hook/useWordHook';
import useaxiosPublic from '../Axios-Instance/useaxiosPublic';
import { useEffect } from 'react';

const Resultbox = () => {
    const { data, isLoading, user } = useWordHook()
    const axiosPublic = useaxiosPublic()

    const saveHistory = async () => {
        if(!user.email || !data){
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
    useEffect(() => {
        saveHistory()
    }, [user?.email, data?.en, data?.bn, data?.de])


    if (isLoading) {
        return <PacmanLoader color='gray' />
    }
    if (!data) {
        return <p className='text-center text-gray-400 text-xl italic'>Search a word</p>
    }
    const { bn, bn_syns, en_syns, sents, de, de_syns } = data

    return (
        <div className='flex gap-4'>
            <div className='border rounded-xl flex-1'>
                <h1 className='text-center border-b py-1 text-2xl'>Bangla</h1>
                <div className='border-b p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Meaning:</h1>
                    <p>{bn}</p>
                </div>
                <div className='border-b p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Synonym: Bangla</h1>
                    <p>{bn_syns?.slice(0, 9).join(', ')}</p>
                </div>
                <div className='border-b p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Synonym: English</h1>
                    <p>{en_syns?.slice(0, 9).join(', ')}</p>
                </div>
                <div className='p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Example:</h1>
                    <p className='text-gray-400'>{sents?.[0]}</p>
                </div>
            </div>

            {/* German section */}

            <div className='border rounded-xl flex-1'>
                <h1 className='text-center border-b py-1 text-2xl'>German</h1>
                <div className='border-b p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Meaning:</h1>
                    <p>{de}</p>
                </div>
                <div className='border-b p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Synonym:</h1>
                    <p>{de_syns?.slice(0, 9).join(', ')}</p>
                </div>
                <div className='p-1.5'>
                    <h1 className='text-xl text-gray-300 mb-1'>Example:</h1>
                    <p className='text-gray-400'>Coming soon</p>
                </div>
            </div>
        </div>
    );
};

export default Resultbox;