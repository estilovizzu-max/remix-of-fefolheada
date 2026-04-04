import { DIOCESES } from "@/data/dioceses";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, Clock } from "lucide-react";
import { useState } from "react";

export const GroupSelector = () => {
  const [selectedDiocese, setSelectedDiocese] = useState(DIOCESES[0]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2 italic">Renovação Carismática</h2>
        <p className="text-muted-foreground">Grupos de Oração - {selectedDiocese.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedDiocese.groups.map((group) => (
          <Card key={group.id} className="hover:shadow-md transition-shadow border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2 text-primary">
                <Users className="h-5 w-5" />
                {group.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                <span>Paróquia: {group.parish}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>{group.meetingDay}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>{group.time}</span>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="w-full mt-2 gap-2">
                Ver mais detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
