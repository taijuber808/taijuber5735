#include <stdio.h>


int main (){

int j = 1;
int n;


printf("Enter any number :");
scanf("%d",&n);



do
{
    if ( j % 2 == 0)
    {
        printf("%d ",j);
    }
    j++;
    
} while (j <= n);









    return 0;
}