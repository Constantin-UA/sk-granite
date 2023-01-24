import './imgDialog.scss';
function ImgDialog({ active, setActive, imgShow = '' }) {
	return (
		<div className={active ? 'imgDialog imgDialog-active' : 'imgDialog'}>
			<button className="imgDialog-close" onClick={() => setActive(false)}>
				&times;
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
