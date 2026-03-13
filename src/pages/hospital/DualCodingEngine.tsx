import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import { dualCodingExamples } from "@/data/mockData";

export default function DualCodingEngine() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<typeof dualCodingExamples[0] | null>(null);
  const [loading, setLoading] = useState(false);

  const translate = () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const match = dualCodingExamples.find(e => e.traditional.toLowerCase() === input.trim().toLowerCase());
      setResult(match || { traditional: input, namasteCode: "AYU-GEN-999", icd11: "MJ9Y", icd11Name: "Other specified condition", confidence: 72 });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">AI Dual Coding Engine</h1>
        <p className="text-muted-foreground text-sm">Translate traditional diagnoses to NAMASTE & ICD-11 codes</p>
      </div>

      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex gap-3">
            <Input placeholder="Enter traditional diagnosis (e.g., Vishama Jwara)" value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && translate()} className="flex-1" />
            <Button onClick={translate} className="gradient-primary text-primary-foreground gap-2" disabled={loading}>
              <Zap className="h-4 w-4" /> Translate
            </Button>
          </div>

          {loading && (
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2" />
              AI processing...
            </div>
          )}

          {result && !loading && (
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-accent text-center">
                <p className="text-xs text-muted-foreground mb-1">Traditional</p>
                <p className="font-semibold">{result.traditional}</p>
              </div>
              <div className="p-4 rounded-xl bg-accent text-center">
                <p className="text-xs text-muted-foreground mb-1">NAMASTE Code</p>
                <p className="font-mono font-bold text-healthcare-teal">{result.namasteCode}</p>
              </div>
              <div className="p-4 rounded-xl bg-accent text-center">
                <p className="text-xs text-muted-foreground mb-1">ICD-11</p>
                <p className="font-mono font-bold text-healthcare-blue">{result.icd11}</p>
                <p className="text-xs text-muted-foreground">{result.icd11Name}</p>
              </div>
              <div className="sm:col-span-3 flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-healthcare-green" />
                <span>Confidence: <strong>{result.confidence}%</strong></span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader><CardTitle className="text-lg">Quick Reference</CardTitle></CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-3">
            {dualCodingExamples.map(e => (
              <div key={e.traditional} className="p-3 rounded-lg bg-muted/50 flex items-center justify-between cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => { setInput(e.traditional); }}>
                <div>
                  <p className="font-medium text-sm">{e.traditional}</p>
                  <p className="text-xs text-muted-foreground">{e.icd11Name}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
