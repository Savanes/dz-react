import styles from './Paragraf.module.css';
import classNames from 'classnames';
import { ParagrafProps } from './Paragraf.props';

function Paragraf({text}: ParagrafProps){
	return(
		<div className={classNames(styles.paragraf)}>
			<p>{text}</p>
		</div>
	);
}

export default Paragraf;