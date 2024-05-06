import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

function Map() {
	const castelloTesinoCoordinates = [46.0648, 11.6332] as LatLngExpression;

	return (
		<MapContainer className={styles.Map} center={castelloTesinoCoordinates} zoom={15} maxZoom={18}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
		</MapContainer>
	);
}

export default Map;
