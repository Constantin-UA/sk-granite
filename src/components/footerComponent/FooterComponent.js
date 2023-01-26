import logo from '../../assets/footer/logo.png';
import telegram from '../../assets/footer/telegram.png';
import twitter from '../../assets/footer/twitter.png';
import viber from '../../assets/footer/viber.png';
import whatsapp from '../../assets/footer/whatsapp.png';

import './footerComponent.scss';

function FooterComponent() {
	return (
		<div className="footerComponent">
			<div className="footerComponent-wrapper">
				<div className="footerComponent-head">
					<div className="footerComponent-head-box">
						<div className="footerComponent-title">Поділитись</div>
						<div className="footerComponent-social-box">
							<a href="https://telegram.me/share/url?url=http://sk-granite.dp.ua&amp;text=SK Granite Виготовлення пам'ятників із граніту та мармуру.">
								<img
									className="footerComponent-telegram"
									src={telegram}
									alt="telegram share button icon"
								/>
							</a>
							<a href="viber://forward?text=Виготовлення пам'ятників із граніту та мармуру sk-granite.dp.ua">
								<img className="footerComponent-viber" src={viber} alt="viber share button icon" />
							</a>
							<a href="https://twitter.com/intent/tweet?text=Пам&#39;ятники за граніту та мармуру м. Дніпро sk-granite.dp.ua">
								<img
									className="footerComponent-twitter"
									src={twitter}
									alt="twitter share button icon"
								/>
							</a>
							<a href="https://wa.me/?text=Пам&#39;ятники за граніту та мармуру м. Дніпро sk-granite.dp.ua">
								<img
									className="footerComponent-whatsapp"
									src={whatsapp}
									alt="whatsapp share button icon"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="footerComponent-footer">
					<div className="footerComponent-footer-wrapper">
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
					</div>
					<div className="footerComponent-footer-logo">
						<img src={logo} alt="SK granite logo" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default FooterComponent;
