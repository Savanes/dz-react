import './Header.css';

function Header({text}){
	return(
		<div className='header'>
			<p>{text}</p>
		</div>
	);
}

export default Header;