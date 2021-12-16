const calcularDesconto=(valor,desconto,total)=>{
    //parametro que recebe o valor da compra
    valor=Number(document.getElementById("valor").value);
    //array com os valores dos radios sim e não
    let conv=[document.getElementById("sim").checked,document.getElementById("nao").checked];
    //variável que recebe o convênio
    let convenio=document.getElementById("convenio").value;
    let res=document.getElementById("res");

    //Se algum campo for preenchido incorretamente
    if(valor<=0||valor==isNaN(valor)){
        alert('Erro - O campo "Valor de Compra" não pode está vazio ou receber valores não numéricos!');
    }else if(conv[0]==""&&conv[1]==""){
        alert('O cliente possui convênio? Sim ou não?');
    }else if(conv[1]==true&&convenio!=""){
        alert('Erro - Se o cliente não possui convênio, então a opção "Selecione o Convênio" tem que está vazia');
    //calculo da compra
    }else if(conv[1]==true){
        desconto=valor*10/100;
        total=valor-desconto;
        res.innerHTML= `Valor Bruto R$: ${valor.toFixed(2)} <br>Desconto de R$: ${desconto.toFixed(2)} <br>Total da Compra R$: ${total.toFixed(2)}`;
        document.getElementById("valor").value="";
    }else if(conv[0]==true&&convenio=="amigo dos animais"){
        desconto=valor*20/100;
        total=valor-desconto;
        res.innerHTML= `Valor Bruto R$: ${valor.toFixed(2)} <br>Desconto de R$: ${desconto.toFixed(2)} <br>Total da Compra R$: ${total.toFixed(2)}`;
        document.getElementById("valor").value="";
    }else if(conv[0]==true&&convenio=="saúde animal"){
        desconto=valor*50/100;
        total=valor-desconto;
        res.innerHTML= `Valor Bruto R$: ${valor.toFixed(2)} <br>Desconto de R$: ${desconto.toFixed(2)} <br>Total da Compra R$: ${total.toFixed(2)}`;
        document.getElementById("valor").value="";
    }
}
document.getElementById("calcular").addEventListener("click", calcularDesconto)