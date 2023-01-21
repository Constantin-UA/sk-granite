import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, ServicesPage, ContactPage, ReviewsPage } from '../pages';
import HeaderComponent from '../headerComponent/HeaderComponent';
import FooterComponent from '../footerComponent/FooterComponent';
import './app.scss';
const routers = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/пронас',
		element: <AboutPage />,
	},
	{
		path: '/послуги',
		element: <ServicesPage />,
	},
	{
		path: '/контакти',
		element: <ContactPage />,
	},
	{
		path: '/відгуки',
		element: <ReviewsPage />,
	},
];

function App() {
	return (
		<Router>
			<div className="app">
				<header>
					<HeaderComponent />
				</header>

				{/* 				<main>
					<Routes>
						{routers.map((item, idx) => {
							return <Route key={idx} path={item.path} element={item.element} />;
						})}
					</Routes>
				</main> */}

				<footer>
					<FooterComponent />
				</footer>
			</div>
		</Router>
	);
}

export default App;
