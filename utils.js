export function print(args) {
  var element = document.querySelector("#output-content")
  const outputHeight = parseInt(
    getComputedStyle(document.querySelector(":root"))
      .getPropertyValue("--output-height")
      .split("px")[0],
  )
  const outputHeaderHeight = parseInt(
    getComputedStyle(document.querySelector(":root"))
      .getPropertyValue("--output-header-height")
      .split("px")[0],
  )
  const scrollToBottom =
    element.scrollHeight - element.scrollTop <=
    outputHeight - outputHeaderHeight
      ? true
      : false
  var oldContent = element.textContent
  element.textContent = `${oldContent}\n> ${args}`
  if (true /*scrollToBottom*/) {
    element.scrollTop = element.scrollHeight
  }
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

export function increaseFontSize() {
  const cssRoot = document.querySelector(":root")
  const rootStyles = getComputedStyle(cssRoot)
  let currentFontSize = rootStyles.getPropertyValue("--output-font-size")
  currentFontSize = currentFontSize.split("pt")[0]
  cssRoot.style.setProperty(
    "--output-font-size",
    `${parseInt(currentFontSize) + 2}pt`,
  )
}

export function decreaseFontSize() {
  const cssRoot = document.querySelector(":root")
  const rootStyles = getComputedStyle(cssRoot)
  let currentFontSize = rootStyles.getPropertyValue("--output-font-size")
  currentFontSize = currentFontSize.split("pt")[0]
  cssRoot.style.setProperty(
    "--output-font-size",
    `${parseInt(currentFontSize) - 2}pt`,
  )
}

export function decreaseOutputHeight() {
  const cssRoot = document.querySelector(":root")
  const rootStyles = getComputedStyle(cssRoot)
  let currentFontSize = rootStyles.getPropertyValue("--output-height")
  currentFontSize = currentFontSize.split("vh")[0]
  cssRoot.style.setProperty(
    "--output-height",
    `${parseInt(currentFontSize) - 2}vh`,
  )
}

export function increaseOutputHeight() {
  const cssRoot = document.querySelector(":root")
  const rootStyles = getComputedStyle(cssRoot)
  let currentFontSize = rootStyles.getPropertyValue("--output-height")
  currentFontSize = currentFontSize.split("vh")[0]
  cssRoot.style.setProperty(
    "--output-height",
    `${parseInt(currentFontSize) + 2}vh`,
  )
}

export function clearConsole() {
  const consoleElement = document.querySelector("#output-content")
  consoleElement.textContent = ">"
}
