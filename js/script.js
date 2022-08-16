document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""){
      alert("sucesso beesha! logo receberá as novis por e-mail, okur!")
  }else{
      alert("meu bem, não esquece de preencher todos os campos!")
  }
}



  