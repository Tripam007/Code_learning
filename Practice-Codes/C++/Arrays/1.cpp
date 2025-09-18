#include <iostream>
using namespace std;

int main()
{
    // int arr[3] = {1,3,5};
    // cout<<arr[2];
    int arr2a[2][3] = {
        {1, 5, 6},
        {4, 5, 2}};

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << "The value at " << i << ", " << j << " is " << arr2a[i][j] << endl;
        }
    }
    return 0;
}