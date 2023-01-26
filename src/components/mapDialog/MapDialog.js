import MapComponent from '../mapComponent/MapComponent';
import cros from '../../assets/contacts/cros.png';
import './mapDialog.scss';
function MapDialog({ mapDialogShow, setActive }) {
	const onClick = () => {
		setActive(false);
	};
	return (
		<div className={mapDialogShow ? 'mapDialog mapDialog-active' : 'mapDialog'}>
			<img src={cros} alt="close button" className="mapDialog-close" onClick={onClick} />
			<div className="mapDialog-body">{mapDialogShow ? <MapComponent /> : null}</div>
		</div>
	);
}

export default MapDialog;
