import './first.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import Root from './сomponents/Root';
import LoginPage from './Pages/LoginPage';

import Home from './Pages/Home';
import CardDetailPage from './Pages/CardDetailPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadCards } from './store/loadCards';
import { setFromLocalStorage } from './store/authenticationSlice';
import Settings from './Pages/Settings';

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
            },
            {
                path: 'settings',
                element: <Settings />
            }
        ]
    }
]);

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setFromLocalStorage());
        dispatch(loadCards());
    }, [dispatch]);

    return <RouterProvider router={router} />;
}

export default App;
