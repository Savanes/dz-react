// import InFavorites from '../InFavorites/InFavorites';
import Rating from '../Rating/Rating';
import ToFavorites from '../ToFavorites/ToFavorites';
import styles from './FilmCard.module.css';
import classNames from 'classnames';


function FilmCard({logo, text}){

	return(
		<div className={classNames(styles.filmcard)}>

			<Rating/>
			
			<div className={classNames(styles['img-film'])}>
				<img  src={logo} alt="" />
			</div>
			<p className={classNames(styles['filmcard-name'])}>{text}</p>

			<ToFavorites/>

			{/* <InFavorites/> */}
		</div>
	);
}

export default FilmCard;