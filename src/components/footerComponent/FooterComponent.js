import telegram from '../../assets/footer/telegram.png';
import logo from '../../assets/footer/logo.png';
import './footerComponent.scss';

function FooterComponent() {
	return (
		<div className="footerComponent">
			<div className="footerComponent-wrapper">
				<div className="footerComponent-head">
					<div className="footerComponent-title">Поділитись</div>
					<div className="footerComponent-social-box">
						<div className="footerComponent-social-icon">
							<img src={telegram} alt="telegram icon" />
						</div>
						<div className="footerComponent-social-icon">
							<img src={telegram} alt="telegram icon" />
						</div>
						<div className="footerComponent-social-icon">
							<img src={telegram} alt="telegram icon" />
						</div>
						<div className="footerComponent-social-icon">
							<img src={telegram} alt="telegram icon" />
						</div>
						<div className="footerComponent-social-icon">
							<img src={telegram} alt="telegram icon" />
						</div>
					</div>
				</div>
				<div className="footerComponent-footer">
					<ul className="footerComponent-footer-box">
						<li className="footerComponent-footer-box-component">
							Пам'ятники за граніту, мармуру м. Дніпро
						</li>
						<li className="footerComponent-footer-box-component">
							Виготовлення пам'ятників із граніту, мармуру.
						</li>
						<li className="footerComponent-footer-box-component">
							Виготовлення меморіалів із граніту та мармуру.
						</li>
						<li className="footerComponent-footer-box-component">
							Замовити гранітний пам'ятник в Дніпропетровській області, а також по всій Україні.
						</li>
						<li className="footerComponent-footer-box-component">
							Купити пам'ятник із граніту та мармуру у Дніпрі.
						</li>
						<li className="footerComponent-footer-box-component">
							Благоустрій поховань та інші послуги.
						</li>
					</ul>
					<div className="footerComponent-footer-logo">
						<img src={logo} alt="SK granite logo" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default FooterComponent;
