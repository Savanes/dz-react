import styles from './Button.module.css';
import classNames from 'classnames';


function Button({text}){
	return(
		<button className={classNames(styles.btn)}>{text}</button>
	);
}

export default Button;