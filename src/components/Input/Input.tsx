// import { useContext } from 'react';
import Button from '../Button/Button';
import styles from './Input.module.css';
import classNames from 'classnames';
// import { UserContext } from '../../context/user.context';
import { InputProps } from './Input.props';

function Input({text,buttonText}: InputProps){

	// const{ setIsLogined } = useContext(UserContext);

	const submitForm = (e)=>{
		e.preventDefault();
		const formData = new FormData(e.target);
		const  formProps = Object.fromEntries(formData);

		const isLog = true;

		if(formProps.name){
			localStorage.setItem('users', JSON.stringify([{ name: formProps.name, isLogined: isLog }]));
		}else{
			alert('ведите имя');
		}

	};

	return(
		<form onSubmit={submitForm} className={classNames(styles.input)}>
			<div >
				<input name="name" className={classNames(styles['input-input'])} placeholder={text} type="text"/>
				<div>
					<Button
						text={buttonText}
					/>
				</div>
			</div>
		</form>
	);
}

export default Input;