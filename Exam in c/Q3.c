#include <stdio.h>

int main() {
    int a[5] = {10, 20, 30, 40, 50};
    int i, sum = 0;

    printf("Reverse array: ");
    for (i = 4; i >= 0; i--) {
        printf(" %d ", a[i]);
        sum = sum + a[i];
    }

    printf("\nTotal is  = %d", sum);

    return 0;
}
