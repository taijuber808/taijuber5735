#include <stdio.h>



int main() {
    int base;
    int hra;
    int da;
    int ta;

    printf(" Base salary: ");
    scanf("%d", &base);

    
    printf(" HRA : ");
    scanf("%d", &hra);


    printf(" DA : ");
    scanf("%d", &da);

    printf(" TA : ");
    scanf("%d", &ta);


    float salary  = base +  (base *hra/100) + ( base * da/100) +  ( base * ta/100);


    printf(" Gross Salary: %0.2f\n",salary );

    return 0;
}