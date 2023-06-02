//CLASS DO JOGADOR
class Jogador{
    //"Receita"
    constructor (){
      this.imagem = loadImage("jogo/IMG_jogo/Sorvete.png")
      this.posX = 280;
      this.posY = 278;
      this.largu = 80;
      this.altu = 130;
      this.velocidade =3.5;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altu;
      this.xInicial = this.PosX;
      this.xFinal = this.posX + this.largu;
      }
      
    //Movimentação
    mova(){
        //Parametro das imagens 
      image(this.imagem, this.posX, this.posY, this.largu, this.altu);
        //37 = esquerda
      if((keyIsDown(37)) && (this.xInicial>0)){
        this.posX -= this.velocidade;
      }
      
        //39 = direita
      if((keyIsDown(39)) && (this.xFinal<600)){
        this.posX += this.velocidade;
        }
      
        // Caulculo distancia do personagem com as bordas 
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altu;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largu;
    }
    }
  