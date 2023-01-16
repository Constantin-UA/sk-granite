import TitleComponent from '../../titleComponent/TitleComponent';
import SectionImageComponent from '../../sectionImageComponent/SectionImageComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';
import ContactComponent from '../../contactComponent/ContactComponent';
import img_0 from '../../../assets/contacts/Image.png';
import './contactPage.scss';
const texts = [
	"Якщо ви вже визначилися з відповідним варіантом купівлі надгробка, для обговорення подробиць замовлення зв'яжіться з нашими фахівцями через сайт або за вказаним телефоном.",
];

function ContactPage() {
	return (
		<section className="contactPage">
			<div className="contactPage-wrapper">
				<TitleComponent title="Контакти" />
				<SectionImageComponent img={img_0} />
				<ContactComponent />
				<TextBoxComponent text={texts[0]} />
			</div>
		</section>
	);
}
export default ContactPage;
