function valemail(form, num) {
    let nome = form.$Nome.value;
    let sobrenome = form.$Sobrenome.value;
    let email = form.email.value;
    let tipo = form.subject.value;
    let mensagem = form.$Mensagem.value;

    let valnome = document.getElementById('valnome' + num);
    let valsobrenome = document.getElementById('valsobrenome' + num);
    let valemail = document.getElementById('valemail' + num);
    let valtipo = document.getElementById('valtipo' + num);
    let valmensagem = document.getElementById('valmensagem' + num);

    if (nome == "") {
        valnome.style.display = "block";
        return false;
    }
    else {
        valnome.style.display = "none"
        if (sobrenome == "") {
            valsobrenome.style.display = "block";
            return false;
        }
        else {
            valsobrenome.style.display = "none"
            if (email == "") {
                valemail.style.display = "block";
                return false;
            }
            else {
                valemail.style.display = "none"
                if (tipo == "nada") {
                    valtipo.style.display = "block";
                    return false;
                }
                else {
                    valtipo.style.display = "none"
                    if (mensagem == "") {
                        valmensagem.style.display = "block";
                        return false;
                    }
                    else {
                        valmensagem.style.display = "none";
                    }
                }
            }
        }
    }
}
function mostrar() {
    let senha = document.getElementById("senha-login");
    let checkbox = document.getElementById("mostrar-senha");
    if (checkbox.checked) {
        senha.type = "text"
    }
    else {
        senha.type = "password"
    }
}

function logar() {
    let email = document.getElementById("email-login").value;
    let senha = document.getElementById("senha-login").value;
    let vemail = document.getElementById("valilogin-email");
    let vsenha = document.getElementById("valilogin-senha");
    let vinval = document.getElementById("valilogin-inval");
    if (email == "") {
        vemail.style.display = "block";
        vsenha.style.display = "none";
        vinval.style.display = "none";
        return false
    }
    else if (senha == "") {
        vsenha.style.display = "block";
        vemail.style.display = "none";
        vinval.style.display = "none";
        return false
    }
    else {
        vemail.style.display = "none";
        vsenha.style.display = "none";
        
        if (email == "usuario@email.com" && senha == "user") {
            vinval.style.display = "none";
        }
        else {
            vinval.style.display = "block";
            return false
        }
    }
}