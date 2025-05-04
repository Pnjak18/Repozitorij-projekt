import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locations from "../../../data/locations.json"; // Adjust path if needed

// Fix marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Component to update the map center dynamically
function MapUpdater({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);

  return null;
}

const WhereToFindUs = () => {
  const [selected, setSelected] = useState(locations[0]);

  return (
    <section className="location-section">
      <h2 className="location-heading">Where to Find Us</h2>
      <div className="location-wrapper">
        {/* Sidebar with details */}
        <div className="location-details">
          <h3>{selected.name}</h3>
          <p>{selected.address}</p>
          <p>{selected.phone}</p>
          <p>{selected.email}</p>

          <div className="location-buttons">
  {locations.map((loc) => (
    <button
      key={loc.name}
      onClick={() => setSelected(loc)}
      className={`location-button ${selected.name === loc.name ? "active" : ""}`}
    >
      {loc.name}
    </button>
  ))}
</div>

        </div>

        {/* Map */}
        <div className="location-map">
          <MapContainer
            center={[selected.lat, selected.lng]}
            zoom={13}
            scrollWheelZoom={false}
            className="leaflet-map"
          >
            <MapUpdater center={[selected.lat, selected.lng]} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => (
              <Marker key={loc.name} position={[loc.lat, loc.lng]}>
                <Popup>{loc.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default WhereToFindUs;
