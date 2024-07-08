# 1 replace json data value -------------------------------

# import json
# from store import names

# def update_urls(json_file_path, names):
#     # Load the JSON data from the file
#     with open(json_file_path, 'r', encoding='utf-8') as file:
#         data = json.load(file)
    
#     # Check if data is a list and iterate over it to update the "url" values
#     if isinstance(data, list):
#         for i, item in enumerate(data):
#             if i < len(names):
#                 if 'url' in item:
#                     item['url'] = f"Quran/{names[i]}"
#             else:
#                 break
    
#     # Save the updated JSON data back to the file
#     with open(json_file_path, 'w', encoding='utf-8') as file:
#         json.dump(data, file, ensure_ascii=False, indent=4)
    
#     print(f"Updated URLs in {json_file_path}")

# # Example usage
# json_file_path = '../quranul-karim/src/Json/surah_info.json'  # Path to your JSON file

# update_urls(json_file_path, names)




# 2 add new item in json --------------------------

# import json
# # Open the JSON file and load the data
# with open('./surah_info.json', 'r', encoding='utf-8') as file:
#     data = json.load(file)

# # Check if data is a list
# if isinstance(data, list):
#     # Extract the "name" values
#     surah_names = [surah['name'] for surah in data]
#     print(f"Surah names: {surah_names}")
# else:
#     print("The JSON data is not a list.")
