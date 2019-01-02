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


//stampa a video 6 giocatori
for (var i = 0; i < 12; i++) {
  $('.lista').append(`
    <span id="randomPlayer">` + lista_giocatori[i].nome + `</span>
    `);
}

//cerca utente
$(document).on('click', 'button', function() {
  var selectedPlayer = $('.text').val().toUpperCase();

  if (selectedPlayer.length == 0 || selectedPlayer.length < 6 || selectedPlayer.length > 6) {
    $('.error').fadeIn(1500);
    $('.error').fadeOut(1500);
  } else {
    viewPlayer(selectedPlayer);
  }
});

//carica utente con click sul nome
$(document).on('click', '#randomPlayer', function() {
  var selectedPlayer = $(this).text();
  viewPlayer(selectedPlayer);
});

//funzione che cerca il giocatore selezionato
function viewPlayer(selectedPlayer) {

  for (var i = 0; i < lista_giocatori.length; i++) {
    var giocatore = lista_giocatori[i];
    if (selectedPlayer == giocatore.nome) {
      $('#lista_nomi').html(giocatore.nome);
      $('#punti').html(giocatore.punti);
      $('#rimbalzi').html(giocatore.rimbalzi);
      $('#falli').html(giocatore.falli);
      $('#tiri_da_due').html(giocatore.perc_2_punti + '%');
      $('#tiri_da_tre').html(giocatore.perc_3_punti + '%');
      $('img').show();
      $('.stats').show();
    }
  }
}


//sezione calcolo media
var arrayMedia = [];

$('.bottone_media').click(function() {
  var valore = $('input[name=radio]:checked', '#myForm').val()

  if (valore == 'tiri') {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].punti);
    }
    ricercaStatistica();
  }
  if (valore == 'falli') {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].falli);
    }
    ricercaStatistica();
  }
  if (valore == 'rimbalzi') {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].rimbalzi);
    }
    ricercaStatistica();
  }
  if (valore == 'perc_2_punti') {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].perc_2_punti);
    }
    ricercaStatistica();
    $('.esito_media').append('%');
  }
  if (valore == 'perc_3_punti') {
    for (var i = 0; i < lista_giocatori.length; i++) {
      arrayMedia.push(lista_giocatori[i].perc_3_punti);
    }
    ricercaStatistica();
    $('.esito_media').append('%');
  }

});

//controllo se bottone gia premuto svuota l'array
$('.bottone_media').click(function() {
  if ($('input[name=radio]:checked', '#myForm')) {
    arrayMedia.length = 0;
  }
});


//calcola media
function ricercaStatistica() {
  var media = 0;
  var sommaPunti = 0;

  for (var i = 0; i < arrayMedia.length - 1; i++) {
    var sommaPunti = sommaPunti + arrayMedia[i];
  }
  var media = Math.floor(sommaPunti / 100);
  $('.esito_media').show();
  $('.esito_media').html('La media è: ' + media);
  return media;
}