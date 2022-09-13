//objetos    chave  valor
var paulo = {nome: "Paulo", vitorias: 0, empate: 0,derrotas: 0, pontos: 0}
var rafa = {nome: "Rafa", vitorias: 0, empate: 0, derrotas: 0, pontos: 0}
var joao = {nome: "Joao", vitorias: 0, empate: 0,derrotas: 0, pontos: 0}
 
function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empate
  return pontos
}

paulo.pontos = calculaPontos(rafa)
rafa.pontos = calculaPontos(paulo)
joao.pontos = calculaPontos(joao)

var jogadores = [paulo, rafa, joao]
function exibirJogadores (jogadores) { //funcao exibir informações na tela 
  var elemento = ""
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empate + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento += "</tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = elemento
}

exibirJogadores(jogadores)

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empate++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadores(jogadores)
}
