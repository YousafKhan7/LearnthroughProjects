var inputresult = document.getElementById("result");

function getOperators() {
  return ["-", "+", "/", "%", "*"];
}

function getnum() {
  num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return num;
}

function getDot() {
  return ".";
}

function Clear() {
  inputresult.value = "";
  inputresult.style.border = "";
  inputresult.dataset.result = "";
}

function Back() {
  inputresult.value = inputresult.value.slice(0, -1);
}

function getFirstChar() {
  return inputresult.value.charAt(0);
}

function handleInput(char) {
  var input = inputresult.value.trim();
  const operators = getOperators();
  const firstChar = getFirstChar();

  if (inputresult.dataset.result !== "") {
    input = "";
    inputresult.dataset.result = "";
  }

  if (char === getDot()) {
    if (
      input.length === 0 ||
      operators.includes(input.charAt(input.length - 1))
    ) {
      input += "0" + char;
    } else {
      let lastSegment = input.split(/[\+\-\*\/\%\(\)]/).pop();
      if (!lastSegment.includes(getDot())) {
        input += char;
      }
    }
    inputresult.value = input;
    return;
  }

  input = input.replace(/--+/g, "-");

  var lastChar = input.charAt(input.length - 1);
  if (operators.includes(lastChar)) {
    if (operators.includes(char) && char !== "-") {
      input = input.slice(0, -1) + char;
    } else {
      input += char;
    }
  } else {
    input += char;
  }

  if (input.startsWith("00")) {
    input = input.slice(1);
  }

  if (/[^0-9+\-*/%().]/.test(char)) {
    inputresult.style.border = "2px solid red";
    return;
  }

  inputresult.style.border = "";
  inputresult.value = input;
}

function Result() {
  try {
    let result = eval(inputresult.value);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid result");
    }
    inputresult.value = result;
    inputresult.style.border = "";
    inputresult.dataset.result = result;
  } catch (e) {
    inputresult.style.border = "2px solid red";
  }
}

document.querySelectorAll(".btn input").forEach(function (button) {
  button.addEventListener("click", function () {
    const value = this.value;

    if (value === "=") {
      if (inputresult.value !== inputresult.dataset.result) {
        Result();
      }
    } else if (value === "C" || value === "c") {
      Clear();
    } else if (value === "<<") {
      Back();
    } else {
      handleInput(value);
      inputresult.dataset.result = "";
    }
  });
});

document.addEventListener("keypress", function (event) {
  const key = event.key;

  if (!isNaN(key) || getOperators().includes(key) || key === getDot()) {
    handleInput(key);
    inputresult.dataset.result = "";
  } else if (key === "Enter") {
    Result();
  } else {
    inputresult.style.border = "2px solid red";
    setTimeout(() => (inputresult.style.border = ""), 2000);
  }
});
