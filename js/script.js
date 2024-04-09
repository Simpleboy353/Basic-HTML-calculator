var expression = ""; // To show expression in the result box in the calculator
var calc = ''; // To calculate using js

// Adding JavaScript to the buttons
function buttonUse(id) {

  try {
    switch (id) {

      case "one":
        if (expression == "Error") expression = ""; // Create a new expression if the previous one was an error.
        calc = calc + "1";
        expression = expression + '1';
        document.getElementById("resultbox").value = expression;
        break;

      case "two":
        if (expression == "Error") expression = "";
        calc = calc + "2";
        expression = expression + "2";
        document.getElementById("resultbox").value = expression;
        break;

      case "three":
        if (expression == "Error") expression = "";
        calc = calc + "3";
        expression = expression + "3";
        document.getElementById("resultbox").value = expression;
        break;

      case "four":
        if (expression == "Error") expression = "";
        calc = calc + "4";
        expression = expression + "4";
        document.getElementById("resultbox").value = expression;
        break;

      case "five":
        if (expression == "Error") expression = "";
        calc = calc + "5";
        expression = expression + "5";
        document.getElementById("resultbox").value = expression;
        break;

      case "six":
        if (expression == "Error") expression = "";
        calc = calc + "6";
        expression = expression + "6";
        document.getElementById("resultbox").value = expression;
        break;

      case "seven":
        if (expression == "Error") expression = "";
        calc = calc + "7";
        expression = expression + "7";
        document.getElementById("resultbox").value = expression;
        break;

      case "eight":
        if (expression == "Error") expression = "";
        calc = calc + "8";
        expression = expression + "8";
        document.getElementById("resultbox").value = expression;
        break;

      case "nine":
        if (expression == "Error") expression = "";
        calc = calc + "9";
        expression = expression + "9";
        document.getElementById("resultbox").value = expression;
        break;

      case "zero":
        if (expression == "Error") expression = "";
        calc = calc + "0";
        expression = expression + "0";
        document.getElementById("resultbox").value = expression;
        break;

      case "division":
        if (expression == "Error") expression = "";
        calc = calc + "/";
        expression = "";
        document.getElementById("resultbox").value = expression;
        break;

      case "multiply":
        if (expression == "Error") expression = "";
        calc = calc + "*";
        expression = ""
        document.getElementById("resultbox").value = expression;
        break;

      case "addition":
        if (expression == "Error") expression = "";
        calc = calc + "+";
        expression = "";
        document.getElementById("resultbox").value = expression;
        break;

      case "subtract":
        if (expression == "Error") expression = "";
        calc = calc + "-";
        expression = "";
        document.getElementById("resultbox").value = expression;
        break;

      case "dot":
        if (expression == "Error") expression = "";
        if (expression.includes(".")) return; // If "dot" is already used, do nothing.
        calc = calc + ".";
        expression = expression + ".";
        document.getElementById("resultbox").value = expression;
        break;

      case "delete":
        if (calc == "" || expression == "") return; // if calc is empty or expression is empty, do nothing.
        if (expression == "Error") return; // if expression is "Error", do nothing.
        calc = calc.substring(0, calc.length - 1);
        expression = expression.substring(0, expression.length - 1);
        document.getElementById("resultbox").value = expression;
        break;

      case "clear":
        if (calc == "" && expression == "") return; // if calc is empty and expression is empty, return nothing
        calc = "";
        expression = "";
        document.getElementById("resultbox").value = expression;
        break;

      case "equals":
        calc = eval(calc); // Do the calculations
        expression = calc;
        document.getElementById("resultbox").value = expression;
    }
  } catch (err) {
    expression = "Error";
    document.getElementById("resultbox").value = expression;
    console.log(err.message);
  }
}

