from tkinter import*


q = [
    "How many continents are there?",              
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"  
]

options = [
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
a = [3, 4, 1] 

answer_list=[
    ["(1) Four", "(3) Seven"],
    ["(4) Delhi", "(2) Bhopal"],
    ["(4) Agriculture","(1) Sofware Engineering"]
]
class quiz:
    def _int_(self,master):
        self .opt_selected=IntVar()
        self.qn=0
        self.correct=0
        self. ques=self.create_q(master,self.qn)
        self .opts=self.create_options(master,4)
        self. display_q(self.qn)
        self.button=Button(master,text="Back",command=self.back_btn)
        self.button.pack(side=BOTTOM)
        self .button=Button(master,text="Next",command=self.next_btn)
        self.button.pack(side=BOTTOM)
    def create_q(self,master,qn):
        w=Label(master,text=q[qn])
        w.pack(side=TOP)
        return W
    def create_options(self,master,n):
        b_val=0
        b=[]
        while b_val<n:
            btn=Radiobutton(master,text="foo",variable=self.opt_selected,value=b_val+1)
            b.append(btn)
            btn.pack(side=TOP,anchor="w")
            b_val=b_val+1
        return b
    def display_q(self,qn):
        b_val=0
        self.opt_selected.set(0)
        self.ques["text"]=q[qn]
        for op in options[qn]:
            self.opts[b_val]["text"]=op
            b_val=b_val+1
    def check_qu(self,qn):
        if self.opt_selected.get()==a[qn]:
            return True
        return False
    def print_results(self):
        print("Score",self.correct,"/",len(q))
    def back_btn(self):
        print("go back")

    def next_btn(self):
        if self.check_q(self.qn):
            print("correct")
            self.correct+=1
        else:
            print("Wrong")
        self.qn=self.qn+1
        if self.qn>=len(q):
            self.print_results()
        else:
            self.display_q(self.qn)

root=Tk()
root.geometry("500x300+500+600")
k=quiz()
# app.pack()
root.mainloop()


