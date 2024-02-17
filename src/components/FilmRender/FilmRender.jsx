import styles from './FilmRender.module.css';
import { films } from '../../films';
import FilmCard from '../FilmCard/FilmCard';


function FilmRender () {

	return(

		<div className={styles['filmcard-wrap']}> 
			{films.map((el) => {
				return <FilmCard 
					logo={el.logo}
					text={el.name}
					key={el.id}
				/>;
			})}
		</div>

	);
}

export default FilmRender;