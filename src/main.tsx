import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Movie } from './pages/Movie/Movie.tsx';
import { Favorites } from './pages/Favorites/Favorites.tsx';
import { UserContext } from './context/user.context.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
