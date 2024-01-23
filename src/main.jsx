import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import ErrorJSX from './pages/Error.jsx'
import AboutJSX from './pages/HomePage.jsx';
import ContactJSX from './pages/Contact.jsx';
import ProjectJSX from './pages/Project.jsx';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorJSX />,
    children: [
      {
        index: true,
        element: <AboutJSX />,
      },
      {
        path: '/Projects',
        element: <ProjectJSX />,
      },
      {
        path: '/Contacts',
        element: <ContactJSX />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
