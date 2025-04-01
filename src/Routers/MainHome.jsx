import { Toaster } from 'sonner';
import Content from '../components/Content';
import SideBar from '../components/SideBar';

const MainHome = () => {

    return (
        <div className='mainBG h-screen w-full'>
            <div className='glassy py-6 px-3.5 flex gap-4'>
                <SideBar />
                <Content />
                <Toaster position="top-center" />
            </div>
        </div>
    );
};

export default MainHome;