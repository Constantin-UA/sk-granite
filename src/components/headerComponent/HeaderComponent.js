import MenuComponent from '../menuComponent/MenuComponent';
import logo from '../../assets/header/Logo.png';
import './headerComponent.scss';
function HeaderComponent() {
	return (
		<section className="headerComponent">
			<div className="headerComponent-wrapper">
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
		</section>
	);
}
export default HeaderComponent;
