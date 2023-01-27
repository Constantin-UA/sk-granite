import './imgDialog.scss';
import cros from '../../assets/header/cros.webp';
function ImgDialog({ active, setActive, imgShow = '' }) {
	return (
		<div className={active ? 'imgDialog imgDialog-active' : 'imgDialog'}>
			<button className="imgDialog-close" onClick={() => setActive(false)}>
				<img src={cros} alt="exit button cros" className="imgDialog-img" />
			</button>
			<div
				className={active ? 'imgDialog-body imgDialog-body-active' : 'imgDialog-body'}
				onClick={() => setActive(false)}
			>
				<img src={imgShow} alt="Big photoShow" className="imgDialog-img" />
			</div>
		</div>
	);
}

export default ImgDialog;
