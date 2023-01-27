import { useState, useEffect } from 'react';
import MenuHeader from '../menuHeader/MenuHeader';
import MenuComponent from '../menuComponent/MenuComponent';
import AdresContact from '../adresContact/AdresContact';
import menu from '../../assets/header/btn.webp';
import cros from '../../assets/header/cros.webp';
import logo from '../../assets/header/Logo.webp';
import './headerComponent.scss';
function HeaderComponent({ showMap }) {
	const [showMenu, setShowMenu] = useState(false);
	const [showCros, setShowCros] = useState(false);
	const [width, setWidth] = useState(0);
	useEffect(() => {
		setWidth(document.querySelector('.headerComponent').clientWidth);
	}, []);

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
				{width > 768 ? (
					<MenuHeader />
				) : (
					<MenuComponent onClose={setShowMenu} setShowCros={setShowCros} show={showMenu} />
				)}
			</div>
			<div className="headerComponent-menu-open" onClick={() => setShowMenu(!showMenu)}>
				<img src={showCros ? cros : menu} alt="button open menu" />
			</div>
		</section>
	);
}
export default HeaderComponent;
