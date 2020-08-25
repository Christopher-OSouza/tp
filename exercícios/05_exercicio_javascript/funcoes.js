
function Venviar()
{
    let ver=0;
    let nome=document.formulario.nome;
    if(nome.value.length<3)
    {
       ver=1;
       nome.value="";
       alert("Nome inválido");

    }
    else
    {
        nome.value=nome.value.toLowerCase();
    }

    let estado=document.formulario.condicao;
    if(estado.value!="solteiro" && estado.value!="casado" && estado.value!="viuvo" && estado.value!="divorciado")
    {
        ver=1;
        if(document.getElementById("a").querySelector("span")== null)
        {
        let span = document.createElement("span");
        span.classList.add("erro");
        span.textContent = "Selecione um estado civil válido!";
        document.getElementById("a").appendChild(span);
        }       

    }


    document.formulario.objetivo.value=document.formulario.objetivo.value.toLowerCase();

    if( !(document.formulario.telefone.value.match(document.formulario.telefone.pattern) || document.formulario.email.value!=""))
    {
        ver=1;
        alert("inserir email ou telefone");
    }

    if(document.formulario.ingles.value=="0" || document.formulario.espanhol.value=="0")
    {
        ver=1;
    }

    let b=0;
    for (let i = 0; i < 7; i++) {
        if (document.formulario.linguagem[i].checked)
          b++;
    }

    if(b==0)
    {
        if(ver==0)
        {
        var op = confirm("DESEJA ENVIAR SEM NENHUMA LINGUAGEM?");
        if (op == false) {
            ver=1;
        }
    }

    }

    if(ver==0)
    {
        document.formulario.submit();
    }



}


function Limpar()
{
    var op = confirm("deseja limpar?");
    if (op == true) {
        document.formulario.reset();
    }
}