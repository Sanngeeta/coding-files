from tkinter import*
from tkinter import ttk,filedialog
from tkcalendar import DateEntry
import sqlite3  as db
main=Tk()

main.title('Budget Expenese')
main.maxsize(width=1000,height=900)
main.minsize(width=1000,height=900)


def sumitData():
    values=[dateEntry.get(),NameEntry.get(),titleEntry.get(),expan.get()]
    print(values)
    table.insert('','end',values=values)
    connction=db.connect("expenseTracker.db")
    con=connction.cursor()
    query='''
    '''
    con.execute(query(dateEntry.get(),NameEntry.get(),titleEntry.get(),expan.get()))
    connction.commit()




def viewExpan():
    connectionObjn = db.connect("expenseTracker.db")
    curr = connectionObjn.cursor()
    query = '''
     select * from expenses
    '''
    total='''
    select sum(expense) from expenses
    '''
    curr.execute(query)
    rows=curr.fetchall()
    curr.execute(total)
    amount=curr.fetchall()[0]
    print(rows)
    print(amount)
    
    l=Label(main,text="Date\t  Name\t  Title\t  Expense",font=('arial',15,'bold'),bg="DodgerBlue2",fg="white")
    l.grid(row=6,column=0,padx=7,pady=7)
    st=""
    for i in rows:
        for j in i:
            st+=str(j)+'\t'
        st+='\n'
    print(st)
    l=Label(main,text=st,font=('arial',12))
    l.grid(row=7,column=0,padx=7,pady=7)


dateLabel=Label(main,text="Date",font=('arial',15,'bold'),bg="green",fg="white",width=20)
dateLabel.grid(row=0,column=0,padx=7,pady=7)
dateEntry=DateEntry(main,bd=5,width=12,font=('arial',15,'bold'),)
dateEntry.grid(row=0,column=1,padx=7,pady=7,)

dateLabel=Label(main,text="Name",font=('arial',15,'bold'),bg="green",fg="white",width=20)
dateLabel.grid(row=1,column=0,padx=7,pady=7)
NameEntry=Entry(main,bd=5,textvariable='Name',font=('arial',15,'bold',))
NameEntry.grid(row=1,column=1,padx=7,pady=7)

dateLabel=Label(main,text="Title",font=('arial',15,'bold'),bg="green",fg="white",width=20)
dateLabel.grid(row=2,column=0,padx=7,pady=7)
titleEntry=Entry(main,bd=5,textvariable='Title',font=('arial',15,'bold'),width=20)
titleEntry.grid(row=2,column=1,padx=7,pady=7)



dateLabel=Label(main,text="Expance",font=('arial',15,'bold'),bg="green",fg="white",width=20)
dateLabel.grid(row=3,column=0,padx=7,pady=7)
expan=titleEntry=Entry(main,bd=5,textvariable='Expance',font=('arial',15,'bold'))
expan.grid(row=3,column=1,padx=7,pady=7)

btn=Button(main,command=sumitData,bd=10,text='Sbumit',font=('arial',15,'bold'),bg="DodgerBlue2",fg="white",width=20)
btn.grid(row=4,column=0,padx=13,pady=13)


btn=Button(main,command=viewExpan,bd=10,text='View Expenses',font=('Verdana 13 bold',15,'bold'),bg="DodgerBlue2",fg="white",width=20)
btn.grid(row=4,column=1,padx=13,pady=13)

btn=Button(main,bd=10,text='Delete',font=('Verdana 13 bold',15,'bold'),bg="DodgerBlue2",fg="white",width=20)
btn.grid(row=4,column=2,padx=13,pady=13)


# Box
list=['Date','Name','Title','Expance']
table=ttk.Treeview(main,column=list,show='headings',height=7)
for i in list:
    table.heading(i,text=i.title())
table.grid(row=5,column=0,padx=7,pady=7,columnspan=3)

main.mainloop()