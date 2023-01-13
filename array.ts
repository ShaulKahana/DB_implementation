class array_db<T> {

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
    
    public binarySearch(target: number) {
        let left = 0;
        let right = this.array.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (this.array[mid] === target) {
                return mid;
            } else if (this.array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}


const arrayList = new array_db<Number>();


for (let index = 0; arrayList.array.length < 4; index++) {
    let a = Math.floor(Math.random() * 4) + 1;
    if (!arrayList.search(a))
    {
      arrayList.array.push(a)
    }
}

for (let index = 0; index <arrayList.array.length; index++) {
  console.log(arrayList.array[index])
}

console.log(arrayList.search(2))
console.log(arrayList.search(5))


arrayList.sortArray()

for (let index = 0; index <arrayList.array.length; index++) {
  console.log(arrayList.array[index])
}

console.log(arrayList.search(2))
console.log(arrayList.search(5))