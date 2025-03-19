import { Outlet } from 'react-router-dom';

const Content = () => {
    return (
        <div className='flex-1/2 h-full'>
            <div className='flex justify-center items-center'>
                <img className='w-1/5' src="https://i.ibb.co.com/NgV0ww4V/logo.png" alt="" />
            </div>
            <div className='h-[calc(100vh-8rem)] w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default Content;