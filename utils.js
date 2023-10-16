function print(args) {
  var element = document.querySelector("#output")
  var oldContent = element.textContent
  element.textContent = `${oldContent}\n> ${args}`
}

function read() {
  var element = document.querySelector("#input")
  return element.value
}

function parseArgs(input) {
  return input.split(" ")
}

function $(callback) {
  const value = read()
  const result = callback(value)
  print(result)
}
