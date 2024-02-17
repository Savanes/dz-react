import { createContext } from 'react';

const lo = localStorage.getItem('users') ? localStorage.getItem('users') : '';
const loc = lo === localStorage.getItem('users') ? JSON.parse(lo) : 'no';
const locStorName = loc == 'no' ? '' : loc[0].name;
const locStorLogin = loc == false  ? '' : loc[0].isLogined;

export const UserContext = createContext({
	name: locStorName ,
	isLogined: locStorLogin
});