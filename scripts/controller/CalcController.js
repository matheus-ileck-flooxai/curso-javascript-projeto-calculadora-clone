class CalcController{

    constructor(){
        
        this._displayCalc = "0";
        this._currentDate;
    }

    //get Retorna o valor de um atributo

    //set Adiciona um novo valor do atributo

    get displayCalc(){
        return this._displayCalc;
    }


    set displayCalc(value){
        this._displayCalc = value; 
    }

    get currentDate(){
        return this._currentDate;
    }

    set dataAtual(value){
        this._currentDate = value;

    }
}