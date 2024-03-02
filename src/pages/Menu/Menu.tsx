import FilmRender from '../../components/FilmRender/FilmRender';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Paragraf from '../../components/Paragraf/Paragraf';
import styles from './Menu.module.css';

export function Menu(){
	return<>
		<Header
			text="Поиск"
		/>
		<Paragraf
			text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		/>
		<div className={styles['inp']}>
			<Input
				text={'Введите название'}
				buttonText="Искать"
			/>
		</div>
		<FilmRender/>
	</>;
}