const op = ['-','+','/','x','%','.'];
function Solve(val) {
  var v = document.getElementById("result");

  var errorMessage = document.getElementById("error-message");
  var lastchar = v.value.slice(-1);
  if (op.includes(val)) {
    if (v.value === "" || op.includes(lastchar)) {
      errorMessage.textContent = "invalid input";
      return;
    } else {
      errorMessage.textContent = "";
    }
  } else {
    errorMessage.textContent = "";
  }

  v.value += val;
}
function Result() {
  var num1 = document.getElementById("result");
  var errorMessage = document.getElementById("error-message");
  var expression = num1.value;
  var lastchar = expression.slice(-1);
  var se = expression.replace(/x/g, "*");

  if (op.includes(lastchar)) {
    errorMessage.textContent = "ivalide expression : can not end with operand";
    return;
  } else {
    errorMessage.textContent = "";
  }
  try {
    var result = eval(se);
    num1.value = result;
  } catch {
    num1.value = "Error";
  }
}

function Clear() {
  var clear = document.getElementById("result");
  var errorMessage = document.getElementById("error-message");
  clear.value = "";
  errorMessage.textContent = "";
}
function Back() {
  var back = document.getElementById("result");
  var errorMessage = document.getElementById("error-message");
  back.value = back.value.slice(0, -1);
  errorMessage.textContent = "";
}
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  const key = event.key;
  const validkeys = "0123456789-+.%*/";
  if (validkeys.includes(key)) {
    var result = document.getElementById("result");
    var errorMessage = document.getElementById("error-message");
    var lastchar = result.value.slice(-1);
    if (op.includes(key)) {
        if (result.value === "" || op.includes(lastchar)) {
            errorMessage.textContent =
           "inalide input: can not have two consecutive operands";
            event.preventDefault();
            return;
      } 
      else {
        errorMessage.textContent = "";
      }
    } else {
      errorMessage.textContent = "";
    }
    Solve(key === "*" ? "x" :key);
    event.preventDefault();
  } else if (key === "Enter") {
    Result();
    event.preventDefault();
  } else if (key === "Backspace") {
    Back();
    event.preventDefault();
  } else if (key.toLocaleLowerCase() === "c") {
    Clear();
    event.preventDefault();
  }
});
