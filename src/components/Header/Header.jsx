import { useEffect, useState } from 'react';
import Navmenu from '../../layout/navmenu/Navmenu';
import styles from './Header.module.css';
import classNames from 'classnames';



function Header({text}){

	const [userName, setUserName] = useState('');

	// const userrr = localStorage.getItem('users');
	// const userName = userrr.name;


	// console.log(userName);



	const obj = localStorage.getItem('users');
	const objParse = JSON.parse(obj);
	console.log(objParse[0].isLogined);
	console.log(objParse[0].name);


	// for(let user of objParse ){
		
	// 	return  userName = user.name;
	// } 

	useEffect(() => {
		if(objParse[0].isLogined == true){
			setUserName(objParse[0].name);
		}
	}, []);
	// вроде можно и не оборачивать так
	

	return(
		<div className={classNames(styles.header)}>
			<Navmenu
				username = {userName}
			/>

			<div className={styles.headerP}>
				<p>{text}</p>
			</div>
		</div>
	);
}

export default Header;