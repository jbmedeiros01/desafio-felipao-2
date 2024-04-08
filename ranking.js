// Função saldo de vitórias

function calcularSaldoDeVitorias (vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas
    return saldoDeVitorias
}

let saldoPositivo = calcularSaldoDeVitorias(130, 35)

// Função nível no ranking

function definirNivelRanking(nivelNoRanking) {

    if(saldoPositivo <= 10) {
        nivelNoRanking = "Ferro"
    } 
    else if(saldoPositivo > 10 && saldoPositivo < 21) {
        nivelNoRanking = "Bronze"
    }
    else if(saldoPositivo > 20 && saldoPositivo < 51) {
        nivelNoRanking = "Prata"
    }
    else if(saldoPositivo > 50 && saldoPositivo < 81) {
        nivelNoRanking = "Ouro"
    }
    else if(saldoPositivo > 80 && saldoPositivo < 91) {
        nivelNoRanking = "Diamante"
    }
    else if(saldoPositivo > 90 && saldoPositivo < 101) {
        nivelNoRanking = "Lendário"
    }
    else {
        nivelNoRanking = "Imortal"
    }
    return nivelNoRanking
}


let ranking = definirNivelRanking()

console.log("O jogador tem um saldo de " + saldoPositivo + " vitórias e está no nível de ranking " + ranking + "!")