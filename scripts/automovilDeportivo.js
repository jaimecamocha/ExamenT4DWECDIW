// JAIME FERNÁNDEZ CALVO
// 

export class automovilDeportivo{
    #potenciaMotor;

    //constructor
    constructor(marca, modelo, color, fabricacion, cilindrada, potenciaMotor){
        super(marca, modelo, color, fabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    //getter y setter
    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(potenciaMotor){
        this.#potenciaMotor = potenciaMotor;
    }
}