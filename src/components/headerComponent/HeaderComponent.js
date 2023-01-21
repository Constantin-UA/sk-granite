import MenuComponent from '../menuComponent/MenuComponent';
import logo from '../../assets/header/Logo.png';
import menu from '../../assets/header/btn.svg';
import './headerComponent.scss';
function HeaderComponent() {
	const showMenu = () => {
		document.getElementById('menuList').classList.toggle('show');
	};
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
						<p>т. +380682917817</p>
					</div>
				</div>
				<MenuComponent />
			</div>
			<div className="headerComponent-menu-open" onClick={() => showMenu()}>
				<img src={menu} alt="button open menu" />
			</div>
		</section>
	);
}
export default HeaderComponent;
