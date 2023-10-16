export function testSuite({assert, funcs}) {
  describe("Aufgabe 1", () => {
    it("Die Funktion 'sayHello()' sollte existieren", () => {
      assert.equal(typeof funcs.sayHello, "function")
    })
  })

  describe("Aufgabe 2", () => {
    it("Die Funktion 'changeBackground()' sollte existieren", () => {
      assert.equal(typeof funcs.changeBackground, "function")
    })
    it("Sollte die Hintergrundfarbe von body verändern", () => {
      if (typeof document === "undefined") {
        it.skip()
      } else {
        const body = document.querySelector("body")
        const bgColor = document.querySelector("body").style.backgroundColor
        changeBackground()
        const bgColorNew = document.querySelector("body").style.backgroundColor
        assert.notEqual(bgColor, bgColorNew)
        body.style.backgroundColor = bgColor
      }
    })
  })

  describe("Aufgabe 3", () => {
    it("Die Funktion 'deleteText()' sollte existieren", () => {
      assert.equal(typeof deleteText, "function")
    })
    it("Es soll ein HTML-Element mit der ID 'to-delete' geben", () => {
      const elem = document.querySelector("#to-delete")
      assert.notEqual(elem, null)
    })
    it("Der Text vom Element #to-delete soll auf 'Inhalt gelöscht' gesetzt werden.", () => {
      const elem = document.querySelector("#to-delete")
      const textBefore = elem.textContent
      deleteText()
      const textAfter = elem.textContent
      assert.notEqual(textBefore, textAfter)
      assert.equal(textAfter, "Inhalt gelöscht")
      elem.textContent = textBefore
    })
  })

  describe("Aufgabe 4", () => {
    it("Die Funktion 'incrementCounter()' sollte existieren", () => {
      assert.equal(typeof incrementCounter, "function")
    })
    it("Es soll ein HTML-Element mit der ID 'counter' geben", () => {
      const elem = document.querySelector("#counter")
      assert.notEqual(elem, null)
    })
    it("Der Counter soll um eins hochgezählt werden, wen die Funktion 'incrementCounter()' verwendet wird.", () => {
      const elem = document.querySelector("#counter")
      const counterBefore = parseInt(elem.textContent)
      incrementCounter()
      const counterAfter = parseInt(elem.textContent)
      assert.notEqual(counterBefore, counterAfter)
      assert.equal(counterAfter, counterBefore + 1)
      elem.textContent = counterBefore
    })
  })

  describe("Aufgabe 5", () => {
    it("Die Funktion 'decrementCounter()' sollte existieren", () => {
      assert.equal(typeof decrementCounter, "function")
    })
    it("Es soll ein HTML-Element mit der ID 'counter' geben", () => {
      const elem = document.querySelector("#counter")
      assert.notEqual(elem, null)
    })
    it("Der Counter soll um eins vermindert werden, wen die Funktion 'decrementCounter()' verwendet wird.", () => {
      const elem = document.querySelector("#counter")
      const counterBefore = parseInt(elem.textContent)
      decrementCounter()
      const counterAfter = parseInt(elem.textContent)
      assert.notEqual(counterBefore, counterAfter)
      assert.equal(counterAfter, counterBefore - 1)
      elem.textContent = counterBefore
    })
  })

  describe("Aufgabe 6", () => {
    it("Die Funktion 'resetCounter()' sollte existieren", () => {
      assert.equal(typeof resetCounter, "function")
    })
    it("Es soll ein HTML-Element mit der ID 'counter' geben", () => {
      const elem = document.querySelector("#counter")
      assert.notEqual(elem, null)
    })
    it("Der Counter soll auf 0 gesetzt werden, wen die Funktion 'resetCounter()' verwendet wird.", () => {
      const elem = document.querySelector("#counter")
      const counterBefore = parseInt(elem.textContent)
      resetCounter()
      const counterAfter = parseInt(elem.textContent)
      assert.equal(counterAfter, 0)
      elem.textContent = counterBefore
    })
  })

  describe("Aufgabe 7", () => {
    it("Die Funktion 'writeText()' sollte existieren", () => {
      assert.equal(typeof writeText, "function")
    })
    it("Es soll ein HTML-Input-Element mit der ID 'input' geben", () => {
      const elem = document.querySelector("input#input")
      assert.notEqual(elem, null)
    })
    it("Es soll ein HTML-Element mit der ID 'output' geben", () => {
      const elem = document.querySelector("#output")
      assert.notEqual(elem, null)
    })
    it("Der Text von dem Eingabeelement #input, soll in das Element #output geschrieben werden.", () => {
      const input = document.querySelector("#input")
      const inputText = input.value
      const output = document.querySelector("#output")
      const outputBefore = output.textContent
      writeText()
      const outputTextAfter = output.textContent
      assert.equal(outputTextAfter, outputBefore + "\n" + inputText)
      output.textContent = outputBefore
    })
  })
}
