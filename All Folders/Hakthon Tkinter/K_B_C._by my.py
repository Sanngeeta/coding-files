from tkinter import*
import json

root=Tk()

# root.title("!WELCOME TO KON BANEGA CARODPATI!")

title = Label(root, text="!WELCOME TO KON BANEGA CARODPATI!",
width=50, bg="green",fg="white", font=("ariel", 20, "bold"))

# title.place(x=0, y=2)
root.config(bg="white")
leftframe=Frame(root)
y=Label(root,text="What is capital of india",bg="sky blue",fg="black",font=("Ariel",20))
y.pack()
a=Button(root,text="[A] One ",padx=30,pady=10)
a.pack()
b=Button(root,text="[B] Two ",padx=30,pady=10)
b.pack()
c=Button(root,text="[C] Seven ",padx=30,pady=10)
c.pack()
d=Button(root,text="[D] Six ",padx=30,pady=10)
d.pack()


root.geometry("800x450")


def buttons(self):
        next_button = Button(root, text="Next",command=self.next_btn,
        width=10,bg="blue",fg="white",font=("ariel",16,"bold"))
        next_button.place(x=350,y=380)
        quit_button = Button(root, text="Quit", command=root.destroy,
        width=5,bg="black", fg="white",font=("ariel",16," bold"))
        quit_button.place(x=700,y=50)
  

root.mainloop()

# topFrame=Frame(leftframe)
# topFrame.grid()    


# centerFrame=Frame(leftframe)
# centerFrame.grid(row=1,column=0)


# bottomFrame=Frame(leftframe)
# bottomFrame.grid(row=2,column=0)


# # rightframe=Frame(root)
# # rightframe.grid(row=0,column=1)

# # lifeline=Button(topFrame)
# # lifeline.grid(row=0,column=0)

# # questionArea=Text(bottomFrame)
# # questionArea.place(x=70,y=10)
# # questionArea.insert(END,question_list[0])


# # root.geometry("1270x652+600+500")
# # root.mainloop()



# # # x=Label(root,text="What is a capital of india?",bg="yellow",fg="red",font=("Ariel",15))
# # # x.pack()
# # # myButton1=Button(root,text="(A)  One",padx=40,pady=10)
# # # myButton1.pack()
# # # myButton2=Button(root,text="(B)  Four",padx=40,pady=10)
# # # myButton2.pack()
# # # myButton3=Button(root,text="(C)  Seven",padx=40,pady=10)
# # # myButton3.pack()
# # # myButton4=Button(root,text="(D)  Three",padx=40,pady=10)
# # # myButton4.pack()


