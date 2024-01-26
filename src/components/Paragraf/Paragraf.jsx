import styles from './Paragraf.module.css';
import classNames from 'classnames';

function Paragraf({text}){
	return(
		<div className={classNames(styles.paragraf)}>
			<p>{text}</p>
		</div>
	);
}

export default Paragraf;