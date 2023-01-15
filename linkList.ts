let globalindex: number = 0

class LinkedNode<T> {
    public data: number ;
    public index: number;
    public next: LinkedNode<T> | null = null;
    public prev: LinkedNode<T> | null = null;

    constructor (data: number) {
      this.data = data 
      this.index = globalindex 
      globalindex++                
    }
}


export class LinkedList<T> {

    public head: LinkedNode<T> | null = null;

    public getLastNode(this: LinkedList<T>, node: LinkedNode<T>): LinkedNode<T>{

        while (node.next != null) {
          node = node.next;
        }

        return node;
    }

    public insertAtEnd(data: number): LinkedNode<T> {
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
  
    public insertInBegin(data: number): LinkedNode<T> {

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

    public search(data: number): Number 
    {
      let current = this.head ? this.head : null;
        while (current != null) {
            if (current.data === data && current.index != null)
                return current.index;
            current = current.next;
        }
        return -1;
    }

    public print(node: LinkedNode<T>): void
    {
      console.log(node);
      while (node.next != null) {
        node = node.next;
        console.log(node);
      }
    }

    public Sort(): void  
    {

      if (this.head) {
        let last: LinkedNode<Number> | null = this.getLastNode(this.head)
        while (last) {
            if(this.head){
              let node: LinkedNode<Number> | null = this.head;
              while (node != last && node ) {
                let next: LinkedNode<Number> | null = node.next
                if (next && node.data > next.data) {
                    let temp = node.data
                    node.data = next.data 
                    next.data =  temp;
                }
                node = next;
              }
          last = last.prev; // shorten the range that must be bubbled through
        }
       }
      } 
    }

    public insert_after_sort(data: number): void 
    {

      let node:  LinkedNode<T> | null = new LinkedNode(data) ;

        if (this.head===null) {
            this.head = node;
        } else {
          let current = this.head ? this.head : null;
          while (current !== null && current.next !== null && current.data < data) {
                current = current.next;
          }

          if (current === this.head) {
            node.index = this.head.index 
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            node = node.next;
            while (node !== null) {
              node.index = node.index +1;
              node = node.next;
            }
            return
          }

          if (current !== null && current.next !== null) {
            current = current.prev
          }

          if(node !==null && current !== null){
            node.index = current.index +1
            node.next = current.next;
            current.next = node;
            node.prev = current
            if (node.next!= null) {
              node.next.prev = node
            }
            node = node.next;
            while (node !== null) {
              node.index = node.index +1;
              node = node.next;
            }
              
          }
        }
    }



}

const linkedList = new LinkedList<Number>();


export function LinkedList_meneger(action: string, data: number = 0): void{

  let temp: Number = -1;

  switch (action) {
      case "search before sort":
        temp = linkedList.search(data)
        if (temp === -1) 
          console.log(`${data} is not in link List`)
        else
          console.log(`${data} is in the link List in index ${temp}`)

        break;
        
      case "search after sort":
        linkedList.Sort()
        temp = linkedList.search(data)
        if (temp === -1) 
          console.log(`${data} is not in the link List`)
        else
          console.log(`${data} is in the link List in index ${temp}`)
        
        break;

      case "insert after sort":
        linkedList.Sort()
        linkedList.insert_after_sort(data)
        console.log(`${data} insert successfully to the link List`);
        break;
  }
  
}

export function fill_LinkedList():void{
    for (let index = 0; index < 50000; index++) {
      linkedList.insertAtEnd(Math.floor(Math.random() * 50000) +1);
    }
}


//אפשר להריץ את הפקודות למטה אם רוצים לראות אם זה עובד באמת תודה

// const linkedList = new LinkedList<Number>();

// for (let index = 0; globalindex < 4; index++) {
//   let a = Math.floor(Math.random() * 4) +1;
//   if (linkedList.search(a) ===-1) {
//     linkedList.insertAtEnd(a);
//   }
// }

// if (linkedList.head) {
//   linkedList.print(linkedList.head)
// } 


// linkedList.Sort();

// // if (linkedList.head) {
// //   linkedList.print(linkedList.head)
// // } 

// console.log("");
// console.log("");
// console.log("");
// console.log("");
// console.log("");
// console.log("");
// console.log("");

// linkedList. insert_after_sort(5)

// if (linkedList.head) {
//   linkedList.print(linkedList.head)
// } 