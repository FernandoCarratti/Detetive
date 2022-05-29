// Jogo Detetive

// O programa deve fazer 5 perguntas ao jogador com respostas de "sim" e "Não"
// - Caso tenha 4 ou mais respostas "Sim" o jogador é considerado culpado
// - Caso tenha 3 respostas "Sim" o jogador é considerado suspeito
// - Caso tenha 2 ou menos respostas "Sim" o jogador é considerado inocente

// ..."houve um crime no apartamento 47 do Edifício Jangada. Paulo foi brutalmente assassinado.
 // Renato, um amigo de longa data foi quem encontrou o corpo e chamou a polícia. Porém, não é segredo
 // pra ninguém que eles vinham se desentendendo a algum tempo. Renato obviamente passou a ser suspeito..."

 // Para jogar é preciso responder apenas "s" ou "n"

const prompt = require("prompt-sync")();

let sim = 0

let pergunta = ''
    pergunta = prompt("Quando você chegou, ele já estava morto? ")
    if(pergunta == 's'){
        sim++
    }
    pergunta = prompt("Vocês tiveram alguma discussão recente? ")
    if(pergunta == 's'){
        sim++
    }
    pergunta = prompt("Alguém viu você chegar ao local do crime? ")
    if(pergunta == 's'){
        sim++
    }
    pergunta = prompt("Você estava acompanhado antes de chegar ao local do crime? ")
    if(pergunta == 's'){
        sim++
    }
    pergunta = prompt("Você falou com a vítima antes do crime? ")
    if(pergunta == 's'){
        sim++
    }
if(sim >= 4){
    console.log("Culpado")
}
else if(sim == 3){
    console.log("Suspeito")
}
else{
    console.log("Inocente")
}
