import {LinkedList } from "./linkList"; 
import {array_db } from "./array"; 

class stack_LinkedList<T> extends LinkedList<T> {

    public push(data: number):void{
        this.insertInBegin(data) 
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


class stack_array<T> extends array_db<T>{

    public push(data: number):void{
        this.array.push(data) 
    }
    
    
     public top():number {
        return this.array[this.array.length-1]
     }


    public pop ():number | undefined{
        return  this.array.pop()
    }    
}

const stackList = new stack_LinkedList<Number>();

const stackarray = new stack_array<Number>();

export function stack_linklist_meneger(action: string, data: number = 0): void{

    switch (action) {
        case "push":
            stackList.push(data)
            console.log(`${data} pushed successfully to the stack`);
            console.log("the stack linklist is now")
            if (stackList.head) {
                stackList.print(stackList.head)
            }

            break;

        case "top":
            console.log(`${stackList.top()} is on the top of the stack`)
            break;

        case "pop":
            console.log(`${stackList.pop()} is poped successfully from the stack`)
            break;
    }
}


export function stack_array_meneger(action: string, data: number = 0): void{

    switch (action) {
        case "push":
            stackarray.push(data)
            console.log(`${data} pushed successfully to the stack`);
            console.log("the stack is now")
            console.log(stackarray)
            break;

        case "top":
            console.log(`${stackarray.top()} is on the top of the stack`)
            break;

        case "pop":
            console.log(`${stackarray.pop()} is poped successfully from the stack`)
            console.log("the stack is now")
            console.log(stackarray)
            break;
    }
}

export function fill_stack():void{
    for (let index = 0; index < 10; index++) {
        let temp = Math.floor(Math.random() * 10) + 1;
        stackList.push(temp)
        stackarray.push(temp)
    }
    console.log("the stack is now")
    console.log(stackarray)

}
  



// stackList.push(5)

// stackList.push(3)
// stackList.push(1)
// stackList.push(4)
// stackList.push(2)

// console.log(stackList.top())
// console.log(stackList.pop())
// console.log(stackList.top())
// console.log(stackList.pop())
// console.log(stackList.top())

// console.log("dfdfdfdfdfdfdfdfdf")



// stackarray.push(5)

// stackarray.push(3)
// stackarray.push(1)
// stackarray.push(4)
// stackarray.push(2)

// console.log(stackarray.top())
// console.log(stackarray.pop())
// console.log(stackarray.top())
// console.log(stackarray.pop())
// console.log(stackarray.top())
    