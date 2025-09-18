class Employee:
    name = "Harry"
    language = "py"
    salary = 120000


    def getInfo(self):
        print(f"Te language is {self.language} . Te salary is {self.salary} ")



    def greet(self)        :
        print("Good morning")


harry  = Employee()
# print(harry.name,harry.language)
harry.getInfo()
harry.greet()
