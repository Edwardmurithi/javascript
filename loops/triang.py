#!/usr/bin/python3

def print_tringle(size):
    for i in range(size):
        for j in range(i):
            print("#", end="")
        print("\n")

def main():
    print("Print a triangle")
    size = int(input("Enter size: "))
    print_tringle(size)

if __name__ == "__main__":
    main()