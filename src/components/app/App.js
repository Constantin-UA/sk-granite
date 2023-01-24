import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpinerComponent from '../spinerComponent/SpinerComponent';

/* import { MainPage, AboutPage, ServicesPage, ContactPage, ReviewsPage } from '../pages'; */
import HeaderComponent from '../headerComponent/HeaderComponent';
import FooterComponent from '../footerComponent/FooterComponent';

import UpArrow from '../upArrow/UpArrow';
import './app.scss';
const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
const AboutPage = lazy(() => import('../pages/aboutPage/AboutPage'));
const ServicesPage = lazy(() => import('../pages/servicesPage/ServicesPage'));
const ContactPage = lazy(() => import('../pages/contactPage/ContactPage'));
const ReviewsPage = lazy(() => import('../pages/reviewsPage/ReviewsPage'));
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
				<Suspense fallback={<SpinerComponent />}>
					<header>
						<HeaderComponent />
					</header>
					<main>
						<Routes>
							{routers.map((item, idx) => {
								return <Route key={idx} path={item.path} element={item.element} />;
							})}
						</Routes>

						<UpArrow />
					</main>
					<footer>
						<FooterComponent />
					</footer>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
