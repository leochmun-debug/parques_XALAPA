export interface Park {
  name: string;
  colonia: string;
  horario: string;
  extension: number;
  escala: string;
  lat: number;
  lng: number;
  image: string;
  uso_general?: string;
  infraestructura?: string;
  año_inauguracion?: string;
  estado_general?: string;
  ultima_rehabilitacion?: string;
}

const defaultFields = {
  uso_general: "Información no disponible",
  infraestructura: "Información no disponible",
  año_inauguracion: "Desconocido",
  estado_general: "Sin evaluación reciente",
  ultima_rehabilitacion: "No registrada"
};

export const parks: Park[] = [
  {
    name: "PARQUE REVOLUCIÓN",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 6570.01,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.524866,
    lng: -96.932281,
    image: "/final_photos_to_use/parque_revolucion.jpg",
    ...defaultFields
  },
  {
    name: "PARQUE ENRIQUE LOBATO BURGOS",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 6200.627,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.525147,
    lng: -96.928776,
    image: "/final_photos_to_use/parque_enrique_lobato_burgos.jpg",
    ...defaultFields
  },
  {
    name: "PARQUE HIDALGO",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 327.83,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.525195,
    lng: -96.919223,
    image: "/final_photos_to_use/parque_hidalgo.jpg",
    ...defaultFields
  },
  {
    name: "PARQUE BENITO JUÁREZ",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 15909.263,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.526831,
    lng: -96.923836,
    image: "/final_photos_to_use/parque_juarez.jpg",
    ...defaultFields
  },
  {
    name: "PARQUE BICENTENARIO",
    colonia: "CENTRO",
    horario: "7:00 - 18:00",
    extension: 8805.544,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.527828,
    lng: -96.928316,
    image: "/final_photos_to_use/parque_bicentenario.jpg",
    ...defaultFields
  },
  {
    name: "PARQUE ELISA ALARCON GODOS",
    colonia: "CENTRO",
    horario: "7:00 - 18:00",
    extension: 918.532,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.528873,
    lng: -96.928808,
    image: "/final_photos_to_use/parque_elisa_alarcon_godos.jpg",
    ...defaultFields
  },
  {
    name: "PARQUE MORELOS",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 1423.213,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.528904,
    lng: -96.924868,
    image: "/final_photos_to_use/parque_morelos.jpg",
    ...defaultFields
  },
  {
    name: "PARQUE NIÑO ARTILLERO",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 523.052,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.529354,
    lng: -96.915954,
    image: "/final_photos_to_use/parque_nino_artillero.jpg",
    ...defaultFields
  },
  {
    name: "BARRIO XALLITIC",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 4263.021,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.531429,
    lng: -96.922167,
    image: "/final_photos_to_use/barrio_xallitic.jpg",
    ...defaultFields
  },
  {
    name: "PARQUE 5 DE FEBRERO",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 1935.116,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.533169,
    lng: -96.917461,
    image: "/final_photos_to_use/parque_5_de_febrero.jpg",
    ...defaultFields
  },
  {
    name: "EL FAROLITO",
    colonia: "CENTRO",
    horario: "00:00 - 23:59",
    extension: 309.77,
    escala: "Parque Urbano / De Bolsillo",
    lat: 19.53952,
    lng: -96.92607,
    image: "/final_photos_to_use/el_farolito.jpg",
    ...defaultFields
  }
];
