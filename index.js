let diplaySmall = document.querySelector(".display-sm");
let diplayLarge = document.querySelector(".display-lg");
let diplayTemp = document.querySelector(".display-temp");
let operations = document.querySelectorAll(".operation");
let numbers = document.querySelectorAll(".number");
let equal = document.querySelector(".equal");
let allClear = document.querySelector(".all-clear");
let clearLastEntity = document.querySelector(".clear-last-entity");

let disNumberSm = "";
let disNumberLg = "";
let result = null;
let lastOperation = "";
let haveDot = false;
let initialDisplay = 0;

// Numbers
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    disNumberLg += e.target.innerText;
    diplayLarge.innerText = disNumberLg;
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!disNumberLg) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (disNumberSm && disNumberLg && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(disNumberLg);
    }
    lastOperation = operationName;
    clearVariable(operationName);
    console.log(result);
  });
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9"
  ) {
    clickNumbers(e.key);
  } else if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "/" ||
    e.key === "*" ||
    e.key === "%"
  ) {
    clickOperations(e.key);
  } else if (e.key === "=" || e.key === "Enter") {
    clickEqual(e.key);
  }
});

const clickEqual = (key) => {
  equal.click();
};

const clickOperations = (key) => {
  operations.forEach((btn) => {
    if (btn.innerText === key) {
      btn.click();
    }
  });
};

const clickNumbers = (key) => {
  numbers.forEach((btn) => {
    if (btn.innerText === key) {
      btn.click();
    }
  });
};

clearLastEntity.addEventListener("click", (e) => {
  diplayLarge.innerText = "";
  disNumberLg = "";
});

allClear.addEventListener("click", (e) => {
  diplayLarge.innerText = initialDisplay;
  diplaySmall.innerText = initialDisplay;
  diplayTemp.innerText = initialDisplay;
  disNumberLg = "";
  disNumberSm = "";
  result = "";
});

equal.addEventListener("click", (e) => {
  if (!disNumberLg || !disNumberSm) return;
  haveDot = false;
  mathOperation();
  clearVariable();
  diplayLarge.innerText = result;
  diplaySmall.innerText = "";
  diplayTemp.innerText = "";
  disNumberLg = result;
  disNumberSm = "";
});

const mathOperation = () => {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(disNumberLg);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(disNumberLg);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(disNumberLg);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(disNumberLg);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(disNumberLg);
  }
};

const clearVariable = (name = "") => {
  disNumberSm += disNumberLg + " " + name + " ";
  diplaySmall.innerText = disNumberSm;
  diplayLarge.innerText = "";
  disNumberLg = "";
  diplayTemp.innerText = result;
};
