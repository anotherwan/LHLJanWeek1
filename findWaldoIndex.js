function findWaldo(arr, found) {
  arr.forEach(function(value, index){
    if (value === "Waldo"){
      found(index)
    }
  })
}

function actionWhenFound(waldoIndex) {
  console.log(`"Found Waldo at index ${waldoIndex} !"`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
