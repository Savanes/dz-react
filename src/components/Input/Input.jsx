import styles from './Input.module.css';
import classNames from 'classnames';

function Input({text}){
	return(
		<input className={classNames(styles.input)}>{text}</input>
		// не прописывал стили еще
	);
}

export default Input;