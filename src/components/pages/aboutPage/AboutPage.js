import TitleComponent from '../../titleComponent/TitleComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';

import img_0 from '../../../assets/headImages/about.png';
import img_1 from '../../../assets/about/1.png';
import img_2 from '../../../assets/about/2.png';
import img_3 from '../../../assets/about/3.png';
import img_4 from '../../../assets/about/4.png';
import img_5 from '../../../assets/about/5.png';
import img_6 from '../../../assets/about/6.png';
import { lazy, Suspense } from 'react';
import SpinerComponent from '../../spinerComponent/SpinerComponent';
import './aboutPage.scss';
const texts = [
	"У нашій майстерні працюють кваліфіковані, досвідчені фахівці та є все необхідне обладнання для створення пам'ятників, гідних ваших близьких людей. Цей виріб вибирається один раз і встановлюється на довгі роки, тому ми намагаємось догодити клієнтам у будь-якій дрібниці при їх виготовленні. Так, ми пропонуємо купити пам'ятники на могилу, дизайн якої розробляється на сучасній комп'ютерній апаратурі, із застосуванням технології 3D моделювання. Ми маємо інструмент і техніку для нанесення складного гравіювання.",
	'У нашій майстерні можна купити надгробок більш ніж із десяти видів граніту. Також доступні варіанти з мармуру. Матеріали відрізняються не лише зовнішнім виглядом. У кожного з них свої особливості обробки, гравіювання, свої експлуатаційні характеристики, дізнатися про які ви можете зі статей на нашому сайті або під час консультації з нашими фахівцями.',
	'Незважаючи на те, що у виготовленні надгробків використовується ряд інших матеріалів, ми вважаємо за краще використовувати саме мармур та граніт. Так, інші компанії пропонують вироби з бетону, металу, змійовика або натурального каменю, але гранітні та мармурові аналоги виграють у них: десь за вартістю та зовнішнім виглядом, десь за міцністю та довговічністю.',
	"Вироби, виготовлені з граніту та мармуру нашими майстрами, не лише гарні, а й міцні. Вони будуть десятиліттями втілюватимуть пам'ять про ваших близьких. Опади, вітер, перепади температур і вологості і навіть час - все це не здатне завдати шкоди пам'ятникам, на яких відображено образ людини, що пішла.",
];
const SectionImageComponent = lazy(() =>
	import('../../sectionImageComponent/SectionImageComponent')
);
const TitleImageComponent = lazy(() => import('../../titleImageComponent/TitleImageComponent'));
function aboutPage() {
	return (
		<section className="aboutPage">
			<div className="aboutPage-wrapper">
				<TitleComponent title="Про нас" />
				<Suspense fallback={<SpinerComponent />}>
					<TitleImageComponent img={img_0} />
				</Suspense>
				<TextBoxComponent text={texts[0]} />
				<SectionImageComponent img={img_3} />
				{/* pause */}

				<div className="col-wrapper">
					<SectionImageComponent img={img_1} />
					<TextBoxComponent text={texts[1]} />
				</div>
				<SectionImageComponent img={img_4} />
				<div className="col-wrapper">
					<TextBoxComponent text={texts[2]} />
					<SectionImageComponent img={img_2} />
				</div>
				<div className="col-wrapper">
					<SectionImageComponent img={img_5} />
					<SectionImageComponent img={img_6} />
				</div>
				<TextBoxComponent text={texts[3]} />
			</div>
		</section>
	);
}
export default aboutPage;
