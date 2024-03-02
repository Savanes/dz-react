import Button from '../Button/Button';
import styles from './Search.module.css';
import classNames from 'classnames';
import { SearchProps } from './Search.props';

function Search({text,logo,buttonText}: SearchProps){
    
	return(
		<div className={classNames(styles.search)}>
			<p className={classNames(styles['search-logo-svg'])}>{logo}</p>
			<input className={classNames(styles['search-input'])} placeholder={text} type="text"/>

			<Button
				text={buttonText}
			/>

		</div>
	
	);
}

export default Search;