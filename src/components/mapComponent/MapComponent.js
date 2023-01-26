import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './mapComponent.scss';

function MapComponent() {
	const position = [48.491643, 35.042726];
	const zoom = 13;
	return (
		<MapContainer
			zoom={zoom}
			center={position}
			scrollWheelZoom={false}
			className="mapComponent-map"
		>
			<TileLayer attribution="&amp;" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={position}>
				<Popup>SK Granite</Popup>
			</Marker>
		</MapContainer>
	);
}

export default MapComponent;
