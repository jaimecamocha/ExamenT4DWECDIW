// JAIME FERNÁNDEZ CALVO
// 

export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    //constructor
    constructor(marca, modelo, color, fabricacion, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }


    //getter y setter
    get marca(){
        return this.#marca;
    }

    set marca(marca){
        this.#marca = marca;
    }

    get modelo(){
        return this.#modelo;
    }

    set modelo(modelo){
        this.#modelo = modelo;
    }

    get color(){
        return this.#color;
    }

    set color(color){
        this.#color = color;
    }

    get fabricacion(){
        return this.#fabricacion;
    }

    set fabricacion(fabricacion){
        this.#fabricacion = fabricacion;
    }

    get cilindrada(){
        return this.#cilindrada;
    }

    set cilindrada(cilindrada){
        this.#cilindrada = cilindrada;
    }
}