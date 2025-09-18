#include <stdio.h>
#include <string.h>

int main()
{
    FILE *fptr;
    int num = 5;
    fptr = fopen("table.txt","w");

    for (int i = 0; i < 10; i++)
    {
        fprintf(fptr, "%d", num*(i+1));
        fprintf(fptr, "%c", '\n');
    }
    return 0;
}
    