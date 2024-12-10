const darkTag = document.getElementsByTagName('html')[0];
darkTag.setAttribute('data-theme', 'light')

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("input[type='button']");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.value;
  
        if (value === "AC") {
          // Clear the display
          display.value = "";
        } else if (value === "DE") {
          // Delete the last character
          display.value = display.value.slice(0, -1);
        } else if (value === "=") {
          try {
            // Evaluate the expression
            display.value = eval(display.value);
          } catch (e) {
            display.value = "Error";
          }
        } else {
          // Append the button value to the display
          display.value += value;
        }
      });
    });
  });
  