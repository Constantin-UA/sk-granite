import TitleComponent from '../../titleComponent/TitleComponent';
import SubtitleComponent from '../../subtitleComponent/SubtitleComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';

import img_0 from '../../../assets/headImages/reviews.png';
import img_1 from '../../../assets/reviewsPage/1.png';
import img_2 from '../../../assets/reviewsPage/2.png';
import img_3 from '../../../assets/reviewsPage/3.png';
import { lazy, Suspense } from 'react';
import SpinerComponent from '../../spinerComponent/SpinerComponent';
import './reviewsPage.scss';
const texts = [
	'Надсилайте нам свої відгики на електронну адрессу: sk_granite@ukr.net',
	"Хочу висловити подяку майстерні за чудову роботу. Замовляли пам'ятник. Все зробили якісно та вчасно за розумні гроші. Вже встановили, дуже гарно, дякую! Ставлю 5+. Рекомендую цю майстерню!",
	'Дуже сподобалося обслуговування клієнтів, все узгоджено, як робити написи, фотографії скинули, не сподобалося мені, всі мої бажання задовольнили, показали, як буде, все узгоджено, зробили на тиждень раніше, доставили на цвинтар коли мені зручно. Попередивши, що з ранку краще, а хто ввечері на цвинтар поїде, все швидко та якісно. Буду ще замовляти тільки в цій компанії.',
	"Дякую, допомогли з пам'ятником подруги дитинства, і ціни приємні та з установкою проконсультували. Спасибі вам.",
];
const SectionImageComponent = lazy(() =>
	import('../../sectionImageComponent/SectionImageComponent')
);
const TitleImageComponent = lazy(() => import('../../titleImageComponent/TitleImageComponent'));
function ReviewsPage() {
	return (
		<section className="reviewsPage">
			<div className="reviewsPage-wrapper">
				<TitleComponent title="Відгуки" />
				<Suspense fallback={<SpinerComponent />}>
					<TitleImageComponent img={img_0} />
				</Suspense>

				<TextBoxComponent text={texts[0]} />
				<SubtitleComponent subtitle="Від Світлана" />
				<Suspense fallback={<SpinerComponent />}>
					<SectionImageComponent img={img_1} />
				</Suspense>

				<TextBoxComponent text={texts[1]} />
				<SubtitleComponent subtitle="Від Марина" />

				<Suspense fallback={<SpinerComponent />}>
					<SectionImageComponent img={img_2} />
				</Suspense>

				<TextBoxComponent text={texts[2]} />
				<SubtitleComponent subtitle="Від Кирило" />
				<Suspense fallback={<SpinerComponent />}>
					<SectionImageComponent img={img_3} />
				</Suspense>

				<TextBoxComponent text={texts[3]} />
			</div>
		</section>
	);
}
export default ReviewsPage;
