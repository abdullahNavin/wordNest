import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainHome from './MainHome';
import Home from './Home';

const Router =createBrowserRouter([
    {
        path:'/',
        element:<MainHome/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default Router;