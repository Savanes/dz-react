import styles from './InFavorites.module.css';
import classNames from 'classnames';

const logosvg = <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M19 15.0909V10.0975C19 5.80891 19 3.6646 17.682 2.3323C16.364 1 14.2426 1 10 1C5.75736 1 3.63604 1 2.31802 2.3323C1 3.6646 1 5.80891 1 10.0975V15.0909C1 18.1875 1 19.7358 1.73411 20.4123C2.08421 20.735 2.52615 20.9377 2.99692 20.9915C3.98402 21.1045 5.13673 20.0849 7.44216 18.0458C8.46122 17.1445 8.97075 16.6938 9.56028 16.5751C9.85057 16.5166 10.1494 16.5166 10.4397 16.5751C11.0292 16.6938 11.5388 17.1445 12.5578 18.0458C14.8633 20.0849 16.016 21.1045 17.0031 20.9915C17.4739 20.9377 17.9158 20.735 18.2659 20.4123C19 19.7358 19 18.1875 19 15.0909Z" stroke="#37D8A7" strokeWidth="2"/>
</svg>;



function InFavorites(){
	return(
		<div className={classNames(styles.infavorites)}>
			{logosvg}
			<button className={classNames(styles.infavorit)}>В избранном</button>
		</div>
	);
}

export default InFavorites;