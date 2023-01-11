
let globalindex: number = 0

class LinkedNode<T> {
    public data: T | null = null;
    public index: Number | null = 0;
    public next: LinkedNode<T> | null = null;
    public prev: LinkedNode<T> | null = null;

    constructor (data: T) {
      this.data = data 
      this.index = globalindex 
      globalindex++                
    }
}


class LinkedList<T> {

    public head: LinkedNode<T> | null = null;

    public getLastNode(this: LinkedList<T>, node: LinkedNode<T>): LinkedNode<T>{

        return node.next ? this.getLastNode(node.next) : node;
    }

    public insertAtEnd(data: T): LinkedNode<T> {
        const node = new LinkedNode(data);
        if (!this.head) {
          this.head = node;
        } else {
          const lastNode = this.getLastNode(this.head);
          node.prev = lastNode;
          lastNode.next = node;
        }
        return node;
      }
  
    public insertInBegin(data: T): LinkedNode<T> {

        const node = new LinkedNode(data);

        if (!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        return node;
    }

    public search(data: number): LinkedNode<T> | null {
        const checkNext = (node: LinkedNode<T>): LinkedNode<T> | null => {
          if (data===node.data){
            return node;
          }
          return node.next ? checkNext(node.next) : null;
        };
    
        return this.head ? checkNext(this.head) : null;
      }
    
}

const linkedList = new LinkedList<Number>();

for (let index = 0; index < 10000; index++) {
let a = Math.floor(Math.random() * 500001)
  linkedList.insertInBegin(a);
}

for (let index = 0; index < 500; index++) {
  let a = linkedList.search(index)
  if (a)
    console.log(a?.index, "  ", a?.data)
  
  
}





// let v: LinkedNode<Number> ;

// if (linkedList.head)
// {
//     v = linkedList.head; 
//     console.log(linkedList.getLastNode(v))
// }