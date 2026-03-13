import { alerts } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ShieldAlert, Info } from "lucide-react";

const icons = { outbreak: ShieldAlert, capacity: AlertTriangle, advisory: Info };
const colors = { high: "border-l-healthcare-red", medium: "border-l-healthcare-amber", low: "border-l-healthcare-green" };

export default function EmergencyAlerts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Emergency Alerts</h1>
        <p className="text-muted-foreground text-sm">Stay informed about health emergencies in your area</p>
      </div>
      <div className="space-y-3">
        {alerts.map(a => {
          const Icon = icons[a.type as keyof typeof icons] || AlertTriangle;
          return (
            <Card key={a.id} className={`glass-card-hover border-l-4 ${colors[a.severity as keyof typeof colors]}`}>
              <CardContent className="p-5 flex items-start gap-4">
                <div className={`p-2 rounded-lg ${a.severity === "high" ? "bg-healthcare-red/10" : a.severity === "medium" ? "bg-healthcare-amber/10" : "bg-healthcare-green/10"}`}>
                  <Icon className={`h-5 w-5 ${a.severity === "high" ? "text-healthcare-red" : a.severity === "medium" ? "text-healthcare-amber" : "text-healthcare-green"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">{a.title}</h3>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{a.message}</p>
                  <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${a.severity === "high" ? "bg-healthcare-red/10 text-healthcare-red" : a.severity === "medium" ? "bg-healthcare-amber/10 text-healthcare-amber" : "bg-healthcare-green/10 text-healthcare-green"}`}>
                    {a.severity.toUpperCase()}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
