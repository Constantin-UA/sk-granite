import logo from '../../assets/footer/logo.png';

import './footerComponent.scss';

function FooterComponent() {
	return (
		<div className="footerComponent">
			<div className="footerComponent-wrapper">
				<div className="footerComponent-head">
					<div className="footerComponent-head-box">
						<div className="footerComponent-title">Поділитись</div>
						{/* 						<div
							className="footerComponent-social-box a2a_kit a2a_kit_size_32 a2a_default_style"
							data-a2a-url="www.sk-granite.dp.ua"
							data-a2a-title="Виготовлення пам'ятників м. Дніпро"
						>
							<a className="a2a_button_facebook"></a>
							<a className="a2a_button_twitter"></a>
							<a className="a2a_button_telegram"></a>
							<a className="a2a_button_google_gmail"></a>
							<a className="a2a_button_viber "></a>
							<a className="a2a_button_whatsapp"></a>
						</div> */}
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
