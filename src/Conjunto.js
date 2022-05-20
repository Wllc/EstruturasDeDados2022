import ListaDuplamenteLigada from "./ListaDuplamenteLigada";

class Conjuto{
    constructor(){
        this.dados = new ListaDuplamenteLigada();
    }

    add(value){
        if(this.has(value)){
            return false;
        }else{
            this.dados.add(value); 
            return true;         
        }
    }

    delete(value){
        return this.dados.remove(value);
    }

    has(value){
        return this.dados.search(value);
    }

    clear(){
        this.dados.clear();
    }

    length(){
        return this.dados.length();
    }

    values(){
        return this.dados.asArray();
    }

    isEmpty(){
        return this.dados.isEmpty();
    }

    union(anotherset){
        let AuB = new Conjuto();
        let valuesA = this.values();
        let valuesB = anotherset.values();

        for(const i of valuesA){
            AuB.add(i);
        }
        for(const i of valuesB){
            AuB.add(i);
        }
        return AuB;
    }

    intersection(anotherset){
        let AiB = new Conjuto();
        let valuesB = anotherset.values();

        for(const i of valuesB){
            if(this.has(i)){
                AiB.add(i);
            }
        }
        return AiB;
    }

    contains(anotherset){
        let valuesB = anotherset.values();

        for(const i of valuesB){
            if(!this.has(i)){
                return false;
            }
        }
        return true;
    }

    isEqual(anotherset){
        return this.contains(anotherset) && anotherset.contains(this);
    }

    difference(anotherset){
        let AdB = new Conjuto();
        let valuesA = this.values();
        let valuesB = anotherset.values();

        for(const i of valuesA){
                AdB.add(i);        
        }
        for(const i of valuesB){
                AdB.delete(i);     
        }
        return AdB;
    }

}
export default Conjuto;