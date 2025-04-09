//Função de conversão
function converterMoeda() {
const valor = parseFloat(document.getElementById("valor").value);
const moeda = document.getElementById("moeda").value ;
const resultado = document.getElementById("resultado"); 

let taxa;
 
//Bloco if
if(moeda === "USD") {
taxa = 6; //Um dólar americano equivale a 6 reais no momento do code
} 
else if(moeda === "BRL") {
taxa = 0.17; //um real equivale a 0,17 dólares americanos
}
 
const convertido = (valor / taxa).toFixed(2);

resultado.textContent = `valor ${valor.toFixed(2)} equivale a ${convertido} ${moeda}`;

}
