import requests
from bs4 import BeautifulSoup
import json
from store import total_verses_en, file_names_json, surah__links

url = 'https://www.quranulkarim.com'
res = requests.get(url)

for i in range(1, 115):
    custom_index = i-1
    verses = total_verses_en[custom_index]

    if res.status_code == 200:
        soup = BeautifulSoup(res.text, 'html.parser')

        index =[]
        for i in range(1, verses+1):
            text = i
            index.append(text) 

        sura_url =[]
        link_tag = soup.find_all('a', {"class" : "chapter-card_wrapper__39-rx"})
        for link in link_tag:
            text = link.get('href')
            sura_url.append(text) 

        surah_link = f'{url}{sura_url[custom_index]}'
        req = requests.get(surah_link)

        if req.status_code == 200 :
            surah_soup = BeautifulSoup(req.text, 'html.parser')

            ayat_num = []
            catch_ayat_num = surah_soup.find_all('div', {"class" : "verse-options_id__2iOe9"})
            for i in catch_ayat_num :
                text =i.text
                ayat_num.append(text)

            bangla_text = []
            catch_bangla_text = surah_soup.find_all('div', {"class" : "verse-card_verse_text__29N5F text_trans"})
            for i in catch_bangla_text :
                text =i.text
                bangla_text.append(text)    
            
            tafceer_text = []
           
            catch_tafceer_text = surah_soup.find_all('div', {"class" : "MuiAccordionDetails-root verse-card_accordion_details__2Zvsz"})
            for i in catch_tafceer_text :
                text = i.prettify()
                tafceer_text.append(text)  


        surah_link_b = f'{surah__links[custom_index]}'
        req_b = requests.get(surah_link_b)

        if req_b.status_code == 200:
            surah_soup_b = BeautifulSoup(req_b.text, 'html.parser')
            
            arabic_text = []
            catch_arabic_text = surah_soup_b.find_all('div', {"class" : "aya_text"})
            for i in catch_arabic_text :
                text =i.text
                arabic_text.append(text)


        data = [ayat_num, arabic_text, bangla_text, tafceer_text, index]
            
        json_format = []
        for i in range(len(data[4])):
            entry = {
                "id": data[4][i],
                "verse": data[0][i],
                "arabic_text": data[1][i],
                "bangla_text": data[2][i],
                "detail_text": data[3][i],
            }
            json_format.append(entry)

        with open(file_names_json[custom_index], "w") as f:
            final = json.dumps(json_format,ensure_ascii=False, indent=4)
            f.write(final) 

# print(tafceer_text)
