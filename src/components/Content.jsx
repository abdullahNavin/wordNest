import { Outlet } from 'react-router-dom';

const Content = () => {
    return (
        <div className='flex-1/2 h-svh'>
            <div className=''>
                <h1 className='text-2xl font-bold text-center'>WordNest</h1>
            </div>
            <div className='h-[calc(100vh-4rem)] w-full overflow-y-auto'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Content;