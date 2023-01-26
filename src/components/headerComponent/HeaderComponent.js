import { useState, useEffect } from 'react';
import MenuComponent from '../menuComponent/MenuComponent';
import AdresContact from '../adresContact/AdresContact';
import menu from '../../assets/header/btn.svg';
import cros from '../../assets/header/cros.svg';
import './headerComponent.scss';
import logo from '../../assets/header/Logo.png';
function HeaderComponent({ showMap }) {
	const [showMenu, setShowMenu] = useState(false);
	const [showCros, setShowCros] = useState(false);
	const [width, setWidth] = useState(0);
	useEffect(() => {
		setWidth(document.querySelector('.headerComponent').clientWidth);
	}, []);
	useEffect(() => {
		if (width > 768) {
			setShowMenu(true);
		}
	}, [width]);

	return (
		<section className="headerComponent">
			<div className="headerComponent-wrapper">
				<div className="headerComponent-box">
					<div className="headerComponent-logo">
						<img src={logo} alt="Logotip SK granite" />
					</div>
					<div className="headerComponent-adres">
						<div className="headerComponent-adres-title">Наша адреса:</div>
						<AdresContact showMap={showMap} />
					</div>
				</div>
				<MenuComponent onClose={setShowMenu} setShowCros={setShowCros} show={showMenu} />
			</div>
			<div className="headerComponent-menu-open" onClick={() => setShowMenu(!showMenu)}>
				<img src={showCros ? cros : menu} alt="button open menu" />
			</div>
		</section>
	);
}
export default HeaderComponent;
