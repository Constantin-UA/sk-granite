import insta from '../../assets/contacts/instagram.png';
import face from '../../assets/contacts/facebook.png';

import './contactComponent.scss';
function ContactComponent() {
	return (
		<div className="contact-box">
			<div className="contact-box-title">Головний офіс</div>
			<div className="contact-box-subtitle">
				<p>м. Дніпро</p>
				<p>пр. Мануйлівський, 18 Б</p>
				<p>
					<a href="tel:+380682917817">т. +380682917817</a>
				</p>
			</div>
			<div className="contact-box-title">Електрона адреса</div>
			<div className="contact-box-subtitle">sk_granite@ukr.net</div>
			<div className="contact-box-title">Соціальні мережі</div>
			<div className="contact-box-social-box">
				<div className="contact-box-social-item">
					<img src={insta} alt="instagram" />
				</div>
				<div className="contact-box-social-item">
					<img src={face} alt="facebook" />
				</div>
			</div>
		</div>
	);
}
export default ContactComponent;
