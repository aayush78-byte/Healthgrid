import { healthRecords } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, User, Calendar, Stethoscope } from "lucide-react";

const typeColors: Record<string, string> = {
  Diagnosis: "bg-healthcare-blue/10 text-healthcare-blue",
  Prescription: "bg-healthcare-green/10 text-healthcare-green",
  "Lab Report": "bg-healthcare-indigo/10 text-healthcare-indigo",
  Vaccination: "bg-healthcare-amber/10 text-healthcare-amber",
};

export default function HealthRecords() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">My Health Records</h1>
          <p className="text-muted-foreground text-sm">Your portable digital health history</p>
        </div>
        <Button className="gradient-primary text-primary-foreground gap-2"><Upload className="h-4 w-4" /> Upload Record</Button>
      </div>

      {/* Patient Profile */}
      <Card className="glass-card">
        <CardContent className="p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center">
            <User className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Rahul Sharma</h3>
            <p className="text-sm text-muted-foreground">ID: P001 • Age: 34 • Blood Group: B+</p>
            <p className="text-xs text-muted-foreground">Last visit: March 1, 2024</p>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="space-y-3">
        {healthRecords.map((r, i) => (
          <Card key={r.id} className="glass-card-hover">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[r.type] || "bg-muted"}`}>{r.type}</span>
                  <h3 className="font-medium text-sm">{r.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{r.date}</span>
              </div>
              <p className="text-sm text-muted-foreground ml-5 flex items-center gap-1"><Stethoscope className="h-3 w-3" />{r.doctor}</p>
              <p className="text-sm text-muted-foreground ml-5 mt-1">{r.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
