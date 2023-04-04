let string= "";
const result = document.getElementById('result');

// what we will do?
// make functions for appending numbers, operators, calculate, clearingresult, backspace;




function appendNumber(number) {
    string +=number;
    result.value=string;
}

function appendOperator(operator) {
    string += operator;
    result.value = string;
}

function calculate() {
    result.value= eval(string);
    string = result.value;
}

function clearResult() {
    string="";
    result.value=string;
}

function backspace() {
    string = string.slice(0,-1);
    result.value= string;
}


/*   ------ slice(0,-1)  -------
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The slice() Method</h2>

<p>slice() extracts a part of a string and returns the extracted part:</p>

<p id="demo"></p>

<script>
let text = "Hello world!";
let result = text.slice(0, -1);

document.getElementById("demo").innerHTML = result;
</script>

</body>
</html>

*/
