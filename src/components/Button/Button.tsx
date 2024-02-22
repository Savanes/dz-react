import styles from './Button.module.css';
import classNames from 'classnames';
import { ButtonProps } from './Button.props';


function Button({text}: ButtonProps ){
	return(
		<button className={classNames(styles.btn)}>{text}</button>
	);
}

export default Button;