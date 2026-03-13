import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Activity, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  role: "citizen" | "hospital";
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  onSubmit: (role: "citizen" | "hospital") => void;
}

const LoginForm = ({ role, email, setEmail, password, setPassword, onSubmit }: LoginFormProps) => (
  <div className="space-y-4">
    <div className="relative">
      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Email" className="pl-10" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <div className="relative">
      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Password" type="password" className="pl-10" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <Button className="w-full gradient-primary text-primary-foreground" onClick={() => onSubmit(role)}>
      Login as {role === "citizen" ? "Citizen" : "Hospital"}
    </Button>
    <div className="rounded-lg bg-accent/50 p-3 text-xs text-muted-foreground">
      <p className="font-medium mb-1">Demo Credentials:</p>
      <p>Email: {role}@test.com</p>
      <p>Password: demo123</p>
    </div>
  </div>
);

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get("role") === "hospital" ? "hospital" : "citizen";
  const [tab, setTab] = useState<string>(defaultRole);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Fill demo credentials based on current tab
    setEmail(`${tab}@test.com`);
    setPassword("demo123");
  }, [tab]);

  const handleLogin = (role: "citizen" | "hospital") => {
    if (login(email, password, role)) {
      navigate(role === "citizen" ? "/citizen" : "/hospital");
    } else {
      toast({ title: "Invalid credentials", description: "Use the demo credentials shown below.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 healthcare-grid-bg opacity-30" />
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-4 right-4"><ThemeToggle /></div>
      <div className="relative z-10 w-full max-w-md p-8">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Activity className="h-8 w-8 text-primary" />
          <span className="font-display text-2xl font-bold gradient-text">HealthGrid</span>
        </Link>
        <div className="glass-card rounded-xl p-6">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="citizen">Citizen Login</TabsTrigger>
              <TabsTrigger value="hospital">Hospital Login</TabsTrigger>
            </TabsList>
            <TabsContent value="citizen">
              <LoginForm role="citizen" email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmit={handleLogin} />
            </TabsContent>
            <TabsContent value="hospital">
              <LoginForm role="hospital" email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmit={handleLogin} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
