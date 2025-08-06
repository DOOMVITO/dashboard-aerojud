import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const ClaimsViewer = () => {
  const [claims, setClaims] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/claim/all")
      .then((res) => res.json())
      .then((data) => setClaims(data))
      .catch((err) => console.error("Erro ao carregar dados:", err));
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Reclamações Recebidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="max-h-[70vh]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nº Voo</TableHead>
                    <TableHead>Companhia</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Problema</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Enviado em</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {claims.map((claim) => (
                    <TableRow key={claim.id}>
                      <TableCell>{claim.flightNumber}</TableCell>
                      <TableCell>{claim.airline}</TableCell>
                      <TableCell>{claim.departureDate}</TableCell>
                      <TableCell>
                        {claim.issue.split(",").map((i: string) => (
                          <Badge key={i.trim()} variant="outline" className="mr-1">
                            {i.trim()}
                          </Badge>
                        ))}
                      </TableCell>
                      <TableCell>{claim.name}</TableCell>
                      <TableCell>{claim.email}</TableCell>
                      <TableCell>{claim.phone}</TableCell>
                      <TableCell>{new Date(claim.created_at).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClaimsViewer;
