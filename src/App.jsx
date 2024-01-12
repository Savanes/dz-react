

import './App.css';
import FilmCard from './components/FilmCard/FilmCard';
import Header from './components/Header/Header';
import Paragraf from './components/Paragraf/Paragraf';
import Search from './components/Search/Search';
import Navmenu from './layout/navmenu/Navmenu';

function App() {

	const films = [
		{
			id: 1,
			logo:'./card1.png',
			name: 'Black Widow',
		},
		{
			id: 2, 
			logo: './card2.png',
			name: 'Shang Chi',
		},
		{
			id: 3,
			logo: './card3.png',
			name: 'Loki',
		},
		{
			id: 4,
			logo: './card4.png',
			name: 'How I Met Your Mother',
		},
		{
			id: 5,
			logo: './card5.png',
			name: 'Money Heist',
		},
		{
			id: 6,
			logo: './card6.png',
			name: 'Friends',
		},
		{
			id: 7,
			logo: './card7.png',
			name: 'The Big Bang Theory',
		},
		{
			id: 8,
			logo: './card8.png',
			name: 'Two And a Half Men',
		}
	];



	const logo  = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#475069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M22 22L20 20" stroke="#475069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>;

	return (
		<>
			<Navmenu/>
			

			<Header
				text="Поиск"
			/>

			<Paragraf
				text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
			/>

			<Search
				text="Введите название"
				logo={logo}
				buttonText="Искать"
			/>

			<div className='filmcard-wrap'> 
				{films.map((el) => {
					return <FilmCard 
						logo={el.logo}
						text={el.name}
						key={el.id}
					/>;
				})}
			</div>
		</>
	);
}

export default App;
