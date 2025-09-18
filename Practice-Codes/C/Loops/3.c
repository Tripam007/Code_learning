#include <stdio.h>

int main(){
    for (int i = 0; i < 10; i++)
    {
        if(i == 5){
            continue;
        }
        /* code */printf("i is %d\n",i);
    }
    
    return 0;
}