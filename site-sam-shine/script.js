// ---------- VALIDAÇÃO E-MAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório
 emailInput.addEventListener('focus', ()=>{
 emailLabel.classList.add('required-popup')})

// Ocultar popup de campo obrigatório
 emailInput.addEventListener('blur', ()=>{
 emailLabel.classList.remove('required-popup')
})

// Validar valor do input
emailInput.addEventListener('change', (evento)=>{
 const texto = evento.target.value
 const emailValido = texto.includes('@') && texto.includes('.com')
 if(emailValido) { 
// aplica o caso de sucesso
// inputs
 emailInput.classList.remove('error')
 emailInput.classList.add('correct')
// helpers
 emailHelper.classList.remove('visible')

  } else {
// aplica o caso de erro
// inputs
 emailInput.classList.remove('correct')
 emailInput.classList.add('error')
// helpers
 emailHelper.innerText = 'Insira um email válido'
 emailHelper.classList.add('visible')
 }
})

// ---------- VALIDAÇÃO SENHA ---------- //

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

//Mostrar popup de campo obrigatório
senhaInput.addEventListener('focus',()=>{
senhaLabel.classList.add('required-popup')})

//Ocultar popup de campo obrigatório
senhaInput.addEventListener('blur', ()=>{
senhaLabel.classList.remove('required-popup')})

//Validar valor do input
senhaInput.addEventListener('input', (evento)=>{
 const texto = evento.target.value
 const senhaValida = texto.length >=8
 
 if(senhaValida) {
// aplica o caso de sucesso
// inputs
 senhaInput.classList.remove('error')
 senhaInput.classList.add('correct')
// helpers
 senhaHelper.classList.remove('visible')

 } else {
// aplica o caso de erro
// inputs
 senhaInput.classList.remove('correct')
 senhaInput.classList.add('error')
// helpers
 senhaHelper.innerText = 'A senha deve ter no mínimo 8 caracteres'
 senhaHelper.classList.add('visible')
 }})
