

import './App.css';
// import FilmCard from './components/FilmCard/FilmCard';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
// import Paragraf from './components/Paragraf/Paragraf';
// import Rating from './components/Rating/Rating';
// import Search from './components/Search/Search';
// import ToFavorites from './components/ToFavorites/ToFavorites';
// import Navmenu from './layout/navmenu/Navmenu';
// import { films } from './films';
import FilmRender from './components/FilmRender/FilmRender';
import { UserContext } from './context/user.context';
import { useState } from 'react';

function App() {

	const [isLogined, setIsLogined] = useState('false');

	const [name, setName] = useState('');



	const logo  = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#475069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M22 22L20 20" stroke="#475069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>;



	// const userName = localStorage.getItem('isLogined') == 'true' ? localStorage.getItem('name') : '';

	return (
		<UserContext.Provider value={{ isLogined, setIsLogined, name, setName}}>
			<>
				<Header
					text="Вход"
				/>

				<Input
					text={'Ваше имя'}
					buttonText="Войти в профиль"
				/>

				{/* <Header
					text="Поиск"
				/> */}

				{/* <Paragraf
				text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
			/>

			<Search
				text="Введите название"
				logo={logo}
				buttonText="Искать"
			/> */}

				<FilmRender/>

			</>
		</UserContext.Provider>
	);
}

export default App;
