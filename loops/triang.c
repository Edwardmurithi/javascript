#include <stdio.h>

/* function headers*/
int prompt_size(void);
int print_triangle(int s);

/* main function */
int main(void)
{  
    printf("Print a triagle\n");
    int size = prompt_size();
    print_triangle(size);
}

int prompt_size(void)
/* function to prompt user */
{
    int size;
    printf("Enter size: ");
    scanf("%i", &size);

    return (size);
}

int print_triangle(int s)
/* function to structure the shape*/
{
    for (int i = 1; i <= s; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}