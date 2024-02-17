import { useContext, useState } from 'react';
import styles from './Navmenu.module.css';
import classNames from 'classnames';
import { useEffect } from 'react';
import { UserContext } from '../../context/user.context';

function Navmenu(){

	const [enter, setEnter] = useState('войти');

	const{ isLogined, setIsLogined, name, setName } = useContext(UserContext);


	const logo = <svg width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M35 26.8182V18.4959C35 11.3482 35 7.77435 32.8033 5.55384C30.6066 3.33334 27.0711 3.33334 20 3.33334C12.9289 3.33334 9.3934 3.33334 7.1967 5.55384C5 7.77435 5 11.3482 5 18.4959V26.8182C5 31.9791 5 34.5596 6.22351 35.6872C6.80702 36.2249 7.54358 36.5628 8.32819 36.6526C9.97337 36.8408 11.8946 35.1416 15.7369 31.7431C17.4354 30.2408 18.2846 29.4897 19.2671 29.2918C19.751 29.1943 20.249 29.1943 20.7329 29.2918C21.7154 29.4897 22.5646 30.2408 24.2631 31.7431C28.1054 35.1416 30.0266 36.8408 31.6718 36.6526C32.4564 36.5628 33.193 36.2249 33.7765 35.6872C35 34.5596 35 31.9791 35 26.8182Z" stroke="#7B6EF6" strokeWidth="3"/>
		<path d="M25 10H15" stroke="#7B6EF6" strokeWidth="3" strokeLinecap="round"/>
	</svg>;
	const logoReg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 16C8 18.8284 8 20.2426 8.87868 21.1213C9.51998 21.7626 10.4466 21.9359 12 21.9827M8 8C8 5.17157 8 3.75736 8.87868 2.87868C9.75736 2 11.1716 2 14 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V10V14V16C21 18.8284 21 20.2426 20.1213 21.1213C19.3529 21.8897 18.175 21.9862 16 21.9983" stroke="#9BA5B7" strokeWidth="1.5" strokeLinecap="round"/>
		<path d="M3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5M3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5" stroke="#9BA5B7" strokeWidth="1.5" strokeLinecap="round"/>
		<path d="M6 12L15 12M15 12L12.5 14.5M15 12L12.5 9.5" stroke="#9BA5B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>;


	const local = localStorage.getItem('users'); 
	const localSt = JSON.parse(local);
	const localStor = localSt ? localSt[0].isLogined : null ;



	if(localSt){
		setName(localSt[0].name);
	}else{
		setName('');
	}

	const exitProfile = () => {
		if(enter === 'выйти'){
			localStorage.setItem('users', JSON.stringify([{ name: localSt[0].name, isLogined: false }]));
		}else{
			console.log('войдите в профиль');
		}
	};

	useEffect(() => {
		console.log(isLogined);
		if(localStor === true){
			setEnter('выйти');
		}else{
			enter;
		}
	}, []);
	
		
	return( 
		<div className={classNames(styles.navmenu)}>
			{logo}
			<div className={classNames(styles['navmenu-wrapper'])}>
				<a className={classNames(styles['navmenu-search'])}>Поиск фильмов</a>
				<a className={classNames(styles['navmenu-films'])}>Мои фильмы</a>
				<a>{localStor === false ? '' : name }</a>
				<a onClick={exitProfile} className={classNames(styles['navmenu-reg'])}>{enter}{logoReg}</a>
			</div>
		</div>
			
	);
}

export default Navmenu;