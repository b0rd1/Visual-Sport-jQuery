// Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per  da 3 punti
// Una volta generato il “database”, il programma deve chiedere all’utente di inserire un Codice Giocatore e il programma restituisce le statistiche.

var lista_giocatori = [];
var dieci_giocatori = [];

//genera 3 lettere radom
function makeId() {
  var nome = "";
  var lettere = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 3; i++)
    nome += lettere.charAt(Math.floor(Math.random() * lettere.length));
  return nome;
}
//genere numeri random
function randomNumber(min, max) {
  var punti = Math.floor(Math.random() * (max - min + 1)) + min;
  return punti;
}

//genera 100 schede giocatore
for (var i = 0; i < 100; i++) {
  var giocatore = {
    'nome': makeId() + randomNumber(100, 999),
    'punti': randomNumber(0, 100),
    'rimbalzi': randomNumber(0, 100),
    'falli': randomNumber(0, 5),
    'perc_2_punti': randomNumber(0, 100),
    'perc_3_punti': randomNumber(0, 100),
  }
  lista_giocatori.push(giocatore);
}

//fa un array da 10 nomi
for (var i = 0; i < 10; i++) {
  dieci_giocatori.push(lista_giocatori[i].nome)
  console.log(lista_giocatori[i]);
}
$('#dieci_giocatori').text(dieci_giocatori);



$('button').click(function() {

  var valoreTextArea = $('.text').val();

  for (var i = 0; i < lista_giocatori.length; i++) {
    var ricerca = lista_giocatori[i];
    if (valoreTextArea == ricerca.nome) {
      $('#lista_nomi').html(lista_giocatori[i].nome)
      $('#punti').html(lista_giocatori[i].punti);
      $('#rimbalzi').html(lista_giocatori[i].rimbalzi);
      $('#falli').html(lista_giocatori[i].falli);
      $('#tiri_da_due').html(lista_giocatori[i].perc_2_punti);
      $('#tiri_da_tre').html(lista_giocatori[i].perc_3_punti);
      $('img').show();
      $('.stats').show();

    }
  }
})
