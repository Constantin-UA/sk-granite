import { useState } from 'react';
import ImgDialog from '../imgDialog/ImgDialog';

import img_1 from '../../assets/servicePage/foto/1.webp';
import img_2 from '../../assets/servicePage/foto/2.webp';
import img_3 from '../../assets/servicePage/foto/3.webp';
import img_4 from '../../assets/servicePage/foto/4.webp';
import img_5 from '../../assets/servicePage/foto/5.webp';
import img_6 from '../../assets/servicePage/foto/6.webp';
import img_7 from '../../assets/servicePage/foto/7.webp';
import img_8 from '../../assets/servicePage/foto/8.webp';
import img_9 from '../../assets/servicePage/foto/9.webp';
import img_10 from '../../assets/servicePage/foto/10.webp';
import img_11 from '../../assets/servicePage/foto/11.webp';
import img_12 from '../../assets/servicePage/foto/12.webp';
import img_13 from '../../assets/servicePage/foto/13.webp';
import img_14 from '../../assets/servicePage/foto/14.webp';
import img_15 from '../../assets/servicePage/foto/15.webp';
import img_16 from '../../assets/servicePage/foto/16.webp';
import img_17 from '../../assets/servicePage/foto/17.webp';
import img_18 from '../../assets/servicePage/foto/18.webp';
import img_19 from '../../assets/servicePage/foto/19.webp';
import img_20 from '../../assets/servicePage/foto/20.webp';
import img_21 from '../../assets/servicePage/foto/21.webp';
import img_22 from '../../assets/servicePage/foto/22.webp';
import img_23 from '../../assets/servicePage/foto/23.webp';
import img_24 from '../../assets/servicePage/foto/24.webp';
import img_25 from '../../assets/servicePage/foto/25.webp';
import img_26 from '../../assets/servicePage/foto/26.webp';
import img_27 from '../../assets/servicePage/foto/27.webp';
import img_28 from '../../assets/servicePage/foto/28.webp';

import './photosetComponent.scss';
const photos0 = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10];
const photos1 = [img_11, img_12, img_13, img_14, img_15, img_16, img_17, img_18, img_19, img_20];
const photos2 = [img_21, img_22, img_23, img_24, img_25, img_26, img_27, img_28];
function PhotosetComponent() {
	const [modalActive, setModalActive] = useState(false);
	const [imgShow, setImgShow] = useState(img_1);
	return (
		<div className="photosetComponent">
			<div className="photosetComponent-grid">
				{photos0.map((item, idx) => {
					return (
						<div
							className="photosetComponent-grid-item"
							key={idx}
							onClick={() => {
								setModalActive(true);
								setImgShow(item);
							}}
						>
							<img src={item} alt={idx} />
						</div>
					);
				})}
			</div>
			<div className="photosetComponent-grid">
				{photos1.map((item, idx) => {
					return (
						<div
							className="photosetComponent-grid-item"
							key={idx}
							onClick={() => {
								setModalActive(true);
								setImgShow(item);
							}}
						>
							<img src={item} alt={idx} />
						</div>
					);
				})}
			</div>
			<div className="photosetComponent-grid">
				{photos2.map((item, idx) => {
					return (
						<div
							className="photosetComponent-grid-item"
							key={idx}
							onClick={() => {
								setModalActive(true);
								setImgShow(item);
							}}
						>
							<img src={item} alt={idx} />
						</div>
					);
				})}
			</div>
			<ImgDialog active={modalActive} setActive={setModalActive} imgShow={imgShow} />
		</div>
	);
}
export default PhotosetComponent;
