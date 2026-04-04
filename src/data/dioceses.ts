export interface PrayerGroup {
  id: string;
  name: string;
  parish: string;
  meetingDay: string;
  time: string;
}

export interface Diocese {
  id: string;
  name: string;
  groups: PrayerGroup[];
}

export const DIOCESES: Diocese[] = [
  {
    id: 'osasco',
    name: 'Diocese de Osasco',
    groups: [
      {
        id: 'gp1',
        name: 'Grupo de Oração Água Viva',
        parish: 'Matriz de Santo Antônio',
        meetingDay: 'Quarta-feira',
        time: '20:00'
      },
      {
        id: 'gp2',
        name: 'Grupo de Oração Luz do Mundo',
        parish: 'Santa Isabel',
        meetingDay: 'Segunda-feira',
        time: '19:30'
      }
    ]
  }
];
