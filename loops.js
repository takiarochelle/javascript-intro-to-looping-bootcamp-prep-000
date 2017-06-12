function forLoop(array) {
  var newArray = array
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      newArray.push("I am 1 strange loop.")
    } else {
      newArray.push(`I am ${i} strange loops.`)
    }
  }
  return newArray
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    console.log('doo-bee-doo-bee-doo')
  } while (array.length > 0 && maybeTrue()) {
    array.pop()
  }
  return array
}
