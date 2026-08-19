export interface Park {
  id: string;
  name: string;
  colonia: string;
  horario: string;
  extension: number;
  escala: string;
  lat: number;
  lng: number;
  images: string[];
  uso_general?: string;
  infraestructura?: string;
  año_inauguracion?: string;
  estado_general?: string;
  ultima_rehabilitacion?: string;
}

export const parks: Park[] = [
  {
    "id": "parquemiguelhidalgo",
    "name": "PARQUE MIGUEL HIDALGO",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 29630.466,
    "escala": "Parque Urbano",
    "lat": 19.523892,
    "lng": -96.916906,
    "images": [
      "/final_photos_to_use/parque_hidalgo.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquerevolucin",
    "name": "PARQUE REVOLUCIÓN",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 6570.01,
    "escala": "Parque Urbano",
    "lat": 19.524866,
    "lng": -96.932281,
    "images": [
      "/final_photos_to_use/parque_revolucion.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueenriquelobatoburgos",
    "name": "PARQUE ENRIQUE LOBATO BURGOS",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 6200.627,
    "escala": "Parque Urbano",
    "lat": 19.525147,
    "lng": -96.928776,
    "images": [
      "/final_photos_to_use/parque_enrique_lobato_burgos.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquehidalgo",
    "name": "PARQUE HIDALGO",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 327.83,
    "escala": "Parque Urbano",
    "lat": 19.525195,
    "lng": -96.919223,
    "images": [
      "/final_photos_to_use/parque_hidalgo.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquebenitojurez",
    "name": "PARQUE BENITO JUÁREZ",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 15909.263,
    "escala": "Parque Urbano",
    "lat": 19.526831,
    "lng": -96.923836,
    "images": [
      "/final_photos_to_use/parque_juarez.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquebicentenario",
    "name": "PARQUE BICENTENARIO",
    "colonia": "CENTRO",
    "horario": "7:00 - 18:00",
    "extension": 8805.544,
    "escala": "Parque Urbano",
    "lat": 19.527828,
    "lng": -96.928316,
    "images": [
      "/final_photos_to_use/parque_bicentenario.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueelisaalarcongodos",
    "name": "PARQUE ELISA ALARCON GODOS",
    "colonia": "CENTRO",
    "horario": "7:00 - 18:00",
    "extension": 918.532,
    "escala": "Parque Urbano",
    "lat": 19.528873,
    "lng": -96.928808,
    "images": [
      "/final_photos_to_use/parque_elisa_alarcon_godos.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquemorelos",
    "name": "PARQUE MORELOS",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 1423.213,
    "escala": "Parque Urbano",
    "lat": 19.528904,
    "lng": -96.924868,
    "images": [
      "/final_photos_to_use/parque_morelos.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquenioartillero",
    "name": "PARQUE NIÑO ARTILLERO",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 523.052,
    "escala": "Parque Urbano",
    "lat": 19.529354,
    "lng": -96.915954,
    "images": [
      "/final_photos_to_use/parque_nino_artillero.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "barrioxallitic",
    "name": "BARRIO XALLITIC",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 4263.021,
    "escala": "Parque Urbano",
    "lat": 19.531429,
    "lng": -96.922167,
    "images": [
      "/final_photos_to_use/barrio_xallitic.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelostecajetes",
    "name": "PARQUE LOS TECAJETES",
    "colonia": "CENTRO",
    "horario": "7:00 - 18:00",
    "extension": 48187.76,
    "escala": "Parque Urbano",
    "lat": 19.531604,
    "lng": -96.930677,
    "images": [
      "/final_photos_to_use/tecajetes.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parque5defebrero",
    "name": "PARQUE 5 DE FEBRERO",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 1935.116,
    "escala": "Parque Urbano",
    "lat": 19.533169,
    "lng": -96.917461,
    "images": [
      "/final_photos_to_use/parque_5_de_febrero.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "elfarolito",
    "name": "EL FAROLITO",
    "colonia": "CENTRO",
    "horario": "00:00 - 23:59",
    "extension": 309.77,
    "escala": "Parque Urbano",
    "lat": 19.53952,
    "lng": -96.92607,
    "images": [
      "/final_photos_to_use/el_farolito.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "llantodelatortuga",
    "name": "LLANTO DE LA TORTUGA",
    "colonia": "MOCTEZUMA",
    "horario": "00:00 - 23:59",
    "extension": 790.42,
    "escala": "Parque Urbano",
    "lat": 19.50391,
    "lng": -96.87414,
    "images": [
      "/final_photos_to_use/LLANTO_DE_LA_TORTUGA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parque13deseptiembre",
    "name": "PARQUE 13 DE SEPTIEMBRE",
    "colonia": "ZONA UNIVERSITARIA",
    "horario": "00:00 - 23:59",
    "extension": 1229.599,
    "escala": "Parque Urbano",
    "lat": 19.515607,
    "lng": -96.919948,
    "images": [
      "/final_photos_to_use/PARQUE_13_DE_SEPTIEMBRE.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "davidrubiovelazquez",
    "name": "DAVID RUBIO VELAZQUEZ",
    "colonia": "EMILIANO ZAPATA",
    "horario": "00:00 - 23:59",
    "extension": 1566.92,
    "escala": "Parque Urbano",
    "lat": 19.517,
    "lng": -96.92367,
    "images": [
      "/final_photos_to_use/DAVID_RUBIO_VELAZQUEZ.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "lapalapa",
    "name": "LA PALAPA",
    "colonia": "CAMPO NUEVO",
    "horario": "11:00 - 19:00",
    "extension": 266.66,
    "escala": "Parque Urbano",
    "lat": 19.51711,
    "lng": -96.88744,
    "images": [
      "/final_photos_to_use/LA_PALAPA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "monteshimalaya",
    "name": "MONTES HIMALAYA",
    "colonia": "CAMPO NUEVO",
    "horario": "9:00 - 17:00",
    "extension": 39217.66,
    "escala": "Parque Urbano",
    "lat": 19.51818,
    "lng": -96.88686,
    "images": [
      "/final_photos_to_use/MONTE_MAGNO_CABALLITOS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueecolgicoelhaya",
    "name": "PARQUE ECOLÓGICO EL HAYA",
    "colonia": "BENITO JUAREZ",
    "horario": "7:00 - 18:00",
    "extension": 150823.887,
    "escala": "Parque Urbano",
    "lat": 19.520157,
    "lng": -96.943083,
    "images": [
      "/final_photos_to_use/PARQUE_ECOLÓGICO_EL HAYA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquemariaenriquetacamarillo",
    "name": "PARQUE MARIA ENRIQUETA CAMARILLO",
    "colonia": "VENUSTIANO CARRANZA",
    "horario": "00:00 - 23:59",
    "extension": 4666.76,
    "escala": "Parque Urbano",
    "lat": 19.522518,
    "lng": -96.927727,
    "images": [
      "/final_photos_to_use/PARQUE_MARIA ENRIQUETA_CAMARILLO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquegonzaloaguirrebeltran",
    "name": "PARQUE GONZALO AGUIRRE BELTRAN",
    "colonia": "ELECTRICISTAS",
    "horario": "00:00 - 23:59",
    "extension": 2774.184,
    "escala": "Parque Urbano",
    "lat": 19.522672,
    "lng": -96.912353,
    "images": [
      "/final_photos_to_use/PARQUE_GONZALO_AGUIRRE_BELTRAN.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueconsuelosurez",
    "name": "PARQUE CONSUELO SUÁREZ",
    "colonia": "BENITO JUAREZ",
    "horario": "00:00 - 23:59",
    "extension": 1054.337,
    "escala": "Parque Urbano",
    "lat": 19.523299,
    "lng": -96.934741,
    "images": [
      "/final_photos_to_use/PARQUE_CONSUELO_SUÁREZ.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "paseodeloslagos",
    "name": "PASEO DE LOS LAGOS",
    "colonia": "FELIPE CARRILLO PUERTO",
    "horario": "00:00 - 23:59",
    "extension": 109303.485,
    "escala": "Parque Urbano",
    "lat": 19.523881,
    "lng": -96.924796,
    "images": [
      "/final_photos_to_use/PASEO_DE_LOS_LAGOS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueleonardopasquel",
    "name": "PARQUE LEONARDO PASQUEL",
    "colonia": "ENSUEÑO",
    "horario": "00:00 - 23:59",
    "extension": 3269.7,
    "escala": "Parque Urbano",
    "lat": 19.525353,
    "lng": -96.913787,
    "images": [
      "/final_photos_to_use/PARQUE_LEONARDO_PASQUEL.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelaseora",
    "name": "PARQUE LA SEÑORÍA",
    "colonia": "JARDINES DE LAS ANIMAS",
    "horario": "00:00 - 23:59",
    "extension": 9083.719,
    "escala": "Parque Urbano",
    "lat": 19.52556,
    "lng": -96.882003,
    "images": [
      "/final_photos_to_use/PARQUE_LA_SEÑORÍA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquecovinacity",
    "name": "PARQUE COVINA CITY",
    "colonia": "POMONA (AV. MAESTROS VERACRUZANOS)",
    "horario": "7:00 - 18:00",
    "extension": 3442.923,
    "escala": "Parque Urbano",
    "lat": 19.528594,
    "lng": -96.906123,
    "images": [
      "/final_photos_to_use/PARQUE_COVINA_CITY.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueluisespinozagorozpe",
    "name": "PARQUE LUIS ESPINOZA GOROZPE",
    "colonia": "MODELO",
    "horario": "8:00 - 19:00",
    "extension": 1309.79,
    "escala": "Parque Urbano",
    "lat": 19.528595,
    "lng": -96.909816,
    "images": [
      "/final_photos_to_use/PARQUE_LUIS_ESPINOZA_GOROZPE.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquedelimac",
    "name": "PARQUE DEL IMAC",
    "colonia": "REPRESA DEL CARMEN",
    "horario": "00:00 - 23:59",
    "extension": 723.34,
    "escala": "Parque Urbano",
    "lat": 19.528964,
    "lng": -96.935309,
    "images": [
      "/final_photos_to_use/PARQUE_DEL_IMAC.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelaalameda",
    "name": "PARQUE LA ALAMEDA",
    "colonia": "INDECO ANIMAS",
    "horario": "00:00 - 23:59",
    "extension": 32508.117,
    "escala": "Parque Urbano",
    "lat": 19.53019,
    "lng": -96.888373,
    "images": [
      "/final_photos_to_use/PARQUE_LA_ALAMEDA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquearroyoblanco",
    "name": "PARQUE ARROYO BLANCO",
    "colonia": "3 DE MAYO",
    "horario": "9:00 - 21:00",
    "extension": 5879.245,
    "escala": "Parque Urbano",
    "lat": 19.53048,
    "lng": -96.94065,
    "images": [
      "/final_photos_to_use/PARQUE_ARROYO_BLANCO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquehundido",
    "name": "PARQUE HUNDIDO",
    "colonia": "INDECO ANIMAS",
    "horario": "00:00 - 23:59",
    "extension": 27842.123,
    "escala": "Parque Urbano",
    "lat": 19.532597,
    "lng": -96.892655,
    "images": [
      "/final_photos_to_use/PARQUE_HUNDIDO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquevanguardiarevolucionaria",
    "name": "PARQUE VANGUARDIA REVOLUCIONARIA",
    "colonia": "VANGUARDIA REVOLUCIONARIA",
    "horario": "00:00 - 23:59",
    "extension": 2560.083,
    "escala": "Parque Urbano",
    "lat": 19.532978,
    "lng": -96.901591,
    "images": [
      "/final_photos_to_use/PARQUE_VANGUARDIA_REVOLUCIONARIA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "infantilconstituyentes",
    "name": "INFANTIL CONSTITUYENTES",
    "colonia": "CONSTITUYENTES",
    "horario": "00:00 - 23:59",
    "extension": 126.38,
    "escala": "Parque Urbano",
    "lat": 19.53314,
    "lng": -96.89912,
    "images": [
      "/final_photos_to_use/INFANTIL_CONSTITUYENTES.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquesinfnica",
    "name": "PARQUE SINFÓNICA",
    "colonia": "TAMBORREL",
    "horario": "00:00 - 23:59",
    "extension": 2825.32,
    "escala": "Parque Urbano",
    "lat": 19.533721,
    "lng": -96.935456,
    "images": [
      "/final_photos_to_use/PARQUE_SINFONICA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "christianemagnanidealeman",
    "name": "CHRISTIANE MAGNANI DE ALEMAN",
    "colonia": "MIGUEL ALEMAN VALDEZ",
    "horario": "00:00 - 23:59",
    "extension": 4097.08,
    "escala": "Parque Urbano",
    "lat": 19.53437,
    "lng": -96.89385,
    "images": [
      "/final_photos_to_use/CHRISTIANE_MAGNANI_DE_ALEMAN.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquejardinesdelasflores2000",
    "name": "PARQUE JARDINES DE LAS FLORES 2000",
    "colonia": "JARDINES DE LAS FLORES 2000",
    "horario": "7:00 - 18:00",
    "extension": 3505.18,
    "escala": "Parque Urbano",
    "lat": 19.536437,
    "lng": -96.897257,
    "images": [
      "/final_photos_to_use/PARQUE_JARDINES_DE_LAS_FLORES_2000.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "heribertojaracorona",
    "name": "HERIBERTO JARA CORONA",
    "colonia": "AZTECA",
    "horario": "00:00 - 23:59",
    "extension": 1393.89,
    "escala": "Parque Urbano",
    "lat": 19.53699,
    "lng": -96.9005,
    "images": [
      "/final_photos_to_use/HERIBERTO_JARA_CORONA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelzarocardenas2",
    "name": "PARQUE LÁZARO CARDENAS 2",
    "colonia": "LAZARO CARDENAS",
    "horario": "00:00 - 23:59",
    "extension": 1407.14,
    "escala": "Parque Urbano",
    "lat": 19.53725,
    "lng": -96.902376,
    "images": [
      "/final_photos_to_use/PARQUE_LAZARO_CARDENAS_2.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquehebertocastillo",
    "name": "PARQUE HEBERTO CASTILLO",
    "colonia": "SEBASTIAN LERDO DE TEJADA",
    "horario": "00:00 - 23:59",
    "extension": 383.441,
    "escala": "Parque Urbano",
    "lat": 19.537254,
    "lng": -96.903051,
    "images": [
      "/final_photos_to_use/PARQUE_HEBERTO_CASTILLO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueecologicoconstituyentes",
    "name": "PARQUE ECOLOGICO CONSTITUYENTES",
    "colonia": "CONSTITUYENTES",
    "horario": "7:00 - 18:00",
    "extension": 5893.231,
    "escala": "Parque Urbano",
    "lat": 19.537735,
    "lng": -96.897928,
    "images": [
      "/final_photos_to_use/PARQUE_ECOLOGICO_CONSTITUYENTES.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelzarocardenas1",
    "name": "PARQUE LÁZARO CARDENAS 1",
    "colonia": "LAZARO CARDENAS",
    "horario": "00:00 - 23:59",
    "extension": 1561.447,
    "escala": "Parque Urbano",
    "lat": 19.537754,
    "lng": -96.902239,
    "images": [
      "/final_photos_to_use/PARQUE_LÁZARO_CARDENAS_1.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquecircuitotajin2",
    "name": "PARQUE CIRCUITO TAJIN 2",
    "colonia": "SEBASTIAN LERDO DE TEJADA",
    "horario": "00:00 - 23:59",
    "extension": 408.716,
    "escala": "Parque Urbano",
    "lat": 19.539156,
    "lng": -96.903648,
    "images": [
      "/final_photos_to_use/PARQUE_CIRCUITO_TAJIN_2.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquepaseodelaspalmas",
    "name": "PARQUE PASEO DE LAS PALMAS",
    "colonia": "VERACRUZ",
    "horario": "00:00 - 23:59",
    "extension": 8812.7,
    "escala": "Parque Urbano",
    "lat": 19.539591,
    "lng": -96.92971,
    "images": [
      "/final_photos_to_use/PARQUE_PASEO_DE_LAS_PALMAS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "laspalmas",
    "name": "LAS PALMAS",
    "colonia": "VERACRUZ",
    "horario": "00:00 - 23:59",
    "extension": 8700.74,
    "escala": "Parque Urbano",
    "lat": 19.53974,
    "lng": -96.92997,
    "images": [
      "/final_photos_to_use/LAS_PALMAS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueteresitapeafiel",
    "name": "PARQUE TERESITA PEÑAFIEL",
    "colonia": "VERACRUZ",
    "horario": "8:00 - 19:00",
    "extension": 475.44,
    "escala": "Parque Urbano",
    "lat": 19.539932,
    "lng": -96.932095,
    "images": [
      "/final_photos_to_use/PARQUE_TERESITA_PENAFIEL.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "lasamricas",
    "name": "LAS AMÉRICAS",
    "colonia": "JOSE CARDEL",
    "horario": "10:00 - 22:00",
    "extension": 1132.76,
    "escala": "Parque Urbano",
    "lat": 19.54045,
    "lng": -96.92133,
    "images": [
      "/final_photos_to_use/LAS_AMERICAS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquebarrancahonda",
    "name": "PARQUE BARRANCA HONDA",
    "colonia": "CERRO COLORADO",
    "horario": "7:00 - 17:00",
    "extension": 58647.177,
    "escala": "Parque Urbano",
    "lat": 19.542439,
    "lng": -96.948544,
    "images": [
      "/final_photos_to_use/PARQUE_BARRANCA_HONDA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "elavin",
    "name": "EL AVIÓN",
    "colonia": "HERON PROAL",
    "horario": "6:00 - 19:00",
    "extension": 27497.5,
    "escala": "Parque Urbano",
    "lat": 19.54317,
    "lng": -96.89867,
    "images": [
      "/final_photos_to_use/EL_AVION.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueelquiosco",
    "name": "PARQUE EL QUIOSCO",
    "colonia": "FEDERAL",
    "horario": "00:00 - 23:59",
    "extension": 973.14,
    "escala": "Parque Urbano",
    "lat": 19.54346,
    "lng": -96.91721,
    "images": [
      "/final_photos_to_use/PARQUE_EL_QUIOSCO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquejardinesdexalapa",
    "name": "PARQUE JARDINES DE XALAPA",
    "colonia": "JARDINES DE XALAPA",
    "horario": "00:00 - 23:59",
    "extension": 5563.425,
    "escala": "Parque Urbano",
    "lat": 19.543797,
    "lng": -96.906688,
    "images": [
      "/final_photos_to_use/PARQUE_JARDINES_DE_XALAPA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueadalbertotejeda",
    "name": "PARQUE ADALBERTO TEJEDA",
    "colonia": "PROGRESO",
    "horario": "00:00 - 23:59",
    "extension": 8435.506,
    "escala": "Parque Urbano",
    "lat": 19.544514,
    "lng": -96.927364,
    "images": [
      "/final_photos_to_use/PARQUE_ADALBERTO_TEJEDA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "lospescados",
    "name": "LOS PESCADOS",
    "colonia": "CASA BLANCA",
    "horario": "00:00 - 23:59",
    "extension": 682.75,
    "escala": "Parque Urbano",
    "lat": 19.54508,
    "lng": -96.89169,
    "images": [
      "/final_photos_to_use/LOS_PESCADOS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueelconejo",
    "name": "PARQUE EL CONEJO",
    "colonia": "UNIDAD Y TRABAJO",
    "horario": "00:00 - 23:59",
    "extension": 2248.24,
    "escala": "Parque Urbano",
    "lat": 19.545114,
    "lng": -96.913797,
    "images": [
      "/final_photos_to_use/PARQUE_EL_CONEJO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelaantorcha",
    "name": "PARQUE LA ANTORCHA",
    "colonia": "OBRERO CAMPESINA",
    "horario": "00:00 - 23:59",
    "extension": 550.89,
    "escala": "Parque Urbano",
    "lat": 19.545634,
    "lng": -96.934501,
    "images": [
      "/final_photos_to_use/PARQUE_LA_ANTORCHA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquecuevadelaorqudea",
    "name": "PARQUE CUEVA DE LA ORQUÍDEA",
    "colonia": "FEDERAL",
    "horario": "7:00 - 18:00",
    "extension": 3037.194,
    "escala": "Parque Urbano",
    "lat": 19.545812,
    "lng": -96.916078,
    "images": [
      "/final_photos_to_use/PARQUE_CUEVA_DE_LA_ORQUÍDEA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "ecologicoelnaranjillo",
    "name": "ECOLOGICO EL NARANJILLO",
    "colonia": "CASA BLANCA",
    "horario": "00:00 - 23:59",
    "extension": 3039.48,
    "escala": "Parque Urbano",
    "lat": 19.54621,
    "lng": -96.889,
    "images": [
      "/final_photos_to_use/ECOLOGICO_EL_NARANJILLO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueunidadelcafetal",
    "name": "PARQUE UNIDAD EL CAFETAL",
    "colonia": "ARBOLEDAS DEL SUMIDERO",
    "horario": "6:00 - 23:59",
    "extension": 4595.742,
    "escala": "Parque Urbano",
    "lat": 19.546614,
    "lng": -96.902888,
    "images": [
      "/final_photos_to_use/PARQUE_UNIDAD_EL_CAFETAL.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueecolgicomacuiltepetl",
    "name": "PARQUE ECOLÓGICO MACUILTEPETL",
    "colonia": "PROGRESO",
    "horario": "7:00 - 18:00",
    "extension": 264590.0,
    "escala": "Parque Urbano",
    "lat": 19.547095,
    "lng": -96.920377,
    "images": [
      "/final_photos_to_use/PARQUE_ECOLÓGICO_MACUILTEPETL.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquerafaelhernandezochoa",
    "name": "PARQUE RAFAEL HERNANDEZ OCHOA",
    "colonia": "OBRERO CAMPESINA",
    "horario": "8:00 - 19:00",
    "extension": 919.511,
    "escala": "Parque Urbano",
    "lat": 19.547795,
    "lng": -96.929539,
    "images": [
      "/final_photos_to_use/PARQUE_RAFAEL_HERNANDEZ_OCHOA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "deldif",
    "name": "DEL DIF",
    "colonia": "ADOLFO LOPEZ MATEOS",
    "horario": "00:00 - 23:59",
    "extension": 2115.16,
    "escala": "Parque Urbano",
    "lat": 19.54848,
    "lng": -96.93691,
    "images": [
      "/final_photos_to_use/PARQUE_DEL_DIF.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "lacatra",
    "name": "LA CATRA",
    "colonia": "FOVISSSTE",
    "horario": "00:00 - 23:59",
    "extension": 676.66,
    "escala": "Parque Urbano",
    "lat": 19.54882,
    "lng": -96.93949,
    "images": [
      "/final_photos_to_use/LA_CATRA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "fovissste",
    "name": "FOVISSSTE",
    "colonia": "FOVISSSTE",
    "horario": "00:00 - 23:59",
    "extension": 2134.22,
    "escala": "Parque Urbano",
    "lat": 19.54909,
    "lng": -96.94108,
    "images": [
      "/final_photos_to_use/FOVISSSTE.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueunidadmagisterial1",
    "name": "PARQUE UNIDAD MAGISTERIAL 1",
    "colonia": "UNIDAD MAGISTERIAL",
    "horario": "00:00 - 23:59",
    "extension": 5161.589,
    "escala": "Parque Urbano",
    "lat": 19.550531,
    "lng": -96.934252,
    "images": [
      "/final_photos_to_use/PARQUE_UNIDAD_MAGISTERIAL_1.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelaestacin",
    "name": "PARQUE LA ESTACIÓN",
    "colonia": "FERROCARRILERA",
    "horario": "00:00 - 23:59",
    "extension": 62223.719,
    "escala": "Parque Urbano",
    "lat": 19.550859,
    "lng": -96.909298,
    "images": [
      "/final_photos_to_use/PARQUE_LA_ESTACIÓN.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "montemagnocaballitos",
    "name": "MONTE MAGNO CABALLITOS",
    "colonia": "CASA BLANCA",
    "horario": "00:00 - 23:59",
    "extension": 1256.3,
    "escala": "Parque Urbano",
    "lat": 19.5509,
    "lng": -96.89405,
    "images": [
      "/final_photos_to_use/MONTE_MAGNO_CABALLITOS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueunidadmagisterial2",
    "name": "PARQUE UNIDAD MAGISTERIAL 2",
    "colonia": "UNIDAD MAGISTERIAL",
    "horario": "00:00 - 23:59",
    "extension": 4174.461,
    "escala": "Parque Urbano",
    "lat": 19.551553,
    "lng": -96.933384,
    "images": [
      "/final_photos_to_use/PARQUE_UNIDAD_MAGISTERIAL_2.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "levi",
    "name": "LEVI",
    "colonia": "SUMIDERO",
    "horario": "00:00 - 23:59",
    "extension": 935.64,
    "escala": "Parque Urbano",
    "lat": 19.55212,
    "lng": -96.89822,
    "images": [
      "/final_photos_to_use/LEVI.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parqueunidadmagisterial3",
    "name": "PARQUE UNIDAD MAGISTERIAL 3",
    "colonia": "UNIDAD MAGISTERIAL",
    "horario": "00:00 - 23:59",
    "extension": 3046.645,
    "escala": "Parque Urbano",
    "lat": 19.552124,
    "lng": -96.933263,
    "images": [
      "/final_photos_to_use/PARQUE_UNIDAD_MAGISTERIAL_3.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquecitoel98",
    "name": "PARQUECITO EL 98",
    "colonia": "UNIÓN",
    "horario": "8:00 - 21:00",
    "extension": 507.21,
    "escala": "Parque Urbano",
    "lat": 19.55243,
    "lng": -96.90229,
    "images": [
      "/final_photos_to_use/PARQUECITO_EL_98.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "enriquelozanomedrano",
    "name": "ENRIQUE LOZANO MEDRANO",
    "colonia": "MARGARITA MAZA DE JUAREZ",
    "horario": "8:00 - 21:00",
    "extension": 4617.89,
    "escala": "Parque Urbano",
    "lat": 19.55282,
    "lng": -96.90282,
    "images": [
      "/final_photos_to_use/ENRIQUE_LOZANO_MEDRANO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "marinanacional",
    "name": "MARINA NACIONAL",
    "colonia": "LOMAS DE SAN ROQUE",
    "horario": "00:00 - 23:59",
    "extension": 157826.79,
    "escala": "Parque Urbano",
    "lat": 19.55324,
    "lng": -96.93975,
    "images": [
      "/final_photos_to_use/MARINA_NACIONAL.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelospinos",
    "name": "PARQUE LOS PINOS",
    "colonia": "DEL BOSQUE FERROCARRILERO",
    "horario": "00:00 - 23:59",
    "extension": 28191.219,
    "escala": "Parque Urbano",
    "lat": 19.55365,
    "lng": -96.907742,
    "images": [
      "/final_photos_to_use/PARQUE_LOS_PINOS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquemunicipaldelcastillo",
    "name": "PARQUE MUNICIPAL DEL CASTILLO",
    "colonia": "EL CASTILLO",
    "horario": "00:00 - 23:59",
    "extension": 676.62,
    "escala": "Parque Urbano",
    "lat": 19.55468,
    "lng": -96.86401,
    "images": [
      "/final_photos_to_use/PARQUE_MUNICI_AL_DEL_CASTILLO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "elcoyol",
    "name": "EL COYOL",
    "colonia": "BUGAMBILIAS DE XALAPA",
    "horario": "7:00 - 21:00",
    "extension": 3091.82,
    "escala": "Parque Urbano",
    "lat": 19.55478,
    "lng": -96.90005,
    "images": [
      "/final_photos_to_use/EL_COYOL.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "lomasdelsumidero",
    "name": "LOMAS DEL SUMIDERO",
    "colonia": "SUMIDERO",
    "horario": "00:00 - 23:59",
    "extension": 1094.41,
    "escala": "Parque Urbano",
    "lat": 19.55691,
    "lng": -96.90043,
    "images": [
      "/final_photos_to_use/LOS_PESCADOS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "luisdonaldocolosio",
    "name": "LUIS DONALDO COLOSIO",
    "colonia": "MIRADORES DEL SUMIDERO",
    "horario": "00:00 - 23:59",
    "extension": 902.41,
    "escala": "Parque Urbano",
    "lat": 19.55803,
    "lng": -96.90094,
    "images": [
      "/final_photos_to_use/LUIS_DONALDO_COLOSIO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "quioscofernandogutierrezbarrios",
    "name": "QUIOSCO FERNANDO GUTIERREZ BARRIOS",
    "colonia": "LUZ DEL BARRIO",
    "horario": "00:00 - 23:59",
    "extension": 410.66,
    "escala": "Parque Urbano",
    "lat": 19.55811,
    "lng": -96.95379,
    "images": [
      "/final_photos_to_use/QUIOSCO_FERNANDO_GUTIERREZ_BARRIOS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "elkiosco",
    "name": "EL KIOSCO",
    "colonia": "FERROCARRILERA",
    "horario": "00:00 - 23:59",
    "extension": 1148.28,
    "escala": "Parque Urbano",
    "lat": 19.55818,
    "lng": -96.91307,
    "images": [
      "/final_photos_to_use/EL_KIOSCO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "eladoquin",
    "name": "EL ADOQUIN",
    "colonia": "RAFAEL LUCIO",
    "horario": "9:00 - 17:00",
    "extension": 10870.31,
    "escala": "Parque Urbano",
    "lat": 19.56062,
    "lng": -96.91423,
    "images": [
      "/final_photos_to_use/EL_ADOQUIN.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "genoveva",
    "name": "GENOVEVA",
    "colonia": "LOMAS DE SANTA FE",
    "horario": "00:00 - 23:59",
    "extension": 1147.69,
    "escala": "Parque Urbano",
    "lat": 19.56171,
    "lng": -96.89131,
    "images": [
      "/final_photos_to_use/GENOVEVA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "pablocasals",
    "name": "PABLO CASALS",
    "colonia": "TRONCONAL",
    "horario": "00:00 - 23:59",
    "extension": 1467.61,
    "escala": "Parque Urbano",
    "lat": 19.56455,
    "lng": -96.86297,
    "images": [
      "/final_photos_to_use/PABLO_CASALS.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelalagunilla",
    "name": "PARQUE LA LAGUNILLA",
    "colonia": "LA LAGUNILLA",
    "horario": "00:00 - 23:59",
    "extension": 8041.833,
    "escala": "Parque Urbano",
    "lat": 19.565829,
    "lng": -96.926672,
    "images": [
      "/final_photos_to_use/PARQUE_LA_LAGUNILLA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquesolidaridad",
    "name": "PARQUE SOLIDARIDAD",
    "colonia": "REVOLUCION",
    "horario": "00:00 - 23:59",
    "extension": 1008.239,
    "escala": "Parque Urbano",
    "lat": 19.569546,
    "lng": -96.920044,
    "images": [
      "/final_photos_to_use/PARQUE_SOLIDARIDAD.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquejovita",
    "name": "PARQUE JOVITA",
    "colonia": "REVOLUCION",
    "horario": "00:00 - 23:59",
    "extension": 3293.262,
    "escala": "Parque Urbano",
    "lat": 19.570519,
    "lng": -96.921051,
    "images": [
      "/final_photos_to_use/PARQUE_JOVITA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquedela21demarzo",
    "name": "PARQUE DE LA 21 DE MARZO",
    "colonia": "21 DE MARZO",
    "horario": "7:00 - 18:00",
    "extension": 5879.245,
    "escala": "Parque Urbano",
    "lat": 19.572768,
    "lng": -96.929598,
    "images": [
      "/final_photos_to_use/PARQUE_DE_LA_21_DE_MARZO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquecircuitoteodoroadehesa",
    "name": "PARQUE CIRCUITO TEODORO  A DEHESA",
    "colonia": "LUCAS MARTIN",
    "horario": "00:00 - 23:59",
    "extension": 2571.367,
    "escala": "Parque Urbano",
    "lat": 19.574942,
    "lng": -96.921512,
    "images": [
      "/final_photos_to_use/PARQUE_CIRCUITO_TEODORO _A_DEHESA.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  },
  {
    "id": "parquelinealquetzalapansedeo",
    "name": "PARQUE LINEAL QUETZALAPAN SEDEÑO",
    "colonia": "LUCAS MARTIN",
    "horario": "8:00 - 18:00",
    "extension": 130000.0,
    "escala": "Parque Urbano",
    "lat": 19.578867,
    "lng": -96.92252,
    "images": [
      "/final_photos_to_use/PARQUE_LINEAL_QUETZALAPAN_SEDEÑO.jpg"
    ],
    "uso_general": "Público",
    "infraestructura": "Básica",
    "año_inauguracion": "Desconocido",
    "estado_general": "Regular",
    "ultima_rehabilitacion": "Desconocida"
  }
];
