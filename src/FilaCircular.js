class FilaCircular{
    constructor(tam = 5){
        this.dados = [];
        this.inicio = 1;
        this.fim = 1;
        this.capacidade = tam;
    }

    enqueue(dado){
        if(!this.isFull){
            this.dados[fim] = dado;
            if(this.fim === this.capacidade){               
                this.fim = 0;
            }
            else{               
                fim++;
            }            
        }
        else{
            throw new Error("queue overflow");
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            if(this.inicio === this.capacidade){               
                this.inicio = 0;
            }
            else{
                this.inicio++;
            }            
        }
        else{
            throw new Error("queue underflow");
        }
    }

    isEmpty(){
        return this.inicio === this.fim;
    }

    isFull(){
        return this.inicio === this.fim + 1;
    }

    front(){
        return this.dados[this.inicio];
    }

    clear(){
        this.inicio = this.fim = 1;
    }

    length(){
        if(this.isEmpty()){
            return 0;
        }
        else if(this.inicio < this.fim){
            return this.fim - this.inicio;
        }
        else if(this.inicio > this.fim){
            return this.capacidade - this.inicio + this.fim + 1;
        }
    }  
    
    toString(){
        
    }
}



export default FilaCircular;