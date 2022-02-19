let usuario = document.querySelector("#usuario");
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let usuarioOk = false;
let emailOk = false;
let senhaOk = false;

function validaUsuario() {
    let txtUsuario = document.querySelector("#txtUsuario");

    if (usuario.value.length < 3) {
        txtUsuario.innerHTML = "Nome Inválido!";
        txtUsuario.style.color = "red";
    } else {
        txtUsuario.style.display = "none";
        usuarioOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido!";
        txtEmail.style.color = "red";
    } else {
        txtEmail.style.display = "none";
        emailOk = true;
    }
}

function validaSenha() {
    let txtSenha = document.querySelector("#txtSenha");

    if (senha.value.length < 8) {
        txtSenha.innerHTML = "Senha Inválida!";
        txtSenha.style.color = "red";
    } else {
        txtSenha.style.display = "none";
        senhaOk = true;
    }
}

function entrar() {
    if (usuarioOk == true && emailOk == true && senhaOk == true) {
        alert("Seja bem vindo/a/e!");
    } else {
        alert("Preencha o formulário corretamente!");
    }
}
