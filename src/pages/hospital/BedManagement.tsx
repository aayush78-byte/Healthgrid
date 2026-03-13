import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bed, Minus, Plus } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { bedOccupancyData } from "@/data/mockData";

export default function BedManagement() {
  const [beds, setBeds] = useState({ icu: 12, general: 45, emergency: 8 });

  const update = (type: keyof typeof beds, delta: number) => {
    setBeds(prev => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Bed Management</h1>
        <p className="text-muted-foreground text-sm">Update and monitor bed availability</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {(["icu", "general", "emergency"] as const).map(type => (
          <Card key={type} className="glass-card-hover">
            <CardContent className="p-5 text-center">
              <Bed className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium capitalize mb-2">{type} Beds</p>
              <div className="flex items-center justify-center gap-3">
                <Button size="icon" variant="outline" onClick={() => update(type, -1)}><Minus className="h-4 w-4" /></Button>
                <span className="text-3xl font-bold w-12">{beds[type]}</span>
                <Button size="icon" variant="outline" onClick={() => update(type, 1)}><Plus className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader><CardTitle className="text-lg">Bed Occupancy Trend</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bedOccupancyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="icu" stroke="hsl(199, 89%, 48%)" strokeWidth={2} dot={{ r: 4 }} name="ICU" />
              <Line type="monotone" dataKey="general" stroke="hsl(172, 66%, 50%)" strokeWidth={2} dot={{ r: 4 }} name="General" />
              <Line type="monotone" dataKey="emergency" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={{ r: 4 }} name="Emergency" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
