import insta from '../../assets/contacts/instagram.png';
import face from '../../assets/contacts/facebook.png';

import './contactComponent.scss';
function ContactComponent() {
	return (
		<div className="contact-box">
			<div className="contact-box-title">Головний офіс</div>
			<div className="contact-box-subtitle">
				<p>м. Дніпро</p>
				<p>п. Мануйловський 18б</p>
				<p>т. +380682917817</p>
			</div>
			<div className="contact-box-title">Електрона адреса</div>
			<div className="contact-box-subtitle">sk_granite@i.ua</div>
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
