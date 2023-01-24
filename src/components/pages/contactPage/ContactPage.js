import TitleComponent from '../../titleComponent/TitleComponent';
import SectionImageComponent from '../../sectionImageComponent/SectionImageComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';
import ContactComponent from '../../contactComponent/ContactComponent';
import TitleImageComponent from '../../titleImageComponent/TitleImageComponent';
import img_0 from '../../../assets/headImages/contacts.png';
import img_1 from '../../../assets/contacts/1.png';
import img_2 from '../../../assets/contacts/2.png';
import './contactPage.scss';
const texts = [
	"Якщо ви вже визначилися з відповідним варіантом купівлі надгробка, для обговорення подробиць замовлення зв'яжіться з нашими фахівцями через сайт або за вказаним телефоном.",
];

function ContactPage() {
	return (
		<section className="contactPage">
			<div className="contactPage-wrapper">
				<TitleComponent title="Контакти" />
				<TitleImageComponent img={img_0} />

				<ContactComponent />
				<div className="col-wrapper">
					<SectionImageComponent img={img_1} />
					<SectionImageComponent img={img_2} />
				</div>
				<TextBoxComponent text={texts[0]} />
			</div>
		</section>
	);
}
export default ContactPage;
