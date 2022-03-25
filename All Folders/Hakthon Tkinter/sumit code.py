# from tkinter import *
# from tkinter import messagebox
  
     
# # object of TK()
# main = Tk()
 
# # function to use the
# # askquestion() function
# def Submit():
#     messagebox.askquestion("Form",
#                            "Do you want to Submit")
     
# # setting geometry of window
# # instance
# main.geometry("100x100")
 
# # creating Window
# B1 = Button(main, text = "Submit", command = Submit)
 
# # Button positioning
# B1.pack()  
 
# # infinte loop till close
# main.mainloop() 





import tkinter as tk

class Application(tk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.master = master
        self.pack()
        self.create_widgets()

    def create_widgets(self):
        self.hi_there = tk.Button(self)
        self.hi_there["text"] = "Hello World\n(click me)"
        self.hi_there["command"] = self.say_hi
        self.hi_there.pack(side="top")

        self.quit = tk.Button(self, text="QUIT", fg="red",
                              command=self.master.destroy)
        self.quit.pack(side="bottom")

    def say_hi(self):
        print("hi there, everyone!")

root = tk.Tk()
app = Application(master=root)
app.mainloop()
