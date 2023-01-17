import { MainPage, AboutPage, ServicesPage, ContactPage, ReviewsPage } from '../pages';
import HeaderComponent from '../headerComponent/HeaderComponent';
import './app.scss';

function App() {
	return (
		<div className="app">
			<main>
				<header>
					<HeaderComponent />
				</header>
				<MainPage />
				<AboutPage />
				<ServicesPage />
				<ContactPage />
				<ReviewsPage />
			</main>
		</div>
	);
}

export default App;
