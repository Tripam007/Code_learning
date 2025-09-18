try:
    a = int(input("Hey,Enter  a no.: "))
    print (a)


except Exception as e:
    print(e)  


finally:
    print("Hey I am inside of finally")