import { hospitals } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Star, Phone } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icon in Leaflet + Vite
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function FindHospitals() {
  const center: [number, number] = [28.6139, 77.2090]; // New Delhi

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Find Hospitals</h1>
        <p className="text-muted-foreground text-sm">Discover nearby hospitals with real-time availability</p>
      </div>

      <Card className="glass-card overflow-hidden">
        <div className="h-80 w-full relative z-0">
          <MapContainer center={center} zoom={12} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hospitals.map(h => (
              <Marker key={h.id} position={[h.lat, h.lng]}>
                <Popup>
                  <div className="p-1">
                    <h3 className="font-bold text-sm mb-1">{h.name}</h3>
                    <p className="text-xs mb-1">{h.location}</p>
                    <p className="text-xs font-semibold text-primary">{h.availableBeds} beds available</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {hospitals.map(h => (
          <Card key={h.id} className="glass-card-hover">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold">{h.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{h.location}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-healthcare-amber"><Star className="h-3 w-3 fill-current" />{h.rating}</div>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Bed className="h-3 w-3" />{h.availableBeds} beds available</span>
                <span>{h.distance}</span>
              </div>
              <div className="flex gap-2 text-xs mb-4">
                <span className="px-2 py-1 rounded bg-accent">ICU: {h.beds.icu}</span>
                <span className="px-2 py-1 rounded bg-accent">General: {h.beds.general}</span>
                <span className="px-2 py-1 rounded bg-accent">Emergency: {h.beds.emergency}</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="gradient-primary text-primary-foreground flex-1">View Details</Button>
                <Button size="sm" variant="outline"><Phone className="h-3 w-3" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
