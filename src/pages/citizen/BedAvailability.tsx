import { hospitals } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed } from "lucide-react";

export default function BedAvailability() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Bed Availability</h1>
        <p className="text-muted-foreground text-sm">Real-time bed status across hospitals</p>
      </div>

      <div className="grid gap-4">
        {hospitals.map(h => (
          <Card key={h.id} className="glass-card-hover">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{h.name}</h3>
                  <p className="text-xs text-muted-foreground">{h.location}</p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${h.emergencyStatus === "Available" ? "bg-healthcare-green/10 text-healthcare-green" : h.emergencyStatus === "Limited" ? "bg-healthcare-amber/10 text-healthcare-amber" : "bg-healthcare-red/10 text-healthcare-red"}`}>
                  {h.emergencyStatus}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "ICU", count: h.beds.icu, total: h.beds.icu + 5 },
                  { label: "General", count: h.beds.general, total: h.beds.general + 15 },
                  { label: "Emergency", count: h.beds.emergency, total: h.beds.emergency + 3 },
                ].map(bed => {
                  const pct = (bed.count / bed.total) * 100;
                  const color = pct > 60 ? "bg-healthcare-green" : pct > 30 ? "bg-healthcare-amber" : "bg-healthcare-red";
                  return (
                    <div key={bed.label} className="text-center p-3 rounded-lg bg-muted/50">
                      <Bed className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">{bed.label}</p>
                      <p className="text-lg font-bold">{bed.count}</p>
                      <div className="w-full h-1.5 rounded-full bg-muted mt-1">
                        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
