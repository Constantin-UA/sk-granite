import { MainPage, AboutPage, ServicesPage, ContactPage, ReviewsPage } from '../pages';
import './app.scss';

function App() {
	return (
		<div className="app">
			<main>
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
