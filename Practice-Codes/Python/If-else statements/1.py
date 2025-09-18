m1 = int(input("Enter marks "))
m2 = int(input("Enter marks "))
m3 = int(input("Enter marks "))
m4 = int(input("Enter marks "))

total_percantage = (100*(m1+ m2 +m3+m4))/300

if(total_percantage >= 40 and m1>33 and m2>33 and m3>33 and m4>33):
    print("you are passed")

else:
    print("try again")    

