import styles from './FilmRender.module.css';
import { films } from '../../films';
import FilmCard from '../FilmCard/FilmCard';


function FilmRender () {

	// if(!films[0].name){
	// 	let mm = 10;
	// 	return mm;
	// }

	return(

		<div className={styles['filmcard-wrap']}> 
			{films.map((el) => {
				return <FilmCard 
					logo={el.logo ? el.logo : 'logo not found'}
					text={el.name ? el.name : 'name not found'}
					key={el.id}
				/>;
			})}
		</div>

	);
}

export default FilmRender;