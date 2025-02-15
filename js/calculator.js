document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('input[type="button"]');
  const display = document.querySelector("#display");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const operators = ["+", "-", "*", "/"];
      const lastChar = display.value.slice(-1);
      const data = button.value;
      if (data === "AC") {
        display.value = "";
      } else if (data === "DE") {
        display.value = display.value.slice(0, -1);
      } else if (data === "=") {
        calculateResult();
      }else if(!isNaN(data)){
        appendNumber(data);
      }
      else if(data === '.'){
        if(!display.value.includes(data)){
          appendNumber(data)
        }
      }
      else if(operators.includes(data)){
        if(!operators.includes(lastChar)){
          display.value += data
        }
      }

    });
  });
});


const appendNumber = (val) => {
  display.value += val;
};

const calculateResult = () => {
  try {
    if(display.value.trim() !== ''){
      display.value = eval(display.value);
    }
  } catch (err) {
    display.value += err;
  }
};


document.addEventListener('keyup', (e) => {
  const target = e.key;
  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/", "."];

  if(!isNaN(target)){
    appendNumber(target)
  }
  else if(operators.includes(target)){
      if(!operators.includes(lastChar)){
        appendNumber(target)
      }
  }
  else if(target === 'Enter'){
    calculateResult()
  }else if(target === 'Backspace'){
    display.value = display.value.slice(0, -1)
  }
  else if(target === 'Escape'){
    display.value = ''
  }
 if(e.code === 'Space'){
  display.value =  display.value.trim()
}
})

