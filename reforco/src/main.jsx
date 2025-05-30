import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from './context/GlobalContext.jsx'
import router from './router/routes.jsx'
import {  RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
      <RouterProvider router={router}>
      </RouterProvider>
  </GlobalContextProvider>
);