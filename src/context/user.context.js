import { createContext } from 'react';

const lo = localStorage.getItem('users');
const loc = JSON.parse(lo);
const locStorName = loc[0].name;
const locStorLogin =  loc[0].isLogined;

export const UserContext = createContext({
	name: locStorName ,
	isLogined: locStorLogin
});