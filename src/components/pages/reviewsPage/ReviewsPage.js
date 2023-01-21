import TitleComponent from '../../titleComponent/TitleComponent';
import SectionImageComponent from '../../sectionImageComponent/SectionImageComponent';
import SubtitleComponent from '../../subtitleComponent/SubtitleComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';
import img_0 from '../../../assets/headImages/reviews.png';
import img_1 from '../../../assets/reviewsPage/1.png';
import img_2 from '../../../assets/reviewsPage/2.png';
import img_3 from '../../../assets/reviewsPage/3.png';
import './reviewsPage.scss';
const texts = [
	'Надсилайте нам свої відгики на електронну адрессу: sk_granite@ukr.net',
	"Хочу висловити подяку майстерні за чудову роботу. Замовляли пам'ятник. Все зробили якісно та вчасно за розумні гроші. Вже встановили, дуже гарно, дякую! Ставлю 5+. Рекомендую цю майстерню!",
	'Дуже сподобалося обслуговування клієнтів, все узгоджено, як робити написи, фотографії скинули, не сподобалося мені, всі мої бажання задовольнили, показали, як буде, все узгоджено, зробили на тиждень раніше, доставили на цвинтар коли мені зручно. Попередивши, що з ранку краще, а хто ввечері на цвинтар поїде, все швидко та якісно. Буду ще замовляти тільки в цій компанії.',
	"Дякую, допомогли з пам'ятником подруги дитинства, і ціни приємні та з установкою проконсультували. Спасибі вам.",
];

function ReviewsPage() {
	return (
		<section className="reviewsPage">
			<div className="reviewsPage-wrapper">
				<TitleComponent title="Відгуки" />
				<SectionImageComponent img={img_0} />
				<TextBoxComponent text={texts[0]} />
				<SubtitleComponent subtitle="Від Світлана" />
				<SectionImageComponent img={img_1} />
				<TextBoxComponent text={texts[1]} />
				<SubtitleComponent subtitle="Від Марина" />
				<SectionImageComponent img={img_2} />
				<TextBoxComponent text={texts[2]} />
				<SubtitleComponent subtitle="Від Кирило" />
				<SectionImageComponent img={img_3} />
				<TextBoxComponent text={texts[3]} />
			</div>
		</section>
	);
}
export default ReviewsPage;
