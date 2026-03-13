import { hospitals } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Star, Phone } from "lucide-react";

export default function FindHospitals() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Find Hospitals</h1>
        <p className="text-muted-foreground text-sm">Discover nearby hospitals with real-time availability</p>
      </div>

      {/* Map placeholder */}
      <Card className="glass-card overflow-hidden">
        <div className="h-64 bg-accent/50 flex items-center justify-center relative">
          <div className="absolute inset-0 healthcare-grid-bg opacity-20" />
          <div className="text-center z-10">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-2 animate-float" />
            <p className="text-muted-foreground text-sm">Interactive Map View</p>
            <p className="text-xs text-muted-foreground">Showing hospitals near New Delhi</p>
          </div>
          {hospitals.map((h, i) => (
            <div key={h.id} className="absolute w-3 h-3 rounded-full bg-primary animate-pulse-soft"
              style={{ top: `${20 + i * 12}%`, left: `${15 + i * 16}%` }} title={h.name} />
          ))}
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
