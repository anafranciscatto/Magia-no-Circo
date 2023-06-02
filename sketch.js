//variaveis 
      var fundo;
      var cupido;
      var imgFlechaCorracao =[];
      var flechaCorracao = [];
      var pontos = 0;
      var somBomba;
      var somSorvete;
      var imgAbertura;
      var imgFinal;
      var controleTela = "inicio";
      var vidas= 0;


//CARREGAMENTO DAS IMAGENS  
  function preload (){
  //Fundo
      fundo =loadImage ("jogo/IMG_jogo/FUNDO.png");
    
  //Variavel lista das flechas e corrações
      imgFlechaCorracao [0]= loadImage ("jogo/IMG_jogo/granulado.png");
      imgFlechaCorracao [1]= loadImage ("jogo/IMG_jogo/massa01.png");
      imgFlechaCorracao [2]= loadImage ("jogo/IMG_jogo/massa02.png");
      imgFlechaCorracao [3]= loadImage ("jogo/IMG_jogo/massa03.png");
      imgFlechaCorracao [3]= loadImage ("jogo/IMG_jogo/massa04.png");
      imgFlechaCorracao [4]= loadImage ("jogo/IMG_jogo/bumba.png");
      
    //Abertura e fim
      imgAbertura = loadImage ("jogo/IMG_jogo/inicio.png");
      imgFinal = loadImage ("jogo/IMG_jogo/GAME OVER.gif");

  //variavel do som 
      somBomba = loadSound("jogo/SOM/som_bomba.mp3");
      somSorvete = loadSound("jogo/SOM/som_sorvete.mp3")

  //Criação
      flechaCorracao[0]= new FlechaCorracao ();
      flechaCorracao [1]= new FlechaCorracao ();
      flechaCorracao [2]= new FlechaCorracao ();
      flechaCorracao [3]= new FlechaCorracao ();

      cupido = new Jogador();

      
  }
  

//fundo
    function setup() {
      createCanvas(600,400).parent("cjogo");

  }

  function keyPressed(){
    if(keyCode == 13);
      controleTela = "jogo";
  }


//RODAMENTO DO JOGO
  function draw() {
    //se a variavel for igual a inicio rodar a foto inicio ,,, else = mostrar jogo
    if(controleTela == "inicio"){
      mostraAbertura();
    }
    if(controleTela == "jogo"){
      executarJogo();
    }
    if(controleTela == "gameOver"){
      mostraFinal();
    }
  }
