function Resultado() {
  var aluno = document.getElementById("nome_aluno");
  var notaDoPrimeiroBimestre = parseFloat(
    document.getElementById("nota_1").value
  );
  var notaDoSegundoBimestre = parseFloat(
    document.getElementById("nota_2").value
  );
  var notaDoTerceiroBimestre = parseFloat(
    document.getElementById("nota_3").value
  );
  var notaDoQuartoBimestre = parseFloat(
    document.getElementById("nota_4").value
  );

  var notaFinal =
    (notaDoPrimeiroBimestre +
      notaDoSegundoBimestre +
      notaDoTerceiroBimestre +
      notaDoQuartoBimestre) /
    4;

  var mediaFinal = notaFinal.toFixed(1);

  var mediaTotal = document.getElementById("Media");

  var media = "A média final do ano é: " + mediaFinal;
  mediaTotal.innerHTML = media;

  var alura = document.getElementById("pegarh3");

  if (mediaFinal >= 7) {
    var passou = "Parabéns!! Você passou de ano!";
    alura.innerHTML = passou;
  } else {
    var naopassou = "Desculpe, infelizmente você não passou";
    alura.innerHTML = naopassou;
  }
}

// Revisão da primeira aula Imersão Dev 4 Alura

/* Variáveis, strings, console.log, toFixed, operações matemáticas, concatenação */

/* function mediaMinimaExigida (){
  if(media>=7)
    console.log ("Parabéns!! Você foi aprovado!")
  else
    console.log ("Desculpe, infelizmente você foi reprovado")
}
*/