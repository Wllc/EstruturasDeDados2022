class Pilha {
    constructor(size = 10) {
        this.topo = 0;
        this.dados = [];
        this.maxSize = size;
    }

    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo] = dado;
            this.topo++;
        } else {
            throw new Error("stack overflow");
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--;
        } else {
            throw new Error("stack underflow");
        }
    }

    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo-1];
        }
    }

    isFull() {
        return this.length() === this.maxSize;
    }

    isEmpty() {
        return this.length() === 0;
    }

    length() {
        return this.topo;
    }

    toString() {
        var auxDados = '';
        for(let i = 0; i < this.topo; i++){
            auxDados += this.dados[i];
        }
        return auxDados;
    }
}
/*
//QUESTÃO 02 LISTA1
FORMA 1
function inverte(string){
    let p1 = new Pilha();
    for(let i = string.length - 1; i >= 0; i--){
        p1.push(string.charAt(i));
    }   
    
    return p1.dados;
}
FORMA 2
function inverte(string){
    let p1 = new Pilha();
    let p2 = new Pilha();
    for(let i = 0; i < string.length; i++){
        p1.push(string.charAt(i));
    }
    let aux = p1.length();
    for(let i = 0; i < aux; i++){        
        p2.push(p1.top());
        p1.pop();
    }      
    return p2.dados;
}

console.log(inverte("ABACAXI")) 
*/



export default Pilha;