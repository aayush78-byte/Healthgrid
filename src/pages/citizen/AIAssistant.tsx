import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User } from "lucide-react";

const mockResponses: Record<string, string> = {
  "I have fever and headache": "Based on your symptoms of **fever and headache**, this could indicate:\n\n1. **Viral Fever** (Jwara) - Most common cause\n2. **Influenza** - If accompanied by body aches\n3. **Dengue** - If in endemic area with high fever\n\n**Recommended Actions:**\n- Rest and stay hydrated\n- Take Paracetamol 500mg for fever\n- Monitor temperature regularly\n- Visit a doctor if fever persists beyond 3 days\n\n*Traditional approach: Tulsi (Holy Basil) tea with ginger may help.*",
  "Explain Vishama Jwara": "**Vishama Jwara** (विषम ज्वर) is an Ayurvedic term:\n\n**NAMASTE Code:** AYU-FEV-102\n**ICD-11 Equivalent:** 1A40 (Malaria)\n\nIt refers to an **irregular or intermittent fever** pattern, classically associated with malarial fevers in Ayurvedic texts.\n\n**Characteristics:**\n- Irregular fever cycles\n- Chills followed by high temperature\n- Sweating phase\n\n**Traditional Treatment:** Combination of Sudarshana Churna and modern antimalarials.",
  "What hospitals near me have beds?": "**Nearby Hospitals with Available Beds:**\n\n1. 🏥 **City Hospital** - 23 beds (2.3 km)\n2. 🏥 **AIIMS Delhi** - 41 beds (5.1 km)\n3. 🏥 **Apollo Healthcare** - 12 beds (3.7 km)\n4. 🏥 **Rural Health Center** - 8 beds (12.5 km)\n\n⚠️ **Max Super Speciality** has only 5 beds remaining (Critical).\n\nWould you like me to help you book a bed?",
};

interface Message { role: "user" | "assistant"; content: string }

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your AI Health Assistant. I can help with symptoms, traditional medicine queries, and hospital information. Try asking me something!" }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setTimeout(() => {
      const response = mockResponses[userMsg] || "I understand your concern. Based on my analysis, I'd recommend consulting a healthcare professional for a thorough evaluation. Would you like me to find nearby hospitals with available appointments?";
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 800);
  };

  const suggestions = ["I have fever and headache", "Explain Vishama Jwara", "What hospitals near me have beds?"];

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-4">
        <h1 className="font-display text-2xl font-bold">AI Health Assistant</h1>
        <p className="text-muted-foreground text-sm">Get instant health guidance powered by AI</p>
      </div>

      <Card className="glass-card flex-1 flex flex-col overflow-hidden">
        <CardContent className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}>
              {m.role === "assistant" && (
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              <div className={`max-w-[75%] rounded-xl p-3 text-sm whitespace-pre-line ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                {m.content}
              </div>
              {m.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </CardContent>

        <div className="border-t border-border/50 p-4">
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map(s => (
                <Button key={s} variant="outline" size="sm" className="text-xs" onClick={() => { setInput(s); }}>
                  {s}
                </Button>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <Input placeholder="Ask about symptoms, medicine, hospitals..." value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()} className="flex-1" />
            <Button onClick={send} className="gradient-primary text-primary-foreground"><Send className="h-4 w-4" /></Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
