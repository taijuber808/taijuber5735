#include <stdio.h>
#include <string.h>

int main()
{

    char j1[50] ;
    char j2[50] ;
    char j3[100] ;


    printf("Enter your name 1\n  ");
    scanf("%s",&j1);

        printf("Enter your name 2\n  ");
    scanf("%s",&j2);

 strcpy(j3,j1);
 strcat(j3,j2);


 printf("Full Name  is :%s",j3);
    return 0;  
}
