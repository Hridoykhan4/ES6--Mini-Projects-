/* const darkTag = document.getElementsByTagName("html")[0];
darkTag.setAttribute("data-theme", "light");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("input[type='button']");

  const display = document.getElementById("display");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;

      if (value === "AC") {
        display.value = "";
      } else if (value === "DE") {
        const finalValue = display.value.slice(0, display.value.length - 1);
        display.value = finalValue;
      } else if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Error";
        }
      } else {
        display.value += value;
      }
    });
  });
}); */

/* document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelectorAll("input[type='button']");
  const display = document.getElementById("display");
  
  button.forEach((button) => {
    button.addEventListener('click', function(){
      const value = button.value;
      if(value === 'AC'){
        display.value = ''
      }else if(value === 'DE'){
        display.value = ''
      }
      else if(value === '='){
        display.value = eval(display.value)
      }
      else{
        display.value = display.value + value
      }
    })
  })
}) */
