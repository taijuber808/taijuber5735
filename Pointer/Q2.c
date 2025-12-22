#include <stdio.h>



int main (){


int a = 10;
int *ptr;
int **pptr;


ptr=&a;
pptr=&ptr;

printf(" value is  %d\n",a);

printf(" value is  %d\n",*ptr);
printf(" value is  %d",**pptr);



    return 0;
}