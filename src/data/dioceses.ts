export interface PrayerGroup {
  id: string;
  name: string;
  parish: string;
  meetingDay: string;
  time: string;
  neighborhood?: string;
}

export interface Region {
  id: string;
  name: string;
  groups: PrayerGroup[];
}

export interface Diocese {
  id: string;
  name: string;
  regions: Region[];
}

export const DIOCESES: Diocese[] = [
  {
    id: 'osasco',
    name: 'Diocese de Osasco',
    regions: [
      {
        id: 'santo-antonio',
        name: 'Região Santo Antônio (Osasco Centro)',
        groups: [
          {
            id: 'gp1',
            name: 'Grupo de Oração Água Viva',
            parish: 'Catedral de Santo Antônio',
            meetingDay: 'Quarta-feira',
            time: '20:00',
            neighborhood: 'Centro'
          }
        ]
      },
      {
        id: 'bonfim',
        name: 'Região Bonfim (Osasco Norte)',
        groups: [
          {
            id: 'filhos-da-luz',
            name: 'Grupo de Oração Filhos da Luz',
            parish: 'Nossa Senhora dos Prazeres',
            meetingDay: 'Quinta-feira',
            time: '19:30',
            neighborhood: 'Rochdale'
          }
        ]
      },
      {
        id: 'sao-jose-operario',
        name: 'Região São José Operário (Osasco Sul)',
        groups: [
          {
            id: 'gp-luz-mundo',
            name: 'Grupo de Oração Luz do Mundo',
            parish: 'Santa Isabel',
            meetingDay: 'Segunda-feira',
            time: '19:30',
            neighborhood: 'Cidade das Flores'
          }
        ]
      },
      {
        id: 'barueri',
        name: 'Região Barueri',
        groups: []
      },
      {
        id: 'carapicuiba',
        name: 'Região Carapicuíba',
        groups: [
          {
            id: 'gp-agua-viva-carap',
            name: 'Grupo de Oração Água Viva',
            parish: 'Comunidade Santo Antônio',
            meetingDay: 'Sexta-feira',
            time: '19:30',
            neighborhood: 'Pq. Jandaia'
          }
        ]
      },
      {
        id: 'cotia',
        name: 'Região Cotia',
        groups: []
      },
      {
        id: 'itapevi',
        name: 'Região Itapevi',
        groups: []
      },
      {
        id: 'ibiuna',
        name: 'Região Ibiúna',
        groups: []
      },
      {
        id: 'sao-roque',
        name: 'Região São Roque',
        groups: []
      }
    ]
  }
];