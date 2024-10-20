
const result = document.querySelector('.result')
const humanPontos = document.querySelector('#human-pontos')
const machinePontos = document.querySelector('#machine-pontos')
/* Variaveis */ 

let humanScoreNumber = 0
let machineScoreNumber = 0



const playHumano = (humanoJogo) => {
    
    playGame(humanoJogo, playMaquina());

}

const playMaquina = () => { 
    const jogo = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3)
    
    return jogo [randomNumber]

}

const playGame = (human, machine) => {
    
    
    console.log('Humano: ' + human + "Maquina: "  + machine);

    if(human === machine){
        result.innerHTML ="Deu empate";
    } else if( 
        (human === 'papel' && machine === 'pedra') || 
        (human === 'pedra' && machine === 'tesoura') || 
        (human === 'tesoura' && machine === 'papel')){
            humanScoreNumber++; /* Dentro do let */
            humanPontos.innerHTML = humanScoreNumber /* SEMPRE CIRAR UMA VARIAL */
        result.innerHTML ="Você ganhou.!"
    } else {
        machineScoreNumber++; /* Dentro do let*/ 
        machinePontos.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a maquina.!" 
    }
}

/* Game_Options  -> Auxilia como variavel, assim não precisa */