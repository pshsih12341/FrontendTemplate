import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className='not-found-page'>
			<h1>404 - Страница не найдена</h1>
			<p>Запрашиваемая страница не существует.</p>
			<Link to='/'>Вернуться на главную</Link>
		</div>
	);
};

export default NotFoundPage;
