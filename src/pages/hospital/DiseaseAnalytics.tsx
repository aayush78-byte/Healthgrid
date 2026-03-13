import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { diseaseData } from "@/data/mockData";
import { TrendingUp, MapPin } from "lucide-react";

export default function DiseaseAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Disease Outbreak Analytics</h1>
        <p className="text-muted-foreground text-sm">Track disease trends and outbreaks</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { disease: "Malaria", cases: 42, trend: "+14", color: "text-healthcare-red" },
          { disease: "Dengue", cases: 45, trend: "+23", color: "text-healthcare-amber" },
          { disease: "Influenza", cases: 38, trend: "-17", color: "text-healthcare-blue" },
        ].map(d => (
          <Card key={d.disease} className="glass-card-hover">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">{d.disease}</p>
              <p className="text-3xl font-bold mt-1">{d.cases}</p>
              <p className={`text-xs flex items-center gap-1 mt-1 ${d.trend.startsWith("+") ? "text-healthcare-red" : "text-healthcare-green"}`}>
                <TrendingUp className="h-3 w-3" />{d.trend}% this month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader><CardTitle className="text-lg">Disease Trend (6 Months)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={diseaseData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="malaria" fill="hsl(0, 84%, 60%)" fillOpacity={0.1} stroke="hsl(0, 84%, 60%)" strokeWidth={2} name="Malaria" />
              <Area type="monotone" dataKey="dengue" fill="hsl(38, 92%, 50%)" fillOpacity={0.1} stroke="hsl(38, 92%, 50%)" strokeWidth={2} name="Dengue" />
              <Area type="monotone" dataKey="influenza" fill="hsl(199, 89%, 48%)" fillOpacity={0.1} stroke="hsl(199, 89%, 48%)" strokeWidth={2} name="Influenza" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Heatmap placeholder */}
      <Card className="glass-card">
        <CardHeader><CardTitle className="text-lg">Geographic Heatmap</CardTitle></CardHeader>
        <CardContent>
          <div className="h-48 rounded-lg bg-accent/50 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 healthcare-grid-bg opacity-20" />
            <div className="absolute w-24 h-24 rounded-full bg-healthcare-red/20 blur-xl" style={{ top: "20%", left: "30%" }} />
            <div className="absolute w-16 h-16 rounded-full bg-healthcare-amber/20 blur-xl" style={{ top: "50%", left: "60%" }} />
            <div className="absolute w-20 h-20 rounded-full bg-healthcare-blue/15 blur-xl" style={{ top: "30%", left: "70%" }} />
            <div className="z-10 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Disease density heatmap visualization</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
