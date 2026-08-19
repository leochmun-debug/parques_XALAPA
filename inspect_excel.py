import pandas as pd
file_path = "/Users/leeo_/Desktop/Oferta de parques en Xalapa/Xalapa parks design methodology/áreas_posibles_a_intervenir_municipio_2026_dataset.xlsx"
df = pd.read_excel(file_path, header=None)
for i in range(5):
    print(f"Row {i}:", list(df.iloc[i]))
