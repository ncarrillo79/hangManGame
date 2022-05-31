let palavras = [
  "abelha",
  "aranha",
  "avestruz",
  "barata",
  "escorpião",
  "formiga",
  "baleia",
  "egua",
  "pantera",
  "panda",
  "papagaio",
  "peixe",
  "peru",
  "pombo",
  "polvo",
  "urubu",
  "veado",
  "zebra",
  "lobo",
  "boi",
  "macaco",
  "onça",
  "galinha",
  "girafa",
  "jacare",
  "lagarta",
  "passaro",
  "aguia",
  "cavalho",
  "gato",
  "vaca",
  "cachorro",
  "raposa",
  "porco",
  "vagalume",
  "borboleta",
  "tartaruga",
  "hipopotamo",
  "cobra",
];
let palavraOc = ""; // palavra oculta
let palavraAdi = ""; // palavra que va adivinhando o jogador
let vidas = 4;
document.getElementById("botao").addEventListener("click", comprovar);

iniciar();

function iniciar() {
  palavraOc = palavras[Math.floor(Math.random() * palavras.length)];
  console.log(palavraOc);

  for (let index = 0; index < palavraOc.length; index++) {
    palavraAdi = palavraAdi + "_ ";
  }
  document.getElementById("frase").innerHTML = palavraAdi;
}

function comprovar() {
  let letra = document.getElementById("letra").value.toLowerCase();

  palavraOc = palavraOc.toLowerCase();
  let nuevo = "";

  for (let index = 0; index < palavraOc.length; index++) {
    if (letra == palavraOc[index]) {
      nuevo = nuevo + letra + " ";
    } else {
      nuevo = nuevo + palavraAdi[index * 2] + " ";
    }
  }
  if (nuevo == palavraAdi) {
    vidas--;
    document.getElementById("vidas").innerHTML =
      "O número de vidas restantes são:" + vidas;
  }
  palavraAdi = nuevo;
  document.getElementById("frase").innerHTML = palavraAdi;
  if (vidas == 0) {
    alert("Poxa as sua vidas acabaram :(");
  }
  if (palavraAdi.search("_") == -1) {
    alert("Uhuuu você venceu!!!");
  }

  document.getElementById("letra").value = "";
  document.getElementById("letra").focus();

  desenhar();
}

function desenhar() {
  var canvas = document.getElementById("tela");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    
    //Desenha a base da Forca
    ctx.beginPath();
    ctx.moveTo(30, 200);
    ctx.lineTo(30, 10);
    ctx.lineTo(150, 10);
    ctx.lineTo(150, 20);
    ctx.stroke();

    if (vidas <=3) {
      // Desenhar cabeçinha
      ctx.beginPath();
      ctx.arc(150, 40, 20, 0, Math.PI * 2);
      ctx.stroke();
    }

    if (vidas <= 2) {
      // Desenha corpinho
      ctx.beginPath();
      ctx.moveTo(150, 60);
      ctx.lineTo(150, 100);
      ctx.stroke();
    }

    if (vidas == 1) {
      ctx.beginPath(); //Desenha braçinhos
      ctx.moveTo(150, 60);
      ctx.lineTo(130, 100);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(150, 60);
      ctx.lineTo(170, 100);
      ctx.stroke();
    }

    if (vidas == 0) {
      ctx.beginPath(); //Desenha perninhas
      ctx.moveTo(150, 100);
      ctx.lineTo(170, 130);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(150, 100);
      ctx.lineTo(130, 130);
      ctx.stroke();
    }
  }
}
