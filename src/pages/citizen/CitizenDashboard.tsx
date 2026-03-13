import { motion } from "framer-motion";
import { Hospital, Bed, AlertTriangle, Bot, FileHeart, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { hospitals, alerts } from "@/data/mockData";

const stats = [
  { label: "Nearby Hospitals", value: "5", icon: Hospital, color: "text-healthcare-blue" },
  { label: "Available Beds", value: "89", icon: Bed, color: "text-healthcare-green" },
  { label: "Active Alerts", value: "4", icon: AlertTriangle, color: "text-healthcare-amber" },
  { label: "AI Assistant", value: "Online", icon: Bot, color: "text-healthcare-teal" },
];

const quickAccessItems = [
  { title: "Find Hospitals", url: "/citizen/hospitals", icon: Hospital, description: "Locate nearby healthcare facilities", color: "blue" },
  { title: "AI Health Assistant", url: "/citizen/assistant", icon: Bot, description: "Get instant AI health insights", color: "teal" },
  { title: "My Health Records", url: "/citizen/records", icon: FileHeart, description: "Access your medical history", color: "indigo" },
  { title: "Bed Availability", url: "/citizen/beds", icon: Bed, description: "Check real-time bed status", color: "green" },
  { title: "Emergency Alerts", url: "/citizen/alerts", icon: AlertTriangle, description: "Stay updated on health risks", color: "red" },
  { title: "Health Education", url: "/citizen/education", icon: BookOpen, description: "Learn about wellness & Ayush", color: "amber" },
];

export default function CitizenDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Welcome back, Citizen</h1>
        <p className="text-muted-foreground text-sm">Your health dashboard overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="glass-card-hover">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent">
                  <s.icon className={`h-6 w-6 ${s.color}`} />
                </div>
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
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Nearby Hospitals</CardTitle>
            <Link to="/citizen/hospitals"><Button variant="ghost" size="sm">View All</Button></Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {hospitals.slice(0, 3).map(h => (
              <div key={h.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">{h.name}</p>
                  <p className="text-xs text-muted-foreground">{h.distance} • {h.availableBeds} beds</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${h.emergencyStatus === "Available" ? "bg-healthcare-green/10 text-healthcare-green" : h.emergencyStatus === "Limited" ? "bg-healthcare-amber/10 text-healthcare-amber" : "bg-healthcare-red/10 text-healthcare-red"}`}>
                  {h.emergencyStatus}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Latest Alerts</CardTitle>
            <Link to="/citizen/alerts"><Button variant="ghost" size="sm">View All</Button></Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.slice(0, 3).map(a => (
              <div key={a.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <AlertTriangle className={`h-4 w-4 mt-0.5 shrink-0 ${a.severity === "high" ? "text-healthcare-red" : a.severity === "medium" ? "text-healthcare-amber" : "text-healthcare-green"}`} />
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
