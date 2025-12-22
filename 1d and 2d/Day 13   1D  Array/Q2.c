#include <stdio.h>

int main() {
    int n, i;
    int a[100];
    float sum = 0, avg;

    printf("Enter array size: ");
    scanf("%d", &n);

    printf("Enter array elements:\n");
    for(i = 0; i < n; i++) {
        scanf("%d", &a[i]);
        sum = sum + a[i];
    }

    avg = sum / n;

    printf("Average of an Array: %.1f", avg);

    return 0;
}