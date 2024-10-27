import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CardContextProvider from './context/сardArrayContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Router/NotFoundPage';
import Root from './Router/Root';
import LoginPage from './Router/LoginPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
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
                element: <App />
            }
        ]
    }
]);
root.render(
    <React.StrictMode>
        <CardContextProvider>
            <RouterProvider router={router} />
        </CardContextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
