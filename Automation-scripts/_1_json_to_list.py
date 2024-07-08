import json

with open('../quranul-karim/src/Json/surah_info.json', "r",  encoding='utf-8') as file :
    data = json.load(file)

# Extract 'number' fields into a list
number_list = [item['means'] for item in data]

# Print the list
print(number_list)
