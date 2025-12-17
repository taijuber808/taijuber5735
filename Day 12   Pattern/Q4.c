#include <stdio.h>


int main (){

//j = row
//i = colum
    int j , i;


for ( j = 1 ; j <= 4 ; j++)
{
    for ( i = 1; i <= j; i++)
    {
        printf("%d ",j);
    } 
    printf ("\n");
    
}



    return 0;
}