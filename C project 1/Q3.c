#include <stdio.h>


int main() {
    int a, b ;

    printf(" Enter first number: ");
    scanf("%d", &a);
    printf(" Enter second number: ");
    scanf("%d", &b);
   

    float traingle =  180 - (a + b ) ;

    printf (" Third angle : %f\n", traingle );

    return 0;
}