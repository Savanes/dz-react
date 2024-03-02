import Rating from '../Rating/Rating';
import ToFavorites from '../ToFavorites/ToFavorites';
import styles from './FilmCard.module.css';
import classNames from 'classnames';
import { FilmCardProps } from './FilmCard.props';


function FilmCard({logo, text}: FilmCardProps ){

	return(
		<div className={classNames(styles.filmcard)}>

			<Rating
				rating={100}
			/>
			
			<div className={classNames(styles['img-film'])}>
				<img  src={logo} alt="" />
			</div>
			<p className={classNames(styles['filmcard-name'])}>{text}</p>

			<ToFavorites/>

		</div>
	);
}

export default FilmCard;