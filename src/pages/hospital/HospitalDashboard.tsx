import { motion } from "framer-motion";
import { Users, Bed, AlertTriangle, ShieldAlert, BarChart3, Pill, ArrowLeftRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { bedOccupancyData, alerts } from "@/data/mockData";
import { Link } from "react-router-dom";

const stats = [
  { label: "Patients Today", value: "127", icon: Users, color: "text-healthcare-blue" },
  { label: "Available Beds", value: "23", icon: Bed, color: "text-healthcare-green" },
  { label: "Emergency Capacity", value: "62%", icon: AlertTriangle, color: "text-healthcare-amber" },
  { label: "Disease Alerts", value: "4", icon: ShieldAlert, color: "text-healthcare-red" },
];

const quickAccessItems = [
  { title: "Patient Records", url: "/hospital/patients", icon: Users, description: "Manage patient history", color: "blue" },
  { title: "Bed Management", url: "/hospital/beds", icon: Bed, description: "Track real-time ward status", color: "green" },
  { title: "Disease Analytics", url: "/hospital/analytics", icon: BarChart3, description: "Analyze health trends", color: "indigo" },
  { title: "Drug Inventory", url: "/hospital/drugs", icon: Pill, description: "Monitor medication stock", color: "teal" },
  { title: "Medicinal Code Conversion Engine", url: "/hospital/coding", icon: ArrowLeftRight, description: "Map codes (Ayush & ICD-11)", color: "purple" },
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

      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickAccessItems.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.05 }}>
              <Link to={item.url}>
                <Card className="glass-card-hover h-full">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-healthcare-${item.color}/10`}>
                      <item.icon className={`h-6 w-6 text-healthcare-${item.color}`} />
                    </div>
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
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
