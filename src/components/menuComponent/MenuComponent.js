import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import './menuComponent.scss';
function MenuComponent({ onClose, show, setShowCros }) {
	const btns = ['Головна', 'Про нас', 'Послуги', 'Контакти', 'Відгуки'];
	const refs = ['/', '/about', '/service', '/contact', '/review'];
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
				>
					{btns.map((item, idx) => {
						return (
							<li key={idx} className="menuComponent-item">
								<Link
									className="menuComponent-item-link"
									to={refs[idx]}
									onClick={() => onClose(false)}
								>
									{item}
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</Transition>
	);
}
export default MenuComponent;
