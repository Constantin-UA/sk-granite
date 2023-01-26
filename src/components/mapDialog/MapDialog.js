import cros from '../../assets/header/cros.png';
import map from '../../assets/about/1.png';
import './mapDialog.scss';
function MapDialog({ active, setActive }) {
	return (
		<div className={active ? 'mapDialog mapDialog-active' : 'mapDialog'}>
			<img
				src={cros}
				alt="close button"
				className="mapDialog-close"
				onClick={() => setActive(false)}
			/>
			<div className={active ? 'mapDialog-body mapDialog-body-active' : 'mapDialog-body'}>
				<img src={map} alt="Big photoShow" className="mapDialog-map" />
			</div>
		</div>
	);
}

export default MapDialog;
