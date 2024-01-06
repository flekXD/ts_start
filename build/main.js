class Calculator {
    // Конструктор класу
    constructor(value = 0) {
        this.value = value;
    }
    // Метод для додавання чисел
    addNumber(num) {
        this.value += num;
    }
    // Метод для віднімання чисел
    subtractNumber(num) {
        this.value -= num;
    }
    // Метод для виведення поточного значення в консоль
    displayValue() {
        console.log('Поточне значення калькулятора:', this.value);
    }
}
// Створення екземпляру класу Calculator
const myCalculator = new Calculator();
// Використання методів класу для виконання обчислень
myCalculator.addNumber(5);
myCalculator.subtractNumber(2);
myCalculator.displayValue();
export {};
//# sourceMappingURL=main.js.map