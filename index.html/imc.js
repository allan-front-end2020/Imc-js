var nome = prompt("Qual e seu nome?")
var altura = prompt("Qual e sua altura com centimetros")
var peso = prompt("Quanto voce esta pesando atualmente?")


altura = parseFloat(altura)
peso = parseFloat(peso)
altura /= 100



var imc = peso/ (altura*altura)


if(imc < 16){
    
 classficacao ="peso muito baixo grave "
}
else if(imc >= 16 && imc<=16.99 ){
  classficacao ="peso baixo grave " 

} else if(imc >= 17 && imc <= 18.48 ){
   
  classficacao = "peso baixo "

}else if(imc >= 18.50 && imc<= 24.99 ){
    
    classficacao = "peso normal "

}else if(imc >= 25 && imc <= 29.99 ){
    
    classficacao = " sobre peso "

}else if(imc >= 30 && imc <= 34.99 ){
    
    classficacao = " Obesidade Grau 1"

}else if(imc >= 35 && imc <= 39.99 ){
   
    classficacao=" Obesidade Grau 2"

}else if (imc >= 40 ) {
  
    classficacao =" Obesidade Grau 3"

} else{

}
document.write( nome + ' voce possui IMC ' + imc + ' sendo  classificado como: ' +   classficacao + '.');
