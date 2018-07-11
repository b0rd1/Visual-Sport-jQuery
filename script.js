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

//genera 3 lettere random
function makeId() {
  var nome = "";
  var lettere = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
    'punti': randomNumber(0, 60),
    'rimbalzi': randomNumber(0, 20),
    'falli': randomNumber(0, 5),
    'perc_2_punti': randomNumber(0, 100),
    'perc_3_punti': randomNumber(0, 100),
  }
  lista_giocatori.push(giocatore);
}

//scelta modalità
var domanda = 4;

while (domanda >= 3) {
  domanda = parseInt(prompt("Inserisci 0 per chiudere, 1 per visualizzare le schede giocatori e 2 per la media di una statistica"));
}

//nel caso non fosse un numero refresha la pagina
if (isNaN(domanda)) {
  alert('Non è un numero');
  location.reload();
}

//scelta caso 0
if (domanda == 0) {
  //do nothing
}

//scelta caso 1
if (domanda == 1) {

  //stampa a video 6 giocatori
  for (var i = 0; i < 1; i++) {
    $('#sei_giocatori1').text(lista_giocatori[0].nome)
    $('#sei_giocatori2').text(lista_giocatori[1].nome)
    $('#sei_giocatori3').text(lista_giocatori[2].nome)
    $('#sei_giocatori4').text(lista_giocatori[3].nome)
    $('#sei_giocatori5').text(lista_giocatori[4].nome)
    $('#sei_giocatori6').text(lista_giocatori[5].nome)
  }

  //funzione al click
  $('button').click(function() {

    var valoreTextArea = $('.text').val();

    for (var i = 0; i < lista_giocatori.length; i++) {
      var ricerca = lista_giocatori[i];
      if (valoreTextArea == ricerca.nome) {
        $('#lista_nomi').html(lista_giocatori[i].nome)
        $('#punti').html(lista_giocatori[i].punti);
        $('#rimbalzi').html(lista_giocatori[i].rimbalzi);
        $('#falli').html(lista_giocatori[i].falli);
        $('#tiri_da_due').html(lista_giocatori[i].perc_2_punti + '%');
        $('#tiri_da_tre').html(lista_giocatori[i].perc_3_punti + '%');
        $('img').show();
        $('.stats').show();

      }
    }
  });

}

//scelta caso 2
if (domanda == 2) {

  var arrayMedia = [];

  var statisticaUtente = prompt("Scegli una statistica tra Punti, Falli, Rimbalzi, Tiri da Due Punti o Tiri da Tre punti");

  if (compareString(statisticaUtente, 'Punti')) {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].punti);
    }
    ricercaStatistica();
  }
  if (compareString(statisticaUtente, 'Rimbalzi')) {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].rimbalzi);
    }
    ricercaStatistica();
  }
  if (compareString(statisticaUtente, 'Falli')) {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].falli);
    }
    ricercaStatistica();
  }
  if (compareString(statisticaUtente, 'Tiri da due punti')) {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].perc_2_punti);
    }
    ricercaStatistica();
  }
  if (compareString(statisticaUtente, 'Tiri da tre punti')) {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].perc_3_punti);
    }
    ricercaStatistica();
  }


  //calcola media
  function ricercaStatistica() {
    var media = 0;
    var sommaPunti = 0;

    for (var i = 0; i < arrayMedia.length - 1; i++) {
      var sommaPunti = sommaPunti + arrayMedia[i];
    }
    var media = (sommaPunti / 100);
     alert('La media di ' + statisticaUtente + ' è: ' + media)
     console.log(media);
     return media;
  }

  //comparison string
  function compareString(string1, string2) {
    if (string1.toUpperCase() == string2.toUpperCase()) {
      return true;
    }
  }

}
