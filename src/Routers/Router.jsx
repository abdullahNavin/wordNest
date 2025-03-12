import { createBrowserRouter } from 'react-router-dom';
import MainHome from './MainHome';
import Home from './Home';
import Resultbox from '../components/Resultbox';

const Router =createBrowserRouter([
    {
        path:'/',
        element:<MainHome/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'history',
                element:<Resultbox></Resultbox>
            }
        ]
    }
])

export default Router;