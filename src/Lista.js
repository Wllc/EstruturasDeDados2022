class Node{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}
class Lista{
    constructor(){
        this.head = new Node();
    }

    add(dado){     
        let novo_no = new Node(dado);

        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
    }

    append(dado){
        let novo_no = new Node(dado);

        if(this.isEmpty){
            this.head.proximo = novo_no;
        }
        else{   
            /*        
            let node_a = this.head;
            let node_b = this.head.proximo;
            while(node_b !== null){
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_b.proximo = novo_no;
            novo_no.proximo = null;
            */
           let aux = this.head.proximo;
           while(aux.proximo !== null){
               aux = aux.proximo;
           }
           aux.proximo = novo_no;
        }
        
    }

    addAt(dado, pos){
        if(pos >= this.size()){
            this.append(dado);
        }
        else if(pos <= 0){
            this.add(dado);
        }
        else{
            let novo_no = new Node(dado);    

            let node_a = this.head;
            let node_b = this.head.proximo;

            for(let i = 0; i < pos; i++){
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_a.proximo = novo_no;
            novo_no.proximo = node_b;
            
        }
        
    }

    removeFirst(){
        if(this.isEmpty){
            throw new Error("A lista está vazia!");
        }
        else{
            let aux = head.proximo;
            this.head.proximo = aux.proximo;
        }
    }
    
    removeLast(){
        if(this.isEmpty){
            throw new Error("A lista está vazia!");
        }
        else{
            let node_a = this.head;
            let node_b = this.head.proximo;
            while(node_b.proximo !== null){
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_a.proximo = null; // node_a.proximo = node_b.proximo;
        }
    }

    removeAt(pos){
        if(this.isEmpty){
            throw new Error("A lista está vazia!");
        }
        else if(pos > this.size()){
            throw new Error("Está posição é MAIOR que o tamanho da lista")
        }
        else if(pos < 0){
            throw new Error("Está posição é MENOR que o tamanho da lista")
        }
        else{
            if(pos === 0){
                this.removeFirst();
            }
            else if(pos === this.size()){
                this.this.removeLast();
            }
            else{
                let node_a = this.head;
                let node_b = this.head.proximo;
                for(let i = 0; i != pos; i++){
                    node_a = node_b;
                    node_b = node_b.proximo;
                }
                node_a.proximo = node_b.proximo;
            }
            
        }
    }

    size(){
        let cont = 0;
        let aux = this.head.proximo
        while(aux!=null){
            aux = aux.proximo
            cont++;
        }
        return cont;
    }

    isEmpty(){
        this.head.proximo === null;
    }

    search(dado){
        if(this.isEmpty){
            return false;
        }
        else{
            let aux = this.head.proximo;
            while(aux.dado !== dado){
                if(aux.proximo != null){
                    aux = aux.proximo;
                }              
            }
            return aux === dado;
        }
    }

    length(){
        if(this.isEmpty){
            throw new Error("A lista está vazia!")
        }
        else{
            let aux = this.head.proximo;       
            for(let i = 0; aux.proximo != null; i++){
                aux = aux.proximo;
            }
            return i + 1;
        }       
    }

    clear(){
        this.head = new Node(null);
    }
}

export default Lista;