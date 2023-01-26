import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import './menuComponent.scss';
function MenuComponent({ onClose, show, setShowCros }) {
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
	const duration = 300;
	const defaultStyle = {
		transition: `all ${duration}ms ease`,
		opacity: 0,
		visibility: 'hidden',
	};

	const transitionStyles = {
		entering: { opacity: 1, visibility: 'visible' },
		entered: { opacity: 1, visibility: 'visible' },
		exiting: { opacity: 0, visibility: 'hidden' },
		exited: { opacity: 0, visibility: 'hidden' },
	};
	const nodeRef = useRef(null);
	let activeStyle = {
		textDecoration: 'underline',
	};
	return (
		<Transition
			nodeRef={nodeRef}
			in={show}
			timeout={duration}
			mountOnEnter
			unmountOnExit
			onEnter={() => setShowCros(true)}
			onExiting={() => setShowCros(false)}
		>
			{(state) => (
				<ul
					id="menuList"
					className="menuComponent"
					ref={nodeRef}
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
					onClick={() => onClose(false)}
				>
					{btns.map((item, idx) => {
						return (
							<li key={idx} className="menuComponent-item">
								<NavLink
									className="menuComponent-item-link"
									to={item.path}
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									{item.name}
								</NavLink>
							</li>
						);
					})}
				</ul>
			)}
		</Transition>
	);
}
export default MenuComponent;
