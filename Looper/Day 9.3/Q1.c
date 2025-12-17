#include <stdio.h>

int main()
{

    int Score;
    int Total;

    printf("Enter Your Score : ");
    scanf("%d", &Score);

    (Score >= 90) ? printf("Your grade is A. ") : (Score >= 70) ? printf("Your grade is B. ")
                                              : (Score >= 50)   ? printf("Your grade is C. ")
                                              : (Score >= 40)   ? printf("Your grade is D.  ")
                                                                : printf("Your grade is F. ");

    Total = Score / 10;

    switch (Total)
    {
    case 10:
    case 9:
        printf("Exellent Work !");
        break;

    case 8:
    case 7:
        printf("Well Done ");

    case 6:
    case 5:
        printf("Good Job ");

    case 4:

        printf("You Passed But You could do Better  ");
 break;
    default:
        printf("Sorry You Failed "); 
        break;
    }

    if (Score >= 40)
    {
        printf("You are Eligible for the next level .");
    }
    else
    {
        printf("Please try next time");
    }

    return 0;
}