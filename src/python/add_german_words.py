import json
import os

# Get the correct path of the script
script_dir = os.path.dirname(os.path.abspath(__file__))  # Get the script's directory
json_file_path = os.path.join(script_dir, "updatedWords.json")  # Find JSON file in the same folder
output_file_path = os.path.join(script_dir, "updatedWords_German.json")  # Save output in same folder

# Load the JSON file
with open(json_file_path, "r", encoding="utf-8") as file:
    words_data = json.load(file)

# Dictionary of German translations
german_translations = {
    "car": "Auto",
    "carpet": "Teppich",
    "chair": "Stuhl",
    "coffee": "Kaffee",
    "computer": "Computer",
    "door": "Tür",
    "fish": "Fisch",
    "flower": "Blume",
    "family": "Familie",
    "father": "Vater",
}

# Update JSON data with German translations
for entry in words_data:
    english_word = entry.get("en", "").lower()  # Get the English word
    if english_word in german_translations:
        entry["de"] = german_translations[english_word]  # Add German translation

# Save the updated JSON file
with open(output_file_path, "w", encoding="utf-8") as file:
    json.dump(words_data, file, ensure_ascii=False, indent=4)

print(f"✅ German words added successfully! Check {output_file_path}")
