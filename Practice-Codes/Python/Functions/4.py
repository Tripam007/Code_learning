def factorial(n):
    if(n ==1 or n==0):
        return 1
    return n * factorial(n-1)

n = int(input("Enter any no. :"))
print(f"Te factorial of te no. is : {factorial(n)}")