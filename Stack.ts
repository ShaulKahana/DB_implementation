import {LinkedList } from "./linkList"; 
import {array_db } from "./array"; 

class stack_LinkedList<T> extends LinkedList<T> {

    public linkedList = new LinkedList<Number>();


    public push(data: number):void{
        this.linkedList.insertInBegin(data) 
    }
    
    
    
     public top():number | null{

        let result = this.linkedList.head?.data
        return result? result: null;
     }


    // public pop (data: number):number | null{

    //     if (!this.linkedList.head) {
    //        return null;
    //     } else {
    //         this.head?.next = ;
    //         node.next = this.head;
    //         this.head = node;
    //     }
    // }



}


class stack_array<T> extends array_db<T>{

    


    
}
    