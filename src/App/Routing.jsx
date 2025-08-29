import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "../Shared/Layout";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";

import {Navigate} from "react-router-dom";
import {useStore} from "../App/Store";

const ProtectedRoute = ({children}) => {
	const {user} = useStore();	

	if (!user) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

const Routing = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route
						index
						element={
							<ProtectedRoute>
								<HomePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/about'
						element={
							<ProtectedRoute>
								<AboutPage />
							</ProtectedRoute>
						}
					/>
					<Route path='/login' element={<LoginPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default Routing;
