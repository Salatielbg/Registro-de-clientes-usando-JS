function checkCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  strCPF = strCPF.replace(/[^\d]/g, "");
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}
function mascaraCPF(obj) {
  let cpf_formatado = obj.value;
  cpf_formatado = cpf_formatado.replace(/[^0-9]/g, "");
  cpf_formatado = cpf_formatado.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/g,
    "$1.$2.$3-$4"
  );
  obj.value = cpf_formatado;
}
function mascaraFone(obj) {
  console.log("oi");
  let fone_formatado = obj.value;
  fone_formatado = fone_formatado.replace(/[^0-9]/g, "");
  fone_formatado = fone_formatado.replace(
    /(\d{2})(\d{5})(\d{4})/g,
    "($1) $2-$3"
  );
  obj.value = fone_formatado;
}
function mascaraCEP(obj) {
  let cep_formatado = obj.value;
  cep_formatado = cep_formatado.replace(/[^0-9]/g, "");
  cep_formatado = cep_formatado.replace(/(\d{5})(\d{3})/g, "$1-$2");
  obj.value = cep_formatado;
}

function checkName(nome) {
  if (nome.value.length < 3) return false;
  if (nome.value.match(/[0-9]/g)) return false;
  return true;
}
function checkEmail(email) {
  // validação do email com regex
}
function valida() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let cpf = document.getElementById("cpf");
  let fone = document.getElementById("fone");
  let nacto = document.getElementById("nacto");

  if (checkName(nome) == false) {
    window.alert("Nome incorreto");
    nome.focus();
    nome.style.backgroundColor = "yellow";
    return false;
  } else {
    nome.style.backgroundColor = "white";
  }
  if (checkEmail(email) == false) {
    window.alert("Email não informado");
    email.focus();
    email.style.backgroundColor = "yellow";
    return false;
  } else {
    email.style.backgroundColor = "white";
  }
  if (checkCPF(cpf.value) == false) {
    window.alert("CPF incorreto");
    cpf.focus();
    cpf.style.backgroundColor = "yellow";
    return false;
  } else {
    cpf.style.backgroundColor = "white";
  }
  if (fone.value == "") {
    window.alert("Telefone não informado");
    fone.focus();
    fone.style.backgroundColor = "yellow";
    return false;
  } else {
    fone.style.backgroundColor = "white";
  }
  if (nacto.value == "") {
    window.alert("Nascimento não informado");
    nacto.focus();
    nacto.style.backgroundColor = "yellow";
    return false;
  } else {
    nacto.style.backgroundColor = "white";
  }
  return true;
}

function formatar_cpf(cpf) {
  //retira os caracteres indesejados...
  let cpf_formatado = cpf.value.replace(/[^\d]/g, "");

  cpf_formatado = cpf_formatado.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );

  console.log(cpf_formatado);

  //realizar a formatação...
  cpf.value = cpf_formatado;
}
