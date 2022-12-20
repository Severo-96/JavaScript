class Avatar{
    lifePoints = 10;
    attackDamage = 1;

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
        if(this.lifePoints > 0){ //Com esse if, no momento que a vida se tornar zero, fica impossivel acessar os metodos
            if(this.y < this.yLim){
                this.y += move;
            };
        }; 
    };

    backward(move){
        if(this.lifePoints > 0){
            if(this.y > 0){
                this.y += move;
            };
        };
    };

    right(move){
        if(this.lifePoints > 0){
            if(this.x < this.xLim){
                this.x += move;
            };
        };
    };

    left(move){
        if(this.lifePoints > 0){
            if(this.x > 0){
                this.x += move;
            };
        };
    };

    addCoin(coin){
        if(this.lifePoints > 0){
            this.coin += coin;
        };
    };

    attack(){
        if(this.lifePoints > 0){}
        return this.attackDamage;
    };

    enemyDamage(enemyAttDam){
        if(this.lifePoints > 0){
            this.lifePoints -= enemyAttDam;
        };
    };
};