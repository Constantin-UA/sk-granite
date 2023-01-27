import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import './menuHeader.scss';
function MenuHeader() {
	const btns = [
		{
			name: 'Головна',
			path: '/',
		},
		{
			name: 'Про нас',
			path: '/about',
		},
		{
			name: 'Послуги',
			path: '/service',
		},
		{
			name: 'Контакти',
			path: '/contact',
		},
	];

	const nodeRef = useRef(null);
	let activeStyle = {
		textDecoration: 'underline',
	};
	return (
		<ul id="menuList" className="menuHeader" ref={nodeRef}>
			{btns.map((item, idx) => {
				return (
					<li key={idx} className="menuHeader-item">
						<NavLink
							className="menuHeader-item-link"
							to={item.path}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							{item.name}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
export default MenuHeader;
