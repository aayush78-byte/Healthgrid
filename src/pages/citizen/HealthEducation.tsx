import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Apple, Brain } from "lucide-react";

const articles = [
  { icon: Heart, title: "Understanding Heart Health", desc: "Learn about cardiovascular health, prevention tips, and when to seek emergency care.", category: "Cardiology" },
  { icon: Apple, title: "Nutrition & Ayurvedic Diet", desc: "Discover the balance between modern nutrition science and traditional Ayurvedic dietary practices.", category: "Nutrition" },
  { icon: Brain, title: "Mental Health Awareness", desc: "Recognizing signs of stress, anxiety, and depression. Resources for mental wellness.", category: "Mental Health" },
  { icon: BookOpen, title: "Traditional Medicine Guide", desc: "Understanding NAMASTE coding and how traditional diagnoses map to modern medicine.", category: "Education" },
];

export default function HealthEducation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Health Education</h1>
        <p className="text-muted-foreground text-sm">Learn about health topics and wellness practices</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {articles.map(a => (
          <Card key={a.title} className="glass-card-hover cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent"><a.icon className="h-5 w-5 text-primary" /></div>
                <div>
                  <span className="text-xs text-muted-foreground">{a.category}</span>
                  <h3 className="font-semibold text-sm mt-0.5">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
