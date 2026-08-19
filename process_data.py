import pandas as pd
import json
import os
import shutil
import re
from difflib import get_close_matches

excel_path = "/Users/leeo_/Desktop/Oferta de parques en Xalapa/Xalapa parks design methodology/áreas_posibles_a_intervenir_municipio_2026_dataset.xlsx"
photos_dir = "/Users/leeo_/Desktop/Oferta de parques en Xalapa/Xalapa parks design methodology/final_photos_to_use"
public_photos_dir = "/Users/leeo_/Desktop/Oferta de parques en Xalapa/Parques xalapa next.js/public/final_photos_to_use"

os.makedirs(public_photos_dir, exist_ok=True)

df = pd.read_excel(excel_path, header=None)

# The actual headers are in row 2 (0-indexed)
headers = [str(c).strip() for c in df.iloc[2].tolist()]
df.columns = headers

# Drop the first three rows
df = df.drop([0, 1, 2])

parks_list = []
available_photos = os.listdir(photos_dir)

def normalize_name(name):
    name = str(name).lower()
    for word in ["parque", "ecologico", "ecológico", "jardín", "jardin", "barrio", "quiosco"]:
        name = name.replace(word, "")
    return re.sub(r'[^a-z0-9]', '', name)

normalized_photos = {normalize_name(p.split('.')[0]): p for p in available_photos if p.endswith('.jpg')}

for _, row in df.iterrows():
    name = str(row.get('NOMBRE DEL PARQUE Y/O JARDÍN PÚBLICO', '')).strip()
    if not name or name == 'nan':
        continue
    
    coords_raw = str(row.get('COORDENADAS', '')).strip()
    if not coords_raw or coords_raw == 'nan':
        continue

    norm_name = normalize_name(name)
    matched_photo = normalized_photos.get(norm_name)
    
    if not matched_photo:
        matches = get_close_matches(norm_name, normalized_photos.keys(), n=1, cutoff=0.5)
        if matches:
            matched_photo = normalized_photos[matches[0]]

    images = []
    if matched_photo:
        src = os.path.join(photos_dir, matched_photo)
        dst = os.path.join(public_photos_dir, matched_photo)
        if not os.path.exists(dst):
            shutil.copy2(src, dst)
        images.append(f"/final_photos_to_use/{matched_photo}")

    coords = coords_raw.split(',')
    if len(coords) == 2:
        try:
            lat = float(coords[0].strip())
            lng = float(coords[1].strip())
        except:
            lat, lng = 0.0, 0.0
    else:
        lat, lng = 0.0, 0.0

    park = {
        "id": re.sub(r'[^a-z0-9]', '', name.lower()),
        "name": name,
        "colonia": str(row.get('COLONIA', '')).strip(),
        "horario": str(row.get('HORARIO', '00:00 - 23:59')).strip(),
        "extension": float(row.get('EXTENSIÓN EN m2', 0)) if pd.notnull(row.get('EXTENSIÓN EN m2')) else 0,
        "escala": "Parque Urbano",
        "lat": lat,
        "lng": lng,
        "images": images,
        "uso_general": "Público",
        "infraestructura": "Básica",
        "año_inauguracion": "Desconocido",
        "estado_general": "Regular",
        "ultima_rehabilitacion": "Desconocida",
    }
    parks_list.append(park)

# Format the final parks.ts content
ts_content = "export interface Park {\n"
ts_content += "  id: string;\n"
ts_content += "  name: string;\n"
ts_content += "  colonia: string;\n"
ts_content += "  horario: string;\n"
ts_content += "  extension: number;\n"
ts_content += "  escala: string;\n"
ts_content += "  lat: number;\n"
ts_content += "  lng: number;\n"
ts_content += "  images: string[];\n"
ts_content += "  uso_general?: string;\n"
ts_content += "  infraestructura?: string;\n"
ts_content += "  año_inauguracion?: string;\n"
ts_content += "  estado_general?: string;\n"
ts_content += "  ultima_rehabilitacion?: string;\n"
ts_content += "}\n\n"

ts_content += "export const parks: Park[] = " + json.dumps(parks_list, indent=2, ensure_ascii=False) + ";\n"

with open('src/data/parks.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Processed {len(parks_list)} parks. Matches with photos: {sum(1 for p in parks_list if p['images'])}")
