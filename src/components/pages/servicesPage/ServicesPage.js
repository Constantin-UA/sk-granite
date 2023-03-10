import { Helmet } from 'react-helmet';
import { lazy, Suspense } from 'react';
import TitleComponent from '../../titleComponent/TitleComponent';
import SubtitleComponent from '../../subtitleComponent/SubtitleComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';
import PhotosetComponent from '../../photosetComponent/PhotosetComponent';
import SpinerComponent from '../../spinerComponent/SpinerComponent';
import img_0 from '../../../assets/headImages/services.webp';
import img_1 from '../../../assets/servicePage/1.webp';
import img_2 from '../../../assets/servicePage/2.webp';
import img_3 from '../../../assets/servicePage/3.webp';
import img_4 from '../../../assets/servicePage/4.webp';
import './servicesPage.scss';
const texts = [
	"Для виготовлення пам'ятників ми використовуємо натуральний граніт та мармур. Ви можете замовити вироби з більш ніж десяти видів граніту, що відрізняються за відтінком та технічними характеристиками. Детальніше ознайомитися з кожним окремим видом ви можете зі статей на нашому сайті або за приватної консультації у нашого фахівця.",
	'Для виготовлення надгробків використовують бетон, метал, змійовик, штучний камінь та інші матеріали. Але ми працюємо саме з гранітом та мармуром, тому що серед усіх існуючих варіантів вони – найкращі за співвідношенням довговічності, зовнішнього вигляду та вартості. Ми надаємо мармуровим та гранітним плитам розмір та форму відповідно до шаблону або параметрів, вказаних клієнтом. Після цього шліфуємо до досягнення ідеально гладкої поверхні, наносимо написи та портрет (якщо це передбачено у замовленні).',
	'Написи на виробах виконуються з бронзових літер, шрифт та розмір яких вибирають самі замовники. Вони виглядають красиво і не псуються під впливом сонячних променів, опадів, перепадів температур та вологості. Протягом довгих років напис на камені залишатиметься чітким та яскравим.',
	"Якщо ви вже визначилися з відповідним варіантом купівлі надгробка, для обговорення подробиць замовлення зв'яжіться з нашими фахівцями через сайт або за вказаним телефоном.",
];
const SectionImageComponent = lazy(() =>
	import('../../sectionImageComponent/SectionImageComponent')
);
const TitleImageComponent = lazy(() => import('../../titleImageComponent/TitleImageComponent'));
function ServicesPage() {
	return (
		<section className="servicesPage">
			<Helmet>
				<title>Що ми пропонуємо</title>
			</Helmet>
			<div className="servicesPage-wrapper">
				<TitleComponent title="Послуги" />
				<Suspense fallback={<SpinerComponent />}>
					<TitleImageComponent img={img_0} />
				</Suspense>
				<SubtitleComponent subtitle="Про пам'ятки з нашої майстерні" />
				<TextBoxComponent text={texts[0]} />
				<div className="col-wrapper">
					<Suspense fallback={<SpinerComponent />}>
						<SectionImageComponent img={img_1} />
						<SectionImageComponent img={img_2} />
					</Suspense>
				</div>
				<TextBoxComponent text={texts[1]} />
				<div className="row-wrapper">
					<Suspense fallback={<SpinerComponent />}>
						<SectionImageComponent img={img_3} />
						<SectionImageComponent img={img_4} />
					</Suspense>
				</div>
				<TextBoxComponent text={texts[2]} />
				<Suspense fallback={<SpinerComponent />}>
					<PhotosetComponent />
				</Suspense>
				<TextBoxComponent text={texts[3]} />
			</div>
		</section>
	);
}
export default ServicesPage;
