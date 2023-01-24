import { useEffect } from 'react';
import { useState } from 'react';
import upArrow from '../../assets/up-arrow.png';
import './upArrow.scss';

function UpArrow() {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = (event) => {
			setScrollY(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div
			className={scrollY > 800 ? 'upArrow upArrow-show' : 'upArrow'}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<img src={upArrow} alt="" className="upArrow-img" />
		</div>
	);
}
export default UpArrow;
