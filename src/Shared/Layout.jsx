import React from "react";
import {Link, useNavigate, Outlet} from "react-router-dom";
import {useStore} from "../App/Store";

const Layout = () => {
	const {user, setUser} = useStore();
	const navigate = useNavigate();

	return (
		<div className='layout'>
			<header className='header'>
				<nav className='nav'></nav>
			</header>

			<main className='main-content'>
				<Outlet />
			</main>

			<footer className='footer'>
				<p>&copy; 2024 Мое приложение. Все права защищены.</p>
			</footer>
		</div>
	);
};

export default Layout;
