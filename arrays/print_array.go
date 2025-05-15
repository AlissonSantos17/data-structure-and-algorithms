package main

import "fmt"

func main() {
	var slice = []int{1, 2, 3, 4, 5}
	printArray(slice)
}

func printArray(arr []int) {
	for _, value := range arr {
		fmt.Printf("%d \t", value)
	}
}
