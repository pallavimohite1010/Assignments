//write function in code  which Create a basic calculator using HTML, CSS, and JavaScript with the functionality of add, subtract, multiply and divide?
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Calculator</title>
    <style>
        .calculator {
            text-align: center;
            margin-top: 100px;
        }

        .display {
            margin-bottom: 20px;
            width: 200px;
            height: 30px;
        }

        button {
            width: 50px;
            height: 50px;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="display" readonly>
        <button onclick="addDigit('7')">7</button>
        <button onclick="addDigit('8')">8</button>
        <button onclick="addDigit('9')">9</button>
        <button onclick="performOperation('/')">/</button>
        <button onclick="addDigit('4')">4</button>
        <button onclick="addDigit('5')">5</button>
        <button onclick="addDigit('6')">6</button>
        <button onclick="performOperation('*')">*</button>
        <button onclick="addDigit('1')">1</button>
        <button onclick="addDigit('2')">2</button>
        <button onclick="addDigit('3')">3</button>
        <button onclick="performOperation('-')">-</button>
        <button onclick="addDigit('0')">0</button>
        <button onclick="performOperation('+')">+</button>
        <button onclick="calculateResult()">=</button>
    </div>

    <script>
        let operation = '';
        let operand1 = 0;
        let operand2 = null;

        function addDigit(digit) {
            let display = document.querySelector('.display');
            display.value = display.value + digit;
        }