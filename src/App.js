import './first.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import Root from './сomponents/Root';
import LoginPage from './Pages/LoginPage';
import CardContextProvider from './context/сardArrayContext';
import CardsPage from './Pages/CardsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: 'cards',
                element: <CardsPage />
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
