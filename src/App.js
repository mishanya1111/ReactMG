import './first.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import Root from './сomponents/Root';
import LoginPage from './Pages/LoginPage';
import CardContextProvider from './context/сardArrayContext';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CardDetailPage from "./Pages/CardDetailPage";

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
            },
            {
                path: 'card/:id',
                element: <CardDetailPage />
            }
        ]
    }
]);
function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
