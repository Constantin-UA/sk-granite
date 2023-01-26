import './adresContact.scss';

function AdresContact({ showMap }) {
	const onClick = () => {
		showMap(true);
	};
	return (
		<div className="adresContact">
			<p>м. Дніпро</p>
			<p className="adresContact-adres" onClick={onClick}>
				пр. Мануйлівський, 18 Б
			</p>
			<p>
				<a className="adresContact-phone" href="tel:+380682917817">
					т. +380682917817
				</a>
			</p>
		</div>
	);
}
export default AdresContact;
