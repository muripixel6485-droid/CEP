document.querySelector('buscar').addEventListener('click', ()=>{

    const cep = document.querySelector("#CEP").value.trim()

    if(!cep){
        alert("Digite um CEP")
        return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resp => resp.json())
    .then(dados => {
        if(dados.erro){
            document.querySelector("#saida").textContent = 
            "CEP não foi encontrado!"
        }else{
            let str = JSON.stringify(dados, null, 2)
            document.querySelector("#saida").textContent = str
        }

    })



})