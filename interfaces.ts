

interface ILinkedNode<T> {
    data: number
    next: LinkedNode<T> | null 
    prev: LinkedNode<T> | null
  }
  
  interface ILinkedList<T> {
    head: LinkedNode<T> | null
    getLastNode(this: LinkedList<T>, node: LinkedNode<T>): LinkedNode<T>
    insertAtEnd(data: number): LinkedNode<T>
    insertInBegin(data: number): LinkedNode<T>
    search(data: number): Number 
    print(node: LinkedNode<T>): void
    Sort(): void  
    insert_after_sort(data: number): void 
  }

  




  interface Iarray_db<T> {
    array:  Array<number>
    search(data: number): boolean
    sortArray():void
    binarySearch(target: number): boolean
  }






interface Iqueue_LinkedList<T> {
    push(data: number):void
    top():number | null
    pop ():number | null
}

interface Iqueue_array<T> {
    push(data: number):void
    top():number | null
    pop ():number | null
}



interface stack_LinkedList<T> {
    push(data: number):void
    top():number | null
    pop ():number | null
}

interface stack_array<T> {
    push(data: number):void
    top():number
    pop ():number | undefined
}