function executarJogo(){
    background(fundo); 
    //"Chama" Cupido 
  
        cupido.mova();
    //Coloca em movimento as flechas de forma aleatoria 
        for (let i=0;i<flechaCorracao.length; i++){
          flechaCorracao[i].caia();
  
          //Quando atingir o solo morrer e renascer outra 
          if (flechaCorracao[i].posY >500){
            flechaCorracao[i]= new FlechaCorracao (flechaCorracao[i].posX)
          }
          
          //Toque
          if(cupido.xInicial < flechaCorracao[i].xFinal &&
                 cupido.xFinal > flechaCorracao[i].xInicial &&
                 cupido.yInicial < flechaCorracao[i].yFinal &&
                 cupido.yFinal > flechaCorracao[i].yInicial 
                ){
                somSorvete.play();
            //é a bomba?
            if (flechaCorracao[i].imagem == imgFlechaCorracao[4]){
                  //som
                    somBomba.play();
                    pontos = 0;
                    vidas = vidas +1;
                    FlechaCorracao.velocidade = 3.5;
                    flechaCorracao[i] = new FlechaCorracao();
                }
            
              //Tentativa de aumentar a velocidade daos sorvetes (FlechaCorracao)
               else{
                  flechaCorracao[i] = new FlechaCorracao();
                  flechaCorracao[i].velocidade += 0.5;
                  pontos += 1;
                }

                //contagem vida
                if(vidas == 3){
                  controleTela = "gameOver";
                  pontos=0;
                  vidas=0;
              }
      
        }
    }
      //Pontos contagem 
        textSize(20)
        text("Pontos: " + pontos,10,50)  

        //Vidas contagem 
        textSize(20)
        fill ("black")
        text("Tentativas: " +vidas,473,20)
      
            //Se pontos for = a 20 a velocidade do sorvete (cupido) serra igual a ++ o.2
            if (pontos == 10){
              cupido.velocidade += 0.1;
              if (pontos == 15){
                cupido.velocidade += 0.1;}
                if (pontos == 20){
                  cupido.velocidade += 0.1;}
                  if (pontos == 25){
                    cupido.velocidade += 0.1;}
                    if (pontos == 30){
                      cupido.velocidade += 0.1;}

    }
  }