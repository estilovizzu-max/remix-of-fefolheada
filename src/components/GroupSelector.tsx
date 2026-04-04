import { DIOCESES } from "@/data/dioceses";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const GroupSelector = () => {
  const [selectedDiocese, setSelectedDiocese] = useState(DIOCESES[0]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2 italic">Renovação Carismática</h2>
        <div className="flex items-center justify-center gap-2">
          <p className="text-muted-foreground">Grupos de Oração - </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-auto p-0 text-primary font-bold hover:bg-transparent underline underline-offset-4 decoration-primary/30">
                {selectedDiocese.name} <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-background/95 backdrop-blur-sm">
              {DIOCESES.map((diocese) => (
                <DropdownMenuItem 
                  key={diocese.id}
                  onClick={() => setSelectedDiocese(diocese)}
                  className="cursor-pointer"
                >
                  {diocese.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {selectedDiocese.groups.map((group) => (
          <Card key={group.id} className="hover:shadow-md transition-shadow border-primary/20 bg-card/50 backdrop-blur-sm group">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors">
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
              <Button variant="secondary" size="sm" className="w-full mt-2 gap-2 hover:bg-secondary/80">
                Ver mais detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
