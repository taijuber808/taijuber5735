
#include <stdio.h>

int main(){

int y;





printf("Enter first Number :");
scanf("%d",&y);

printf("Enter second Number :");
scanf("%d",&y);


while(y >= 1){
    if(y % 400 == 0 ){
  printf("%d ",y);
    
    }
  y++;
}


    return 0;
}