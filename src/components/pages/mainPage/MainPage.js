import TitleComponent from '../../titleComponent/TitleComponent';
import SectionImageComponent from '../../sectionImageComponent/SectionImageComponent';
import SubtitleComponent from '../../subtitleComponent/SubtitleComponent';
import TextBoxComponent from '../../textBoxComponent/TextBoxComponent';
import img_0 from '../../../assets/main/Logo.png';
import img_1 from '../../../assets/main/2.png';
import img_2 from '../../../assets/main/3.png';
import img_3 from '../../../assets/main/4.png';
import './mainPage.scss';
const texts = [
	"Встановлення надгробка в місці упокою людини – спосіб висловити йому свою відданість, віддати шану. Не обов'язково вибирати найдорожчий, адже установка навіть скромного гранітного надгробка, яка демонструє ваше щире бажання увічнити пам'ять про близьку людину, що вже пішла, вже коштує багато чого. Так виявляється ваша любов до нього.",
	"Ми допоможемо створити в місці поховання умиротворену атмосферу, зробимо її доглянутою та зручною для відвідування рідними померлого. У нашій майстерні ви можете купити одну з готових пам'ятників: вертикальну на одну могилу або горизонтальну, яка зазвичай ставиться на дві могили. Ми пропонуємо варіанти з гравіюванням та портретом, з різними	декоративними елементами. Можливо, ви захочете придбати пам'ятник з хрестом або	пам'ятник-каплицю.",
	"Якщо жоден з готових варіантів не підійде, ви можете купити надгробок, повністю виготовлений за вашими вимогами щодо матеріалу, форми, розміру, декору. Ми також	надаємо послуги комплексного оформлення. Виготовлення гранітних і мармурових пам'яток	– основний напрямок нашої діяльності, але ми також займаємося виробництвом столиків,	лавок, скульптур і квітників на могилу, виготовляємо огорожі та хвіртки до нас.",
	"	Який би варіант ви не вибрали, працюючи над пам'ятником для вашої близької людини, ми	врахуємо всі ваші побажання. Ми гарантуємо максимально уважний підхід, тому що	повністю усвідомлюємо важливість пам'ятника для вас і свою відповідальність за	результат роботи.",
];

function MainPage() {
	return (
		<section className="mainPage">
			<div className="mainPage-wrapper">
				<TitleComponent title="Пам’ятники з граніту м. Дніпро" />
				<SectionImageComponent img={img_0} />
				<SubtitleComponent subtitle="Що ми пропонуємо" />
				<TextBoxComponent text={texts[0]} />
				<SectionImageComponent img={img_1} />
				<TextBoxComponent text={texts[1]} />
				<SectionImageComponent img={img_2} />
				<TextBoxComponent text={texts[2]} />
				<SectionImageComponent img={img_3} />
				<TextBoxComponent text={texts[3]} />
			</div>
		</section>
	);
}
export default MainPage;
