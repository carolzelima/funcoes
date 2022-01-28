//1 - crie uma função que exiba uma mensagem no console
function myFear (f) {
        console.log(`My biggest fear: ${f}`)
    }
myFear("Spiders")
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function myName (n) {
    console.log(`My name is: ${n}`)
}
myName("Carolina Lima")
//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
function aboutMe($name, age, music){
        console.log(`My name is ${$name}, i'm ${age} years old and I like symphonic metal. Do you know ${music}?`)
    }
    
 aboutMe(`Carol`,`22`,`Nightwish`);
//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function moreAbout($movie, song){
    console.log(`My favorite movie is ${$movie} and my favorite song from Nightwish is ${song} `)
}

moreAbout(`Closer`,`Nemo`);

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
console.log("Qual é o triplo do número 2?")
function number (numero)
 {
    console.log(`O triplo desse número é: ${numero * 3} `)
}
number ('2')