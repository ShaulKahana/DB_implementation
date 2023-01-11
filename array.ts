let array: Array<number> = [];


for (let index = 0; index < 10000; index++) {
    let a = Math.floor(Math.random() * 500001)
      if (array.indexOf(a))
      {array.push(a)}
}

for (let index = 0; index <50; index++) {
  console.log(array[index])
}