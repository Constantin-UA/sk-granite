import { useState } from 'react';
import MapDialog from '../mapDialog/MapDialog';
import face from '../../assets/contacts/facebook.png';
import insta from '../../assets/contacts/instagram.png';
import './contactComponent.scss';
function ContactComponent() {
	const [modalActive, setModalActive] = useState(false);

	return (
		<div className="contact-box">
			<div className="contact-box-title">Головний офіс</div>
			<div className="contact-box-subtitle">
				<p>м. Дніпро</p>
				<p className="contact-adres-btn" onClick={() => setModalActive(true)}>
					пр. Мануйлівський, 18 Б
				</p>
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
			<MapDialog active={modalActive} setActive={setModalActive} />
		</div>
	);
}
export default ContactComponent;
