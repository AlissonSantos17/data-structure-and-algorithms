let numbers = [0, 1, 2, 4, 5, 6, 7, 8, 9];

// adding a new element at the end of the array
numbers[numbers.length] = 10

// push method
numbers.push(11);
numbers.push(12, 13);

// insert a new element at the first position
Array.prototype.insertFirstPosition = function (value) {
    for(let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value
};
numbers.insertFirstPosition(-1);

// unshift method - adding number on the first position
numbers.unshift(-2)
numbers.unshift(-4, -3)

// remove the last item of the array
numbers.pop()

// remove an element from first position
numbers.pop()
console.log(numbers)