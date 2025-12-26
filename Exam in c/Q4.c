#include <stdio.h>

int main() {
    int a[5] = {1, 2, 3, 4, 5};
    int i;
    int *p = a;

    for (i = 0; i < 5; i++) {
        printf("Total   %d = %d\n", *(p + i), (*(p + i)) * (*(p + i)) * (*(p + i)));
    }

    return 0;
}
