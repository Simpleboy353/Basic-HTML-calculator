var expression = "";
var calc = '';
let arr = [];

function buttonUse(id) {

  switch (id) {

    case "one":
      calc = calc + "1";
      expression = expression + '1';
      document.getElementById("resultbox").value = expression;
      break;

    case "two":
      calc = calc + "2";
      expression = expression + "2";
      document.getElementById("resultbox").value = expression;
      break;

    case "three":
      calc = calc + "3";
      expression = expression + "3";
      document.getElementById("resultbox").value = expression;
      break;

    case "four":
      calc = calc + "4";
      expression = expression + "4";
      document.getElementById("resultbox").value = expression;
      break;

    case "five":
      calc = calc + "5";
      expression = expression + "5";
      document.getElementById("resultbox").value = expression;
      break;

    case "six":
      calc = calc + "6";
      expression = expression + "6";
      document.getElementById("resultbox").value = expression;
      break;

    case "seven":
      calc = calc + "7";
      expression = expression + "7";
      document.getElementById("resultbox").value = expression;
      break;

    case "eight":
      calc = calc + "8";
      expression = expression + "8";
      document.getElementById("resultbox").value = expression;
      break;

    case "nine":
      calc = calc + "9";
      expression = expression + "9";
      document.getElementById("resultbox").value = expression;
      break;

    case "zero":
      calc = calc + "0";
      expression = expression + "0";
      document.getElementById("resultbox").value = expression;
      break;

    case "division":
      calc = calc + "/";
      expression = "";
      document.getElementById("resultbox").value = expression;
      break;

    case "multiply":
      calc = calc + "*";
      expression = ""
      document.getElementById("resultbox").value = expression;
      break;

    case "addition":
      calc = calc + "+";
      expression = "";
      document.getElementById("resultbox").value = expression;
      break;

    case "subtract":
      calc = calc + "-";
      expression = "";
      document.getElementById("resultbox").value = expression;
      break;

    case "dot":
      calc = calc + ".";
      expression = expression + ".";
      document.getElementById("resultbox").value = expression;
      break;

    case "delete":
      calc = calc.substring(0, calc.length - 1);
      expression = expression.substring(0, expression.length - 1);
      document.getElementById("resultbox").value = expression;
      break;

    case "clear":
      calc = "";
      expression = "";
      document.getElementById("resultbox").value = expression;
      break;

    case "equals":
      calc = eval(calc);
      expression = calc;
      document.getElementById("resultbox").value = expression;
  }
}

