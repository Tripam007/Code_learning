class Programmer:
    company = "Microsoft"
    def int(self, name, salary, pin):
        self.name = name
        self.salary = salary
        self.pin = pin
        
p = Programmer("Harry",1200000,245987)        
print(p.name,p.salary,p.pin,p.company)
r = Programmer("Rohan",1200000,245987)        
print(r.name,r.salary,r.pin,r.company)