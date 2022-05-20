class Node{
    constructor(dado, prioridade){
        this.dado = dado;
        this.prioridade = prioridade;
    }
}
class FilaPrioridade{
    constructor(){
        this.tree = [];
        this.size = 0;
        this.tree[0] = new Node(0, 99999999)
    }

    add(dado, prioridade){      
        let novo_no = new Node(dado, prioridade);
        size++;
        this.tree[this.size] = novo_no;

        let pos_filho = this.size;
        let pos_pai = Math.trunc(pos_filho/2);

        while(this.tree[pos_filho].prioridade > this.tree[pos_pai].prioridade){
            let aux = this.tree[pos_filho];
            this.tree[pos_filho] = this.tree[pos_pai];
            this.tree[pos_pai] = aux;

            pos_filho = pos_pai;
            pos_pai = Math.trunc(pos_filho/2)
        }
        
    }

    remove(){
        let maior_prioridade = this.tree[1]
        let ultimo = this.tree[this.size];
        this.tree[1] = ultimo;
        this.size--;   
        let pos_pai = 1;
        while(pos_pai * 2 <= this.size){
            pos_pai = pos_filho;
            pos_filho = pos_pai * 2;
            if((pos_filho != this.size)
            &&
            (this.tree[pos_filho].prioridade < this.tree[pos_filho+1].prioridade)){
                pos_filho++;
            }
            if(ultimo.prioridade < this.tree[pos_filho].prioridade){
                this.tree[pos_pai] = this.tree[pos_filho];
            }
            else{
                break;
            }          
        }
        this.tree[pos_pai] = ultimo;
        return maior_prioridade;

    }   
}

export default FilaPrioridade;