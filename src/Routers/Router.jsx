import { createBrowserRouter } from 'react-router-dom';
import MainHome from './MainHome';
import Home from './Home';
import History from './History';

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
                element:<History></History>
            }
        ]
    }
])

export default Router;