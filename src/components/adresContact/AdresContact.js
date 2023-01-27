import './adresContact.scss';

function AdresContact({ showMap, active = false }) {
	const onClick = () => {
		showMap(true);
	};
	return (
		<div className={active ? 'adresContactActive' : 'adresContact'}>
			<p>м. Дніпро</p>
			<p className={active ? 'adresContactActive-adres' : 'adresContact-adres'} onClick={onClick}>
				пр. Мануйлівський, 18 Б
			</p>
			<p>
				<a
					className={active ? 'adresContactActive-phone' : 'adresContact-phone'}
					href="tel:+380682917817"
				>
					т. +380682917817
				</a>
			</p>
		</div>
	);
}
export default AdresContact;
