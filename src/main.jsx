import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Teste from './components/teste.jsx'
import './index.css'
const router = createBrowserRouter([
    {
        path: '/talesfromtheloop',
        element: <App />
    },
    {
        path: '/talesfromtheloop/teste',
        element: <Teste></Teste>
    }

])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
