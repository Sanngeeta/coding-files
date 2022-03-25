import requests
from bs4 import BeautifulSoup
from topmovie1 import sracp_movie
import json
import pprint
data=sracp_movie()
def get_movie_list_details(movies):
    movie_list=[]
    k=0
    while k<len(movies):
        url2="https://www.rottentomatoes.com/top/bestofrt/top_100_action__adventure_movies/"
        url=[k][url2]
        api=requests.get(url)
        soup=BeautifulSoup(api.text,"html.parser")
        main_div=soup.find('table',class_='table')
        li=main_div.find_all('tr')
        k=k+1
        print(li)
       
        dict={}
      
        for i in li:
            rating=i.find("div",class_="meta-value").get_text().strip().replace("\n",'')
            genre=i.find('div',class_='meta-label subtle').get_text()
            dict.update({genre:rating})
        movie_list.append(dict)
        with open  ("MOVIES.json","w") as k:
            json.dump(dict,k,indent=5)
        return dict
get_movie_list_details(data)