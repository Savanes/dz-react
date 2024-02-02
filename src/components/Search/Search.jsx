
import Button from '../Button/Button';
import './Search.css';

function Search({text,logo,buttonText}){
    
	return(
		<div className='search'>
			<p className='search-logo-svg'>{logo}</p>
			<input className='search-input' placeholder={text} type="text"/>

			<Button
				text={buttonText}
			/>

		</div>
	
	);
}

export default Search;