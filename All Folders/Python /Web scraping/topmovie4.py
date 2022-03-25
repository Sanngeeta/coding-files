import requests
from bs4 import BeautifulSoup
import json
import pprint

def movies_details():
    url="https://www.rottentomatoes.com/m/black_panther_2018"
    api=requests.get(url)
    soup=BeautifulSoup(api.text,"html.parser")
    main_div=soup.find('ul',class_='content-meta info')
    li=main_div.find_all('li',class_='meta-row clearfix')
    dict={}
    list=[]
    for i in li:
        rating=i.find("div",class_="meta-value").get_text().strip().replace("\n",'')
        genre=i.find('div',class_='meta-label subtle').get_text()
        dict.update({genre:rating})
    list.append(dict)
    with open  ("movies_details.json","w") as k:
        json.dump(dict,k,indent=5)
    return dict
movies_details()