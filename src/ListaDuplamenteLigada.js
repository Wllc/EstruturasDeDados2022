class Node{
    constructor(dado){
        this.dado = dado;
        this.anterior = null;
        this.proximo = null;
    }
}
class ListaDuplamenteLigada{
    constructor(){       
        this.head = null;
        this.tail = null;
    }

    add(dado){
        let novo_no = new Node(dado);
        if(this.isEmpty()){
            this.head = novo_no;
            this.tail = novo_no;
            novo_no.proximo = null;
            novo_no.anterior = null;
        }
        else{
            novo_no.proximo = this.head;
            novo_no.anterior= null;          
            this.head.anterior = novo_no;
            this.head = novo_no;
        }    
    }

    append(dado){
        let novo_no = new Node(dado);
        if(this.isEmpty()){
            this.head = novo_no;
            this.tail = novo_no;
            novo_no.proximo = null;
            novo_no.anterior = null;
        }
        else{
            novo_no.anterior = this.tail;
            novo_no.proximo = null;
            this.tail.proximo = novo_no;
            this.tail = novo_no;
        }
    }
    
    removeFirst(){
        if(this.isEmpty()){
            throw new Error("A lista está vazia!");
        }
        else if(this.length() === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = this.head.proximo;
            this.head.anterior = null;
        }
    }
    
    remove(dado) {
		if (!this.isEmpty()) {
			let auxDados = this.head;
			let prox = this.head.proximo;
			let ult = this.tail;
			let aux;

			if (auxDados.dado === dado) {
				return this.removeFirst();
			} else if (ult.dado === dado) {
				return this.removeLast();
			} else {
				while (prox != null) {
					if (prox.dado === dado) {
						aux = prox.proximo;
						auxDados.proximo = prox.proximo;
						aux.anterior = auxDados;
						return true;
					}					
					auxDados = prox;
					prox = prox.proximo;
				}
			}
		}

		return false;
	}

    removeLast(){
        if(this.isEmpty()){
            throw new Error("A lista está vazia!");
        }else if(this.length() === 1){
            this.head = null;
            this.tail = null;         
        }
        else{
            this.tail = this.tail.anterior;
            this.tail.proximo = null;
        }        
    }

    addAt(dado, pos){
        if(pos >= this.length()){
            this.append(dado);
        }
        else if(pos <= 0){
            this.add(dado);
        }
        else{
            let novo_no = new Node(dado)
            let aux = 1;
            let aux_a = this.head;
            let aux_b = this.head.proximo;

            while(aux != pos){
                aux_a = aux_b;
                aux_b = aux_b.proximo;
                aux++;
            }
            aux_a.proximo = novo_no;
            novo_no.proximo = aux_b;
            novo_no.anterior = aux_a;
            aux_b.anterior = novo_no;
        }
    }

    removeAt(pos){    
        if(this.isEmpty()){
            throw new Error("A lista está vazia!");
        }
        else if(pos < 0){
            throw new Error("Está posição não existe na lista!");
        }
        else if(pos >= this.length()){
            throw new Error("Está posição não existe na lista!");
        }
        else{
            if(pos === 0){
                this.removeFirst();
            }
            else if(pos === this.length() - 1){
                this.removeLast();
            }
            else{
                let aux_a = this.head;
				let aux_b = this.head.proximo;              
                let aux = 0;

                while(aux != pos){
                    aux_a = aux_b;
                    aux_b = aux_b.proximo;
                    aux++;
                }
                aux_b.anterior = aux_a.anterior;
                aux_a = aux_a.anterior;
                aux_a.proximo = aux_b
            }         
        }      
    }

    isEmpty(){
        return this.head === null;
    }

    length(){
        let cont = 0;
        let aux = this.head;
        
        while(aux != null){
            aux = aux.proximo
            cont++;
        }
        return cont;
    }

    search(dado){
        if(this.isEmpty()){
            return false;
        }else{
            let aux = this.head;
            while(aux !== null){
                if(aux.dado == dado){
                    return true
                }
                aux = aux.proximo;
            }
            return false;
        }
    } 
    
    toString(){
        let aux = this.head;
        let txt = "";
        while(aux != null){
            txt = txt + aux.dado + (aux.proximo ? ", " : ".");
            aux = aux.proximo;
        }
        return txt;
    }

    asArray(){
        let aux = this.head;
        let dados = [];
        while(aux != null){
            dados.push(aux.dado);
            aux = aux.proximo;
        }
        return dados;
    }

    clear(){
        this.head = null;
        this.tail = null;
    }
}



export default ListaDuplamenteLigada;