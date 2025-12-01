#include <stdio.h>

int main() {

float c, f;

printf("The temperature in Celsius: ");
scanf("%f", &c);


f = (9.0 / 5.0 ) * c  + 32;

printf("The temperature in Fahrenheit: %0.2f\n", f);
    return 0;
}