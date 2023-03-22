
// // Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє
// його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", () => {
    output.textContent = input.value.trim() || "Anonimous";
});






// const refs = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output')
    
// }
// refs.input.addEventListener('input', onInputChange);
//  function onInputChange (event) {
//     if (event.currentTarget.value.trim()!== "") {
//       refs.output.textContent = event.currentTarget.value;
//     }
// }

