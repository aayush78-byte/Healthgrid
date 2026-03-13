import { motion } from "framer-motion";
import { Users, Bed, AlertTriangle, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { bedOccupancyData, alerts } from "@/data/mockData";

const stats = [
  { label: "Patients Today", value: "127", icon: Users, color: "text-healthcare-blue" },
  { label: "Available Beds", value: "23", icon: Bed, color: "text-healthcare-green" },
  { label: "Emergency Capacity", value: "62%", icon: AlertTriangle, color: "text-healthcare-amber" },
  { label: "Disease Alerts", value: "4", icon: ShieldAlert, color: "text-healthcare-red" },
];

export default function HospitalDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Hospital Dashboard</h1>
        <p className="text-muted-foreground text-sm">City Hospital — Overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="glass-card-hover">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent"><s.icon className={`h-6 w-6 ${s.color}`} /></div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="text-2xl font-bold">{s.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader><CardTitle className="text-lg">Bed Occupancy Today</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={bedOccupancyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="icu" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} name="ICU" />
                <Bar dataKey="general" fill="hsl(172, 66%, 50%)" radius={[4, 4, 0, 0]} name="General" />
                <Bar dataKey="emergency" fill="hsl(38, 92%, 50%)" radius={[4, 4, 0, 0]} name="Emergency" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader><CardTitle className="text-lg">Active Alerts</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {alerts.map(a => (
              <div key={a.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <AlertTriangle className={`h-4 w-4 mt-0.5 shrink-0 ${a.severity === "high" ? "text-healthcare-red" : "text-healthcare-amber"}`} />
                <div>
                  <p className="font-medium text-sm">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.message}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
