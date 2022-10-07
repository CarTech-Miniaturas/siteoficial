function valemail(form, num) {
    //entrada
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

    //processamento
    if (nome == "") {
        //saida
        valnome.style.display = "block";
        return false;
    }
    else {
        valnome.style.display = "none"
        if (sobrenome == "") {
            //saida
            valsobrenome.style.display = "block";
            return false;
        }
        else {
            valsobrenome.style.display = "none"
            if (email == "") {
                //saida
                valemail.style.display = "block";
                return false;
            }
            else {
                valemail.style.display = "none"
                if (tipo == "nada") {
                    //saida
                    valtipo.style.display = "block";
                    return false;
                }
                else {
                    valtipo.style.display = "none"
                    if (mensagem == "") {
                        //saida
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
    //entrada
    let senha = document.getElementById("senha-login");
    let checkbox = document.getElementById("mostrar-senha");

    //processamento
    if (checkbox.checked) {
        //saida
        senha.type = "text"
    }
    else {
        //saida
        senha.type = "password"
    }
}

function logar() {
    //entrada
    let email = document.getElementById("email-login").value;
    let senha = document.getElementById("senha-login").value;
    let vemail = document.getElementById("valilogin-email");
    let vsenha = document.getElementById("valilogin-senha");
    let vinval = document.getElementById("valilogin-inval");

    //processamento
    if (email == "") {
        //saida
        vemail.style.display = "block";
        vsenha.style.display = "none";
        vinval.style.display = "none";
        return false
    }
    else if (senha == "") {
        //saida
        vsenha.style.display = "block";
        vemail.style.display = "none";
        vinval.style.display = "none";
        return false
    }
    else {
        //saida
        vemail.style.display = "none";
        vsenha.style.display = "none";
        
        if (email == "usuario@email.com" && senha == "user") {
            //saida
            vinval.style.display = "none";
        }
        else {
            //saida
            vinval.style.display = "block";
            return false
        }
    }
}
function cadastrar() {
    //entrada
    let nome = document.getElementById("nome-cadastro").value;
    let sobrenome = document.getElementById("sobrenome-cadastro").value;
    let email = document.getElementById("email-cadastro").value;
    let nasc = document.getElementById("nasc-cadastro").value;
    let endereco = document.getElementById("endereco-cadastro").value;
    let cpf = document.getElementById("cpf-cadastro").value;
    let tel = document.getElementById("tel-cadastro").value;
    let senha = document.getElementById("senha-cadastro").value;
    let confirmsenha = document.getElementById("confirmsenha-cadastro").value;
    let valnome = document.getElementById("valicadastro-nome");
    let valsobrenome = document.getElementById("valicadastro-sobrenome");
    let valemail = document.getElementById("valicadastro-email");
    let valnasc = document.getElementById("valicadastro-nasc");
    let valmaioridade = document.getElementById('valicadastro-maioridade');
    let valendereco = document.getElementById("valicadastro-endereco");
    let valcpf = document.getElementById("valicadastro-cpf");
    let valtel = document.getElementById("valicadastro-tel");
    let valsenha = document.getElementById("valicadastro-senha");
    let valconfirmsenha = document.getElementById("valicadastro-confirmsenha");
    let valdifsenha = document.getElementById("valicadastro-difsenha");

    
    //processamento
    if (nome == "") {
        //saida
        document.getElementById("nome-cadastro").focus();
        valnome.style.display = "block";
        valsobrenome.style.display = "none";
        valemail.style.display = "none";
        valnasc.style.display = "none";
        valmaioridade.style.display = "none";
        valendereco.style.display = "none";
        valcpf.style.display = "none";
        valtel.style.display = "none";
        valsenha.style.display = "none";
        valconfirmsenha.style.display = "none";
        valdifsenha.style.display = "none";
        return false;
    }
    else {
        //saida
        valnome.style.display = "none";
        if (sobrenome == "") {
            //saida
            document.getElementById("sobrenome-cadastro").focus();
            valsobrenome.style.display = "block";
            valemail.style.display = "none";
            valnasc.style.display = "none";
            valmaioridade.style.display = "none";
            valendereco.style.display = "none";
            valcpf.style.display = "none";
            valtel.style.display = "none";
            valsenha.style.display = "none";
            valconfirmsenha.style.display = "none";
            valdifsenha.style.display = "none";
            return false;
        }
        else {
            //saida
            valsobrenome.style.display = "none";
            if (email == "") {
                //saida
                document.getElementById("email-cadastro").focus();
                valemail.style.display = "block";
                valnasc.style.display = "none";
                valmaioridade.style.display = "none";
                valendereco.style.display = "none";
                valcpf.style.display = "none";
                valtel.style.display = "none";
                valsenha.style.display = "none";
                valconfirmsenha.style.display = "none";
                valdifsenha.style.display = "none";
                return false;
            }
            else {
                //saida
                valemail.style.display = "none";
                if (nasc == "") {
                    //saida
                    document.getElementById("nasc-cadastro").focus();
                    valnasc.style.display = "block";
                    valmaioridade.style.display = "none";
                    valendereco.style.display = "none";
                    valcpf.style.display = "none";
                    valtel.style.display = "none";
                    valsenha.style.display = "none";
                    valconfirmsenha.style.display = "none";
                    valdifsenha.style.display = "none";
                    return false;
                }
                else {
                    //saida
                    valnasc.style.display = "none";
                    if (calculaIdade(nasc) < 18) {
                        document.getElementById("nasc-cadastro").focus();
                        valmaioridade.style.display = "block";
                        valendereco.style.display = "none";
                        valcpf.style.display = "none";
                        valtel.style.display = "none";
                        valsenha.style.display = "none";
                        valconfirmsenha.style.display = "none";
                        valdifsenha.style.display = "none";
                        return false;
                    }
                    else {
                        //saida
                        valmaioridade.style.display = "none";
                        if (endereco == "") {
                            //saida
                            document.getElementById("endereco-cadastro").focus();
                            valendereco.style.display = "block";
                            valcpf.style.display = "none";
                            valtel.style.display = "none";
                            valsenha.style.display = "none";
                            valconfirmsenha.style.display = "none";
                            valdifsenha.style.display = "none";
                            return false;
                        }
                        else {
                            //saida
                            valendereco.style.display = "none";
                            if (cpf == "") {
                                //saida
                                document.getElementById("cpf-cadastro").focus();
                                valcpf.style.display = "block";
                                valtel.style.display = "none";
                                valsenha.style.display = "none";
                                valconfirmsenha.style.display = "none";
                                valdifsenha.style.display = "none";
                                return false;
                            }
                            else {
                                //saida
                                valcpf.style.display = "none";
                                if (tel == "") {
                                    //saida
                                    document.getElementById("tel-cadastro").focus();
                                    valtel.style.display = "block";
                                    valsenha.style.display = "none";
                                    valconfirmsenha.style.display = "none";
                                    valdifsenha.style.display = "none";
                                    return false;
                                }
                                else {
                                    //saida
                                    valtel.style.display = "none";
                                    if (senha == "") {
                                        //saida
                                        document.getElementById("senha-cadastro").focus();
                                        valsenha.style.display = "block";
                                        valconfirmsenha.style.display = "none";
                                        valdifsenha.style.display = "none";
                                        return false;
                                    }
                                    else {
                                        //saida
                                        valsenha.style.display = "none";
                                        if (confirmsenha == "") {
                                            //saida
                                            document.getElementById("confirmsenha-cadastro").focus();
                                            valconfirmsenha.style.display = "block";
                                            valdifsenha.style.display = "none";
                                            return false;
                                        }
                                        else {
                                            //saida
                                            valconfirmsenha.style.display = "none";
                                            if (confirmsenha != senha) {
                                                //saida
                                                document.getElementById("senha-cadastro").focus();
                                                valdifsenha.style.display = "block";
                                                return false;
                                            }
                                            else {
                                                //saida
                                                valdifsenha.style.display = "none";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function calculaIdade(dataNasc){ 
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('-');
    var anoNasc =anoNascParts[0];
    var mesNasc =anoNascParts[1];
    var diaNasc =anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1; 
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
    if(mesAtual < mesNasc){
        idade--; 
    } 
    else {
        //Se estiver no mes do nascimento, verificar o dia
        if(mesAtual == mesNasc){ 
            if(new Date().getDate() < diaNasc ){ 
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--; 
            }
        }
    } 
    return idade; 
   }

function somente_numero(e) {
    tecla = (window.event)?event.keyCode:e.which;
    if((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla == 8) || (tecla == 37) || (tecla == 39)) {
        return true;
    }
    else {
        return false;
    }
}
function mascara_cpf(obj) {
    if(obj.value.length == 3) {
        obj.value += "."
    }
    if(obj.value.length == 7) {
        obj.value += "."
    }
    if(obj.value.length == 11) {
        obj.value += "-"
    }
}
function mascara_telefone(obj) {
    if(obj.value.length == 0) {
        obj.value += "("
    }
    if(obj.value.length == 3) {
        obj.value += ") "
    }
    if(obj.value.length == 10) {
        obj.value += "-"
    }
}

function mostrarcadastro() {
    //entrada
    let senha = document.getElementById("senha-cadastro");
    let confirmsenha = document.getElementById("confirmsenha-cadastro");
    let checkbox = document.getElementById("mostrar-senha-cadastro");

    //processamento
    if (checkbox.checked) {
        //saida
        senha.type = "text"
        confirmsenha.type = "text"
    }
    else {
        //saida
        senha.type = "password"
        confirmsenha.type = "password"
    }
}