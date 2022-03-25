from bs4 import BeautifulSoup
from web_1 import scrape_movie
from Web_2 import group_by_year
import pprint
import json

scrapped=scrape_movie()
decade_arenge=group_by_year(scrapped)
def group_by_decade(movies):
    list=[]
    dict={}
    for i in movies:           #years
       module=i%10             # years ko 10 se module karne pr reminder
       decade_substract=i-module
       if decade_substract not in list:
           list.append(decade_substract)
    list.sort()
    for i in list:
        dict[i]=[]
    for i in dict:
        decade_10=i+9 # year me 9 ka addion 1950+9=1959
        for x in movies:
            if x<=decade_10 and x>=i: #1959 se 1950 tak campair kar append hoga khali dict me.
                for v in movies[x]: #hamari jo year wali key hai wo list ki form he or ham puri list ko append nhi kara sakte he eliye list pr loop chalya he.
                    dict[i].append(v)
    
                
        with open("group_by_decade.json","w") as num:
            json.dump(dict,num,indent=6)

    return dict
group_by_decade(decade_arenge)


    
