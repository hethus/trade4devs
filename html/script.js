function insert(num) {
    let number = document.getElementById('result').innerHTML;

    if(number == '0') {
        number = "";
    }
    document.getElementById('result').innerHTML = number + num;
}

function clean() {
    document.getElementById('result').innerHTML = '';   
}

function back() {
    const number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number.substring(0, number.length - 1);
}

function calculate() {
    const result = document.getElementById('result').innerHTML;
    if(result) {
        document.getElementById('result').innerHTML = eval(number);
    }else {
        document.getElementById('result').innerHTML = '0';
    }
}