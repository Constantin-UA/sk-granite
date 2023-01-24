import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpinerComponent from '../spinerComponent/SpinerComponent';
import HeaderComponent from '../headerComponent/HeaderComponent';
import FooterComponent from '../footerComponent/FooterComponent';
import UpArrow from '../upArrow/UpArrow';
import './app.scss';
const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
const AboutPage = lazy(() => import('../pages/aboutPage/AboutPage'));
const ServicesPage = lazy(() => import('../pages/servicesPage/ServicesPage'));
const ContactPage = lazy(() => import('../pages/contactPage/ContactPage'));
const ReviewsPage = lazy(() => import('../pages/reviewsPage/ReviewsPage'));

const routes = [
	{ path: '/', name: 'Home', element: <MainPage /> },
	{ path: '/about', name: 'About', element: <AboutPage /> },
	{ path: '/service', name: 'Service', element: <ServicesPage /> },
	{ path: '/contact', name: 'Contact', element: <ContactPage /> },
	{ path: '/review', name: 'Review', element: <ReviewsPage /> },
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
							{routes.map((item) => {
								return <Route key={item.name} path={item.path} element={item.element} />;
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
