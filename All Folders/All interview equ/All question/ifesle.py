day=int(input("ENTER THE DATE : "))

month=int(input("ENTER THE MONTH : "))

year=int(input("ENTER THE YEAR : "))

if ((year % 4 == 0) and (year % 100!= 0)) or (year%400 == 0):
    if month==2:
        days=29
    elif month==1 or month==3 or month==5 or month==7 or month==10 or month==12:
        days=31
    else:
        days=30
else:
    if month==2:
        days=28
    elif month==1 or month==3 or month==5 or month==7 or month==10 or month==12:
        days=31
    else:
        days=30
if day==31 and day==12:
    day=1
    month=1
    year=year+1
elif days-day==0:
    month=month+1
    day=1
else:
    day=day+1
print("NEXT DAY IS : ",day,"/",month,"/",year)


import datetime 
    
# using now() to get current time 
current_time = datetime.datetime.now() 
    
# Printing value of now. 
print ("Time now at greenwich meridian is : "
                                    , end = "") 
print (current_time) 

