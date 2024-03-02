import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';

export function Login(){
	return<>
		<Header
			text="Вход"
		/>
		<Input
			text={'Ваше имя'}
			buttonText="Войти в профиль"
		/>
	</>;
}