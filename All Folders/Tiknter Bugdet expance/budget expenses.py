# Tkinter ko import karya it's libray of python and *means that is all tkinter files sari inbulit fine ko import karne ke liye kiya jata hai*
from ast import Str
from io import DEFAULT_BUFFER_SIZE
from tkinter import* 
from tkinter import ttk #combo option ke liye ese import karna padta hai
from tkinter import messagebox #mess box ko import kiya h massge ke liye




# tk ka ek object banya object ka naam kuch bhi ho sakta hai 
expan= Tk()
# titel jo bhi hame titel dena hai 
expan.title('Budget Expenses')
# icon lagane ke liye
# expan.iconbitmap('picture_compress.ico')



# Function 
def func():
    x=var.get()

    lbl.config(text=x)    #velue nikane ke liye func banaya gaya hai
    


# size of windwo
expan.maxsize(width=900,height=500)
expan.minsize(width=900,height=500)
# label,grid,place,pack
lbl=Label(expan,text='User Name',bg='red',fg='black')   #fg taxt ka coloer change krta hai and bg piche ka coloer change karta hai
# pack desktop ke appliction outomac pack ho jate hai kahi bhi place kar deta
# lbl.pack()
# grid row clome me deta hai
# lbl.grid(row=3,column=3)

lbl.place(x=10,y=10)   # place uper niche laane ke liye use karte hai 

lbl=Label(expan,text='Nothing',bg='red',fg='black') 
lbl.place(x=20,y=100)
# Entery boox
var=StringVar()

ent=Entry(expan,bd=5,textvariable=var)  #bd ki help se box accha kr sakyte hai(varibale banane ke liye txtVeribale ka use karenge)
ent.place(x=80,y=10)

# Button
btn=Button(expan,text='Submit',bg='blue',command=func)
btn.place(x=40,y=120)

# combo-box it's take maltipale option

# Option combox
var=StringVar() 
com=ttk.Combobox(expan,width=27) 
com['state']='readonly'  #eska use esliye kiya jata hai ki hame sirf read karna hai kuch likhne ka option na de
com['values']=['jan','feb','march']
com.current(0) #current option ko lagne ke liye use hota hai
com.place(x=80,y=50)  #option ke liye hai

# chack button
def func():
    print(Checkbtn1.get())
    print(Checkbtn2.get())


# Chack button (esme jese male ya femle chack karna hota h useke liye like do value ke liye)
Checkbtn1=IntVar()
Checkbtn2=IntVar()

select=Checkbutton(expan,text='Male',variable=Checkbtn1,onvalue=1,offvalue=0) #onvalue offvalue 
select.pack()
select=Checkbutton(expan,text='Female',variable=Checkbtn2,onvalue=1,offvalue=0)
select.pack()

btn=Button(expan,text="Data Get",command=func).pack()


# Radio (kisi ek value ko hile sakte hai)
def func():
    if var.get()==0:
        print('Male')
    else:
        print('Female')
   
var =IntVar()
radio=Radiobutton(expan,text='Male',value=1,variable=var).pack()
radio=Radiobutton(expan,text='Female',value=0,variable=var).pack()
btn=Button(expan,text='Sumbit',command=func).pack()


# Frame ( sfortware ko frame me karne ka )
topheader=Frame(expan)
topheader.pack()

bottom=Frame(expan)
bottom.pack(side=BOTTOM)  #side me karne ke liye
bottom.pack(side=LEFT)
label=Label(topheader,text='This is Header').pack()
label=Label(bottom,text='This is Bottom').pack()





# MrssageBox
def func():
    if var.get()=="":
        messagebox.showwarning("Warning","Empty Box")
    else:
        # messagebox.showinfo('Success',var.get())
        messagebox.askokcancel('Title','Do You Want To Exit')
        expan.destroy()
var=StringVar()
ent=Entry(expan,textvariable=var)
ent.pack()
btn=Button(expan,text='Click Me',command=func)
btn.pack()



# List -Box
def func():
    lst.delete(ANCHOR)
lst=Listbox(expan,width=27)
lst.insert(END,'Apple','Bnanana','Ect')
lst.delete(ANCHOR) #anchor ka matlb jo selc h wo hi del hoga

lst.pack()

btn=Button(expan,text='Delete',command=func).pack()

#progeress bar(jo line chalti hai)
def bar():
    import time
    prog['value']=20
    prog.update_idletasks()
    time.sleep(1)
prog=ttk.Progressbar(expan,orient=HORIZONTAL,length=100,mode='determinate')#VERTICAL

prog.pack()
btn=Button(expan,text="Start",command=bar).pack()









# ye infinte loop hai jo chalta jayega becouse of jab tak ham close na kare jab tak chalte jaye.
expan.mainloop()
