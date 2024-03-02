import Navmenu from '../../layout/navmenu/Navmenu';
import styles from './Header.module.css';
import classNames from 'classnames';
import { HeaderProps } from './Header.props';



function Header({text}: HeaderProps){

	return(
		<div className={classNames(styles.header)}>

			<Navmenu/>

			<div className={styles.headerP}>
				<p>{text}</p>
			</div>
		</div>
	);
}

export default Header;