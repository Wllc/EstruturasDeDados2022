class Fila{
    constructor(size){      
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
        this.maxSize = size;
    }

    enqueue(dado){
        if(!this.isFull()){
            this.dados[this.fim] = dado;
            this.fim++;
        }
        else{
            throw new Error("queue overflow");
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            this.inicio++;
        }
        else{
            throw new Error("queue underflow");
        }
    }

    isEmpty(){
        return this.length() === 0;
    }
    isFull(){
        return  this.length() === this.maxSize;
    }

    front(){
        return this.dados[this.inicio];
    }

    clear(){
        this.fim = 0;
        this.inicio = 0;
    }

    length(){
        return this.fim - this.inicio;
    }

    toString(){
        var auxDados = '';
        for(let i = 0; i < this.fim; i++){
            auxDados += this.dados[i];
        }
        return auxDados;
    }
}
/*
QUESTÃO 04 LISTA 02
function intercalar(fila1 = [],fila2 = []){
    let f3 = new Fila();
    let aux = 0;
    while(aux < fila1.length || aux < fila2.length){
        f3.enqueue(fila1[aux])
        f3.enqueue(fila2[aux])
        aux++;
    }
     return f3.dados;   
}
let f1 = new Fila();
let f2 = new Fila();
f1.enqueue(1)
f1.enqueue(3)
f1.enqueue(5)
f1.enqueue(7)
f1.enqueue(9)
f2.enqueue(2)
f2.enqueue(4)
f2.enqueue(6)
f2.enqueue(8)
f2.enqueue(10)
console.log(intercalar(f1.dados, f2.dados))
*/

export default Fila;