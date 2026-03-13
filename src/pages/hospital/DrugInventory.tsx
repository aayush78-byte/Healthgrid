import { drugInventory } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle } from "lucide-react";

const statusColors = {
  adequate: "bg-healthcare-green/10 text-healthcare-green",
  low: "bg-healthcare-amber/10 text-healthcare-amber",
  critical: "bg-healthcare-red/10 text-healthcare-red",
};

export default function DrugInventory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Drug Inventory</h1>
        <p className="text-muted-foreground text-sm">Monitor medicine stock levels</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="glass-card-hover">
          <CardContent className="p-5 text-center">
            <p className="text-sm text-muted-foreground">Total Items</p>
            <p className="text-3xl font-bold">{drugInventory.length}</p>
          </CardContent>
        </Card>
        <Card className="glass-card-hover">
          <CardContent className="p-5 text-center">
            <p className="text-sm text-muted-foreground">Low Stock</p>
            <p className="text-3xl font-bold text-healthcare-amber">{drugInventory.filter(d => d.status === "low").length}</p>
          </CardContent>
        </Card>
        <Card className="glass-card-hover">
          <CardContent className="p-5 text-center">
            <p className="text-sm text-muted-foreground">Critical</p>
            <p className="text-3xl font-bold text-healthcare-red">{drugInventory.filter(d => d.status === "critical").length}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medicine</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Alert</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drugInventory.map(d => (
                <TableRow key={d.id}>
                  <TableCell className="font-medium">{d.name}</TableCell>
                  <TableCell>{d.stock}</TableCell>
                  <TableCell className="text-muted-foreground">{d.unit}</TableCell>
                  <TableCell>
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[d.status as keyof typeof statusColors]}`}>{d.status}</span>
                  </TableCell>
                  <TableCell>
                    {d.stock < d.threshold && <AlertTriangle className="h-4 w-4 text-healthcare-red" />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
