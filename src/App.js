import './first.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import Root from './сomponents/Root';
import LoginPage from './Pages/LoginPage';
import CardContextProvider from './context/сardArrayContext';
import Home from './Pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                index: true,
                element: <Home />
            }
        ]
    }
]);
function App() {
    return (
        <CardContextProvider>
            <RouterProvider router={router} />
        </CardContextProvider>
    );
}

export default App;
