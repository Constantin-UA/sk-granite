import MenuComponent from '../menuComponent/MenuComponent';
import logo from '../../assets/header/Logo.png';
import menu from '../../assets/header/btn.svg';
import cros from '../../assets/header/cros.svg';
import './headerComponent.scss';
import { useState } from 'react';
import { useEffect } from 'react';
function HeaderComponent() {
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
					<div className="headerComponent-addres-text">
						<p>Наша адреса:</p>
						<p>м. Дніпро</p>
						<p>п. Мануйловський 18б</p>
						<p>
							<a href="tel:+380682917817">т. +380682917817</a>
						</p>
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
