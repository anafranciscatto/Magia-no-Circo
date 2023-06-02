//CLASS DAS SORVETE
class FlechaCorracao{
    //"Receita"
     constructor(){
      this.imagem = imgFlechaCorracao [int(random(0,4.9))]
      this.posX =  random(50,580);
      this.posY = -50;
      this.velocidade = random (3, 4.9);
      this.largu = 65;
      this.altu = 75;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altu;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largu;
    }
    
  //movimentação "caindo" 
    caia(){
      this.posY +=this.velocidade;
      image (this.imagem, this.posX, this.posY, this.largu, this.altu);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altu;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largu;
    }
  }
