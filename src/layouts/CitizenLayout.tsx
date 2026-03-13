import { Outlet, Link, useNavigate } from "react-router-dom";
import { Activity, LayoutDashboard, Hospital, Bot, FileHeart, Bed, AlertTriangle, BookOpen, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/citizen", icon: LayoutDashboard },
  { title: "Find Hospitals", url: "/citizen/hospitals", icon: Hospital },
  { title: "AI Health Assistant", url: "/citizen/assistant", icon: Bot },
  { title: "My Health Records", url: "/citizen/records", icon: FileHeart },
  { title: "Bed Availability", url: "/citizen/beds", icon: Bed },
  { title: "Emergency Alerts", url: "/citizen/alerts", icon: AlertTriangle },
  { title: "Health Education", url: "/citizen/education", icon: BookOpen },
];

function CitizenSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="flex flex-col h-full">
        <div className="p-4 flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary shrink-0" />
          {!collapsed && <span className="font-display font-bold gradient-text text-lg">HealthGrid</span>}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end={item.url === "/citizen"} className="hover:bg-accent/50" activeClassName="bg-accent text-accent-foreground font-medium">
                      <item.icon className="mr-2 h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto p-4">
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground" onClick={() => { logout(); navigate("/"); }}>
            <LogOut className="h-4 w-4" /> {!collapsed && "Logout"}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export default function CitizenLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <CitizenSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b border-border/50 px-4 bg-background/80 backdrop-blur-sm">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">citizen@test.com</span>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
