import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

function Map() {
	const castelloTesinoCoordinates: LatLngExpression = [46.0648, 11.6332];

	return (
		<MapContainer
			className={styles.Map}
			center={castelloTesinoCoordinates}
			zoom={15}
			maxZoom={18}
			attributionControl={false}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
		</MapContainer>
	);
}

export default Map;
