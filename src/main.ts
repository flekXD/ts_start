class Calculator {
    // Конструктор класу
    constructor(public value: number = 0) {}
  
    // Метод для додавання чисел
    addNumber(num: number): void {
      this.value += num;
    }
  
    // Метод для віднімання чисел
    subtractNumber(num: number): void {
      this.value -= num;
    }
  
    // Метод для виведення поточного значення в консоль
    displayValue(): void {
      console.log('Поточне значення калькулятора:', this.value);
    }
  }
  
  // Створення екземпляру класу Calculator
  const myCalculator = new Calculator();
  
  // Використання методів класу для виконання обчислень
  myCalculator.addNumber(5);
  myCalculator.subtractNumber(2);
  myCalculator.displayValue();

  const message: string = 'hello'
  console.log(message)

  