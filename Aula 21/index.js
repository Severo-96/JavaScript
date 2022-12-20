class Avatar{
    constructor([_xC, _yC], _coin, _yLim, _xLim){
        this.x = _xC;
        this.y = _yC;
        this.coin = _coin;

        this.yLim = _yLim; //Considerando que o avatar se move em uma area x por y escolhida pelo usuario, os Lim
        this.xLim = _xLim; // representam o ponto maximo em cada direção que o personagem consegue se mover
    };

    get xPos(){
        return this.x;
    };

    get yPos(){
        return this.y;
    };
    
    get coinQuant(){
        return this.coin;
    };

    forward(move){
        if(this.y < this.yLim){
            this.y += move;
        };
    };

    backward(move){
        if(this.y > 0){
            this.y += move;
        };
    };

    right(move){
        if(this.x < this.xLim){
            this.x += move;
        };
    };

    left(move){
        if(this.x > 0){
            this.x += move;
        };
    };

    addCoin(coin){
        this.coin += coin;
    };
};