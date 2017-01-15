var words = ["ground", "control", "to", "major", "tom"];

function customMap(words, callback){
  let wordsLength = []
  words.forEach(function(word){
    wordsLength.push(word.length)
  })
  return wordsLength
}
console.log(customMap(words))
