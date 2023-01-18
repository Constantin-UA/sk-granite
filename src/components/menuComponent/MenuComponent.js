import { Link } from 'react-router-dom';
import './menuComponent.scss';
function MenuComponent() {
	const btns = ['Головна', 'Про нас', 'Послуги', 'Контакти', 'Відгуки'];
	const refs = ['/', 'пронас', 'послуги', 'контакти', 'відгуки'];
	return (
		<>
			<ul id="menuList" className="menuComponent">
				{btns.map((item, idx) => {
					return (
						<li key={idx} className="menuComponent-item">
							<Link to={refs[idx]}>{item}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
export default MenuComponent;
