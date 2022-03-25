from tkinter import*
root=Tk()

root.title("K.B.C")
root.geometry("700x600")

root.config(background="sky blue")

labeltext=Label(root,
text="Welcome to you KBC",
font=("comic sans MS",30,"bold"))
labeltext.pack(pady=(0,50))

myButton=Button(root,text="Start!",padx=30,pady=20)

myButton.pack()

lblinstruction=Label(root,
text="What is a capital of india?",
font=("Consolas",20),
)
lblinstruction.pack()
def sel():
   selection = "You selected the option " + str(var.get())
   label.config(text = selection)

var = IntVar()
R1 = Radiobutton(root, text="Option 1 (Goa)", variable=var, value=1,pady=30,padx=20,
                  command=sel)
R1.pack( anchor = W )

R2 = Radiobutton(root, text="Option 2 (Delhi)", variable=var, value=2,pady=30,padx=20,
                  command=sel)
R2.pack( anchor = W )

R3 = Radiobutton(root, text="Option 3 (Pune)", variable=var, value=3,pady=30,padx=20,
                  command=sel)
R3.pack( anchor = W)


label = Label(root)
label.pack()
root.mainloop()

