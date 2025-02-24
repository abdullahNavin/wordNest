import { Outlet } from 'react-router-dom';

const Content = () => {
    return (
        <div className='flex-auto overflow-hidden'>
            <div className=''>
                <h1 className='text-2xl font-bold text-center'>WordNest</h1>
            </div>
            <div className='h-full w-full'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Content;