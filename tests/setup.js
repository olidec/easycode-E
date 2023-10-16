import "https://unpkg.com/mocha/mocha.js"
import "https://unpkg.com/chai/chai.js"

mocha.setup("bdd")

const mochaElement = document.createElement("div")
mochaElement.id = "mocha"
document.querySelector("body").appendChild(mochaElement)
