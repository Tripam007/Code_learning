#include <stdio.h>

int main(){
    int marks[] = {12,45,89,55};
    int* ptr = marks;  //Same as int*ptr
    for (int i = 0; i < 4; i++)
    {
        printf("The marks at index %d is %d\n",i , *ptr);
        ptr++;
    }
    



    return 0;
}