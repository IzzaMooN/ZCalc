function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;

    // Otomatis tambahkan tanda kurung tutup jika ada 'sqrt(' yang belum ditutup
    if (expression.includes('sqrt(') && !expression.includes(')')) {
        expression += ')';
    }

    if (expression.includes('log(') && !expression.includes(')')) {
        expression += ')';
    }
    
    if (expression.includes('exp(') && !expression.includes(')')) {
        expression += ')';
    }

    if (expression.includes('log(') && !expression.includes(')')) {
        expression += ')';
    }
    
    if (expression.includes('exp(') && !expression.includes(')')) {
        expression += ')';
    }

    // Ganti 'sqrt(' dengan 'Math.sqrt('
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
    // Ganti 'exp(' dengan 'Math.exp('
    expression = expression.replace(/exp\(/g, 'Math.exp(');
    // Ganti 'log(' dengan 'Math.log10(' (logaritma basis 10)
    expression = expression.replace(/log\(/g, 'Math.log10(');

    expression = expression.replace(/x/g, '*');


    try {
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}