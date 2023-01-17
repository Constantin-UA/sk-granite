import './menuComponent.scss';
function MenuComponent() {
	const btns = ['Головна', 'Про нас', 'Послуги', 'Контакти', 'Відгуки'];
	return (
		<>
			<ul className="menuComponent">
				{btns.map((item, idx) => {
					return <li className="menuComponent-item">{item}</li>;
				})}
			</ul>
		</>
	);
}
export default MenuComponent;
