from tkinter import*
root=Tk()
# title ka use ham apne windwo ka naam dene ke liye kiya jata hai
root.title("K.B.C")

y=Label(root,text="!WECLOME TO KON BANEGA CARODPATI!",bg="sky blue",fg="black",font=("Ariel",20))
y.pack()

# font=(Ariel,16)size big karna ke liye use hota hai

# bg its use for bacguround coloer and fg use foe text coloer
x=Label(root,text="K_B_C",bg="yellow",fg="red",font=("Ariel",15))
# font=("Ariel",16)use for incriment text size


# call karne ke liye use hota hai
x.pack()

myButton=Button(root,text="Click me!",padx=30,pady=10)
myButton.pack()

# state=DISABLED button na dikhte is liye use karte hai
# agar ham koi label me text likhate hai to use .pack() call karna jaruri hota hai
root.geometry("700x600+600+500")


# instance=Button(root,text="Click me!")
# resizable Size ko fix karne ke liye use karte hai
# root.resizable(0,0)
root.mainloop()