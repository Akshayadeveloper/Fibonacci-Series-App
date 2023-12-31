//1. HTML:
//    - User input for the number of terms.
//    - Button to trigger series generation.
// - Output area to display the series.
//2. CSS:
//    - Basic styling for layout and appearance.
//3. JavaScript:
// - Recursive `fibonacci` function to calculate terms.
//    - `generateFibonacci` function to handle user input and display results.

// Instructions To use the app:**

//1. Save the code as an HTML file (e.g., `fibonacci.html`).
//2. Open the file in a web browser.
//3. Enter the desired number of terms in the input field.
//4. Click the "Generate Series" button.
//5. The Fibonacci series will be displayed in the output area.


function generateFibonacci() {
  const num = parseInt(document.getElementById("num").value);
  const outputDiv = document.querySelector(".output");
  outputDiv.textContent = ""; // Clear previous output

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  let series = "";
  for (let i = 0; i < num; i++) {
    series += fibonacci(i) + " ";
  }

  outputDiv.textContent = series;
}
