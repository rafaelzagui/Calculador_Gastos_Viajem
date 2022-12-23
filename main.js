
    const valorCasa = document.querySelector('#casa');
    const valorCombustivel = document.querySelector('#combustivel');
    const valorGastosP = document.querySelector('#gastosP');
    const valorAlimentacao = document.querySelector('#alimentacao');
    const valorEssencial = document.querySelector('#essencial');
    const btnCalc = document.querySelector('.btnCalc');
    const select = document.querySelector('.pessoas');
    

     btnCalc.addEventListener("click",(e)=>{
        e.preventDefault();
        conta();
        })
    


  function conta(){
    
      let casa = parseFloat(editaValorCasa(valorCasa.value));
      let combustivel = parseFloat(valorCombustivel.value);
      let gastoPessoal = parseFloat(valorGastosP.value);
      let alimentacao= parseFloat(valorAlimentacao.value);
      let essencial = parseFloat(valorEssencial.value);
      let vlrFinalCasa = calculaCasaPessoa(casa);
      let vlrGasolinaFinal = calculaCombustivel(combustivel)
   
      if( typeof casa !== 'number' || typeof combustivel !== 'number' || typeof gastoPessoal !== 'number' || typeof alimentacao !== 'number' || typeof essencial !== 'number') return 'Erro'
      let total = gastoPessoal+essencial+vlrFinalCasa+vlrGasolinaFinal;

      criaP(vlrFinalCasa,vlrGasolinaFinal,gastoPessoal,alimentacao,essencial,total)
        
    }
    const calculaCasaPessoa= (valor) => {
        let qtdPessoas = parseInt(select.options[select.selectedIndex].value)-1;
        return valor/qtdPessoas;
    }
   const criaP=(casa,combustivel,gastosPessoal,alimentacao,essencial,total)=>{
    const divCentral  = document.querySelector('.divForm')
    const results = document.createElement('div')
    const casaP = document.createElement('p');
    const combustivelP = document.createElement('p');
    const alimP = document.createElement('p');
    const gastoP = document.createElement('p');
    const essencialP = document.createElement('p');
    const totalP = document.createElement('p');
    divCentral.appendChild(results)
    results.classList.add('espacoP','results')
    results.appendChild(casaP)
    results.appendChild(combustivelP)
    results.appendChild(gastoP)
    results.appendChild(alimP)
    results.appendChild(essencialP)
    results.appendChild(totalP)
    
    casaP.innerHTML=`Casa: R$${casa} p/pessoa`;
    combustivelP.innerHTML=`Gasolina: R$${combustivel}`;
    gastoP.innerHTML = `Gastos Pessoais: R$${gastosPessoal}`;
    alimP.innerHTML =`Alimentação: R$${alimentacao}`;
    essencialP.innerHTML=`Essencial: R$${essencial}`;
    totalP.innerHTML=`Total: R$${total} p/pessoa`;

   }
   const editaValorCasa=valor=>valor - 600;

   const calculaCombustivel = (vlrGasolina) => {
    let qtdPessoas = parseInt(select.options[select.selectedIndex].value);
    let resultado = (vlrGasolina/qtdPessoas)*2;
    resultado = resultado.toFixed(2)
    return parseFloat(resultado);
};
    
   


