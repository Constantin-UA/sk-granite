import { Helmet } from 'react-helmet';
import TitleComponent from '../../titleComponent/TitleComponent';
import SubtitleComponent from '../../subtitleComponent/SubtitleComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';
import img_0 from '../../../assets/headImages/main.webp';
import img_1 from '../../../assets/main/1.webp';
import img_2 from '../../../assets/main/2.webp';
import img_3 from '../../../assets/main/3.webp';
import img_4 from '../../../assets/main/4.webp';
import img_5 from '../../../assets/main/5.webp';
import img_6 from '../../../assets/main/6.webp';
import { lazy, Suspense } from 'react';
import SpinerComponent from '../../spinerComponent/SpinerComponent';

import './mainPage.scss';
const texts = [
	"Встановлення надгробка в місці упокою людини – спосіб висловити йому свою відданість, віддати шану. Не обов'язково вибирати найдорожчий, адже установка навіть скромного гранітного надгробка, яка демонструє ваше щире бажання увічнити пам'ять про близьку людину, що вже пішла, вже коштує багато чого. Так виявляється ваша любов до нього.",
	"Ми допоможемо створити в місці поховання умиротворену атмосферу, зробимо її доглянутою та зручною для відвідування рідними померлого. У нашій майстерні ви можете купити одну з готових пам'ятників: вертикальну на одну могилу або горизонтальну, яка зазвичай ставиться на дві могили. Ми пропонуємо варіанти з гравіюванням та портретом, з різними	декоративними елементами. Можливо, ви захочете придбати пам'ятник з хрестом або	пам'ятник-каплицю.",
	"Якщо жоден з готових варіантів не підійде, ви можете купити надгробок, повністю виготовлений за вашими вимогами щодо матеріалу, форми, розміру, декору. Ми також	надаємо послуги комплексного оформлення. Виготовлення гранітних і мармурових пам'яток	– основний напрямок нашої діяльності, але ми також займаємося виробництвом столиків,	лавок, скульптур і квітників на могилу, виготовляємо огорожі та хвіртки до нас.",
	"	Який би варіант ви не вибрали, працюючи над пам'ятником для вашої близької людини, ми	врахуємо всі ваші побажання. Ми гарантуємо максимально уважний підхід, тому що	повністю усвідомлюємо важливість пам'ятника для вас і свою відповідальність за	результат роботи.",
];

const SectionImageComponent = lazy(() =>
	import('../../sectionImageComponent/SectionImageComponent')
);
const TitleImageComponent = lazy(() => import('../../titleImageComponent/TitleImageComponent'));
function MainPage() {
	return (
		<section className="mainPage">
			<Helmet>
				<title>Виготовлення пам'ятників з мармуру та граніту у Дніпрі.</title>
				<meta name="title" content="Виготовлення пам'ятників з мармуру та граніту у Дніпрі." />
				<meta
					name="description"
					content="Замовити гранітний пам'ятник в Дніпропетровській області, а також по всій Україні."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://sk-granite.dp.ua/" />
				<meta
					property="og:title"
					content="Виготовлення пам'ятників з мармуру та граніту у Дніпрі."
				/>
				<meta
					property="og:description"
					content="Замовити гранітний пам'ятник в Дніпропетровській області, а також по всій Україні."
				/>
				<meta property="og:image" content="%PUBLIC_URL%/faviconImg.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="http://sk-granite.dp.ua/" />
				<meta
					property="twitter:title"
					content="Виготовлення пам'ятників з мармуру та граніту у Дніпрі."
				/>
				<meta
					property="twitter:description"
					content="Замовити гранітний пам'ятник в Дніпропетровській області, а також по всій Україні."
				/>
				<meta property="twitter:image" content="%PUBLIC_URL%/faviconImg.png" />
			</Helmet>
			<div className="mainPage-wrapper">
				<TitleComponent title="Пам’ятники з граніту м. Дніпро" />
				<Suspense fallback={<SpinerComponent />}>
					<TitleImageComponent img={img_0} />
				</Suspense>
				<SubtitleComponent subtitle="Що ми пропонуємо" />
				<TextBoxComponent text={texts[0]} />
				<div className="col-wrapper">
					<Suspense fallback={<SpinerComponent />}>
						<SectionImageComponent img={img_1} />
					</Suspense>
					<Suspense fallback={<SpinerComponent />}>
						<SectionImageComponent img={img_2} />
					</Suspense>
				</div>
				<TextBoxComponent text={texts[1]} />
				<SectionImageComponent img={img_5} />
				<div className="col-wrapper">
					<TextBoxComponent text={texts[2]} />
					<SectionImageComponent img={img_3} />
				</div>
				<div className="col-wrapper">
					<SectionImageComponent img={img_4} />
					<TextBoxComponent text={texts[3]} />
				</div>
				<SectionImageComponent img={img_6} />
			</div>
		</section>
	);
}
export default MainPage;
