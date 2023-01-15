import {LinkedList } from "./linkList"; 
import {array_db } from "./array"; 

class queue_LinkedList<T> extends LinkedList<T> {

    public push(data: number):void{
        this.insertAtEnd(data) 
    }


    public top():number | null{
        return this.head?.data? this.head.data: null;
    }
    

    public pop ():number | null{
        if (!this.head) {
           return null;
        } else {
            let result = this.head.data;
            this.head =  this.head.next
            return   result         
        }
    }
}


class queue_array<T> extends array_db<T>{


    public push(data: number):void{
        this.array.push(data) 
    }
    
    
     public top():number {
        return this.array[0]
     }


    public pop ():number | undefined{
        return  this.array.shift()
    }    
}

const queueList = new queue_LinkedList<Number>();

const queuearray = new queue_array<Number>();

export function queue_linklist_meneger(action: string, data: number = 0): void{

    switch (action) {
        case "push":
            queueList.push(data)
            console.log(`${data} pushed successfully to the queue`);
            console.log("the queue linklist is now")
            if (queueList.head) {
                queueList.print(queueList.head)
            }

            break;

        case "top":
            console.log(`${queueList.top()} is on the top of the queue`)
            break;

        case "pop":
            console.log(`${queueList.pop()} is poped successfully from the queue`)
            break;
    }
}


export function queue_array_meneger(action: string, data: number = 0): void{

    switch (action) {
        case "push":
            queuearray.push(data)
            console.log(`${data} pushed successfully to the queue`);
            console.log("the queue is now")
            console.log(queuearray)
            break;

        case "top":
            console.log(`${queuearray.top()} is on the top of the queue`)
            break;

        case "pop":
            console.log(`${queuearray.pop()} is poped successfully from the queue`)
            console.log("the queue is now")
            console.log(queuearray)
            break;
    }
}

export function fill_queue():void{
    for (let index = 0; index < 10; index++) {
        let temp = Math.floor(Math.random() * 10) + 1;
        queueList.push(temp)
        queuearray.push(temp)
    }
    console.log("the queue is now")
    console.log(queuearray)

}
  