let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let resultado = document.querySelector("#resultado");
let btnSumar = document.querySelector("#btn-sumar");
let btnRestar = document.querySelector("#btn-restar");
let btnMultiplicar = document.querySelector("#btn-multiplicar");
let btnDividir = document.querySelector("#btn-dividir");

let sumar = (a, b) => a + b;
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

btnSumar.addEventListener("click", () => {
  let a = Number(num1.value);
  let b = Number(num2.value);
  resultado.textContent = sumar(a, b);
});

btnRestar.addEventListener("click", () => {
  let a = Number(num1.value);
  let b = Number(num2.value);
  resultado.textContent = restar(a, b);
});

btnMultiplicar.addEventListener("click", () => {
  let a = Number(num1.value);
  let b = Number(num2.value);
  resultado.textContent = multiplicar(a, b);
});

btnDividir.addEventListener("click", () => {
  let a = Number(num1.value);
  let b = Number(num2.value);
  resultado.textContent = dividir(a, b);
});