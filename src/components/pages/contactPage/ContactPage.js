import { Helmet } from 'react-helmet';
import TitleComponent from '../../titleComponent/TitleComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';
import ContactComponent from '../../contactComponent/ContactComponent';
import img_0 from '../../../assets/headImages/contacts.webp';
import img_1 from '../../../assets/contacts/1.webp';
import img_2 from '../../../assets/contacts/2.webp';
import { lazy, Suspense } from 'react';
import SpinerComponent from '../../spinerComponent/SpinerComponent';
import './contactPage.scss';
const texts = [
	"Якщо ви вже визначилися з відповідним варіантом купівлі надгробка, для обговорення подробиць замовлення зв'яжіться з нашими фахівцями через сайт або за вказаним телефоном.",
];
const SectionImageComponent = lazy(() =>
	import('../../sectionImageComponent/SectionImageComponent')
);
const TitleImageComponent = lazy(() => import('../../titleImageComponent/TitleImageComponent'));
function ContactPage({ showMap }) {
	return (
		<section className="contactPage">
			<Helmet>
				<title>Як нас знайти</title>
			</Helmet>
			<div className="contactPage-wrapper">
				<TitleComponent title="Контакти" />
				<Suspense fallback={<SpinerComponent />}>
					<TitleImageComponent img={img_0} />
				</Suspense>
				<ContactComponent showMap={showMap} />
				<TextBoxComponent text={texts[0]} />
				<div className="col-wrapper">
					<Suspense fallback={<SpinerComponent />}>
						<SectionImageComponent img={img_1} />
						<SectionImageComponent img={img_2} />
					</Suspense>
				</div>
			</div>
		</section>
	);
}
export default ContactPage;
