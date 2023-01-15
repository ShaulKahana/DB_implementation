export class array_db<T> {

    public array:  Array<number> = [];

    public search(data: number): boolean{
      for (let index = 0; index < this.array.length; index++) {
        if (this.array[index] === data) {
          return true
        }
      }
      return false
    }
    
    public sortArray() {
      for (let i = 0; i < this.array.length; i++) {
          for (let j = 0; j < this.array.length - i - 1; j++) {
              if (this.array[j] > this.array[j + 1]) {
                  let temp = this.array[j];
                  this.array[j] = this.array[j + 1];
                  this.array[j + 1] = temp;
              }
          }
      }
      return this.array;
    }
    
    public binarySearch(target: number): boolean {
        let left = 0;
        let right = this.array.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (this.array[mid] === target) {
                return true;
            } else if (this.array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}


const arrayList = new array_db<Number>();



export function array_meneger(action: string, data: number): void{

  let temp = false;

  switch (action) {

      case "search before sort":
        temp = arrayList.search(data)
        if (temp) 
          console.log(`${data} is in the array`)
        else
          console.log(`${data} is not in array`)

      case "search after sort":
        arrayList.sortArray()
        console.log(`The Array sorted successfully`)
        temp = arrayList.binarySearch(data)
        
        if (temp) 
          console.log(`the ${data} is in the array ${temp}`)
        else
          console.log(`the ${data} is not in array`)

        break;
  }
}

export function fill_array():void{
  for (let index = 0;index < 50000; index++) {
      arrayList.array.push(Math.floor(Math.random() * 50000) + 1)
  }
}


//אפשר להריץ את הפקודות למטה אם רוצים לראות אם זה עובד באמת תודה

// for (let index = 0; arrayList.array.length < 5; index++) {
//   let a = Math.floor(Math.random() * 5) + 1;
//   if (!arrayList.search(a))
//   {
//     arrayList.array.push(a)
//   }
// }

// for (let index = 0; index <arrayList.array.length; index++) {
//   console.log(arrayList.array[index])
// }

// console.log()
// console.log()
// console.log(arrayList.search(2))
// console.log()
// console.log(arrayList.search(6))
// console.log()
// console.log()



// arrayList.sortArray()

// for (let index = 0; index <arrayList.array.length; index++) {
//   console.log(arrayList.array[index])
// }
// console.log()


// console.log(arrayList.binarySearch(2))
// console.log()
// console.log(arrayList.binarySearch(6))