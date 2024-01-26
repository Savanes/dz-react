import styles from './Header.module.css';
import classNames from 'classnames';

function Header({text}){
	return(
		<div className={classNames(styles.header)}>
			<p>{text}</p>
		</div>
	);
}

export default Header;