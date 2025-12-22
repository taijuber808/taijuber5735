#include <stdio.h>

int main() {
    int n, i;
    int a[100], b[100], c[100];

    printf("Enter array size: ");
    scanf("%d", &n);

    printf("Enter array A's elements:\n");
    for(i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }

    printf("Enter array B's elements:\n");
    for(i = 0; i < n; i++) {
        scanf("%d", &b[i]);
    }

    for(i = 0; i < n; i++) {
        c[i] = a[i] + b[i];
    }

    printf("Array C is: ");
    for(i = 0; i < n; i++) {
        printf("%d ", c[i]);
    }

    return 0;
}