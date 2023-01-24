import { Suspense } from 'react';
import SpinerComponent from '../spinerComponent/SpinerComponent';

import './sectionImageComponent.scss';

function SectionImageComponent({ img }) {
	return (
		<div className="sectionImage">
			<Suspense fallback={<SpinerComponent />}>
				<img className="sectionImage-img" src={img} alt="section logo" />
			</Suspense>
		</div>
	);
}
export default SectionImageComponent;
