import AdresContact from '../adresContact/AdresContact';
import face from '../../assets/contacts/facebook.webp';
import insta from '../../assets/contacts/instagram.webp';
import './contactComponent.scss';
function ContactComponent({ showMap }) {
	return (
		<div className="contact-box">
			<div className="contact-box-title">Головний офіс</div>
			<AdresContact showMap={showMap} />
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
