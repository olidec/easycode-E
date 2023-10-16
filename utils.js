export function print(args) {
  var element = document.querySelector("#output")
  var oldContent = element.textContent
  element.textContent = `${oldContent}\n> ${args}`
}

export function read() {
  var element = document.querySelector("#input")
  return element.value
}

export function parseArgs(input) {
  return input.split(" ")
}

export function $(callback) {
  const value = read()
  const result = callback(value)
  print(result)
}
