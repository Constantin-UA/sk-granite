import TitleComponent from '../../titleComponent/TitleComponent';
import SectionImageComponent from '../../sectionImageComponent/SectionImageComponent';
import SubtitleComponent from '../../subtitleComponent/SubtitleComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';
import TitleImageComponent from '../../titleImageComponent/TitleImageComponent';
import PhotosetComponent from '../../photosetComponent/PhotosetComponent';

import img_0 from '../../../assets/headImages/services.png';
import img_1 from '../../../assets/servicePage/1.png';
import img_2 from '../../../assets/servicePage/2.png';
import img_3 from '../../../assets/servicePage/3.png';
import img_4 from '../../../assets/servicePage/4.png';
import './servicesPage.scss';
const texts = [
	"Для виготовлення пам'ятників ми використовуємо натуральний граніт та мармур. Ви можете замовити вироби з більш ніж десяти видів граніту, що відрізняються за відтінком та технічними характеристиками. Детальніше ознайомитися з кожним окремим видом ви можете зі статей на нашому сайті або за приватної консультації у нашого фахівця.",
	'Для виготовлення надгробків використовують бетон, метал, змійовик, штучний камінь та інші матеріали. Але ми працюємо саме з гранітом та мармуром, тому що серед усіх існуючих варіантів вони – найкращі за співвідношенням довговічності, зовнішнього вигляду та вартості. Ми надаємо мармуровим та гранітним плитам розмір та форму відповідно до шаблону або параметрів, вказаних клієнтом. Після цього шліфуємо до досягнення ідеально гладкої поверхні, наносимо написи та портрет (якщо це передбачено у замовленні).',
	'Написи на виробах виконуються з бронзових літер, шрифт та розмір яких вибирають самі замовники. Вони виглядають красиво і не псуються під впливом сонячних променів, опадів, перепадів температур та вологості. Протягом довгих років напис на камені залишатиметься чітким та яскравим.',
	"Якщо ви вже визначилися з відповідним варіантом купівлі надгробка, для обговорення подробиць замовлення зв'яжіться з нашими фахівцями через сайт або за вказаним телефоном.",
];

function ServicesPage() {
	return (
		<section className="servicesPage">
			<div className="servicesPage-wrapper">
				<TitleComponent title="Послуги" />
				<TitleImageComponent img={img_0} />
				<SubtitleComponent subtitle="Про пам'ятки з нашої майстерні" />
				<TextBoxComponent text={texts[0]} />
				<div className="col-wrapper">
					<SectionImageComponent img={img_1} />
					<SectionImageComponent img={img_2} />
				</div>
				<TextBoxComponent text={texts[1]} />
				<div className="row-wrapper">
					<SectionImageComponent img={img_3} />
					<SectionImageComponent img={img_4} />
				</div>
				<TextBoxComponent text={texts[2]} />
				<PhotosetComponent />
				<TextBoxComponent text={texts[3]} />
			</div>
		</section>
	);
}
export default ServicesPage;
