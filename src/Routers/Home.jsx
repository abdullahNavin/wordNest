
import SearchBox from '../components/SearchBox'
import Resultbox from '../components/Resultbox';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-8 h-full'>
            <SearchBox></SearchBox>
            <Resultbox></Resultbox>
        </div>
    );
};

export default Home;