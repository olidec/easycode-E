export function testSuite({ assert, funcs }) {
  function nit(description, callback) {
    it(description, function () {
      if (typeof window === "undefined") {
        this.skip()
      } else {
        callback()
      }
    })
  }

  describe("Aufgabe 1", function () {
    it("Die Funktion 'sayHello()' sollte existieren", function () {
      assert.equal(typeof funcs.sayHello, "function")
    })
  })

  describe("Aufgabe 2", function () {
    it("Die Funktion 'changeBackground()' sollte existieren", function () {
      assert.equal(typeof funcs.changeBackground, "function")
    })
    nit("Sollte die Hintergrundfarbe von body verändern", function () {
      const body = document.querySelector("body")
      const bgColor = document.querySelector("body").style.backgroundColor
      changeBackground()
      const bgColorNew = document.querySelector("body").style.backgroundColor
      assert.notEqual(bgColor, bgColorNew)
      body.style.backgroundColor = bgColor
    })
  })

  describe("Aufgabe 3", function () {
    it("Die Funktion 'deleteText()' sollte existieren", function () {
      assert.equal(typeof funcs.deleteText, "function")
    })
    nit("Es soll ein HTML-Element mit der ID 'to-delete' geben", function () {
      const elem = document.querySelector("#to-delete")
      assert.notEqual(elem, null)
    })
    nit(
      "Der Text vom Element #to-delete soll auf 'Inhalt gelöscht' gesetzt werden.",
      function () {
        const elem = document.querySelector("#to-delete")
        const textBefore = elem.textContent
        funcs.deleteText()
        const textAfter = elem.textContent
        assert.notEqual(textBefore, textAfter)
        assert.equal(textAfter, "Inhalt gelöscht")
        elem.textContent = textBefore
      },
    )
  })

  describe("Aufgabe 4", function () {
    it("Die Funktion 'incrementCounter()' sollte existieren", function () {
      assert.equal(typeof funcs.incrementCounter, "function")
    })
    nit("Es soll ein HTML-Element mit der ID 'counter' geben", function () {
      const elem = document.querySelector("#counter")
      assert.notEqual(elem, null)
    })
    nit(
      "Der Counter soll um eins hochgezählt werden, wen die Funktion 'incrementCounter()' verwendet wird.",
      function () {
        const elem = document.querySelector("#counter")
        const counterBefore = parseInt(elem.textContent)
        funcs.incrementCounter()
        const counterAfter = parseInt(elem.textContent)
        assert.notEqual(counterBefore, counterAfter)
        assert.equal(counterAfter, counterBefore + 1)
        elem.textContent = counterBefore
      },
    )
  })

  describe("Aufgabe 5", function () {
    it("Die Funktion 'decrementCounter()' sollte existieren", function () {
      assert.equal(typeof funcs.decrementCounter, "function")
    })
    nit("Es soll ein HTML-Element mit der ID 'counter' geben", function () {
      const elem = document.querySelector("#counter")
      assert.notEqual(elem, null)
    })
    nit(
      "Der Counter soll um eins vermindert werden, wen die Funktion 'decrementCounter()' verwendet wird.",
      function () {
        const elem = document.querySelector("#counter")
        const counterBefore = parseInt(elem.textContent)
        funcs.decrementCounter()
        const counterAfter = parseInt(elem.textContent)
        assert.notEqual(counterBefore, counterAfter)
        assert.equal(counterAfter, counterBefore - 1)
        elem.textContent = counterBefore
      },
    )
  })

  describe("Aufgabe 6", function () {
    it("Die Funktion 'resetCounter()' sollte existieren", function () {
      assert.equal(typeof funcs.resetCounter, "function")
    })
    nit("Es soll ein HTML-Element mit der ID 'counter' geben", function () {
      const elem = document.querySelector("#counter")
      assert.notEqual(elem, null)
    })
    nit(
      "Der Counter soll auf 0 gesetzt werden, wen die Funktion 'resetCounter()' verwendet wird.",
      function () {
        const elem = document.querySelector("#counter")
        const counterBefore = parseInt(elem.textContent)
        funcs.resetCounter()
        const counterAfter = parseInt(elem.textContent)
        assert.equal(counterAfter, 0)
        elem.textContent = counterBefore
      },
    )
  })

  describe("Aufgabe 7", function () {
    it("Die Funktion 'writeText()' sollte existieren", function () {
      assert.equal(typeof funcs.writeText, "function")
    })
    nit("Es soll ein HTML-Input-Element mit der ID 'input' geben", function () {
      const elem = document.querySelector("input#input")
      assert.notEqual(elem, null)
    })
    nit("Es soll ein HTML-Element mit der ID 'output' geben", function () {
      const elem = document.querySelector("#output")
      assert.notEqual(elem, null)
    })
    nit(
      "Der Text von dem Eingabeelement #input, soll in das Element #output geschrieben werden.",
      function () {
        const input = document.querySelector("#input")
        const inputText = input.value
        const output = document.querySelector("#output")
        const outputBefore = output.textContent
        funcs.writeText()
        const outputTextAfter = output.textContent
        assert.equal(outputTextAfter, outputBefore + "\n" + inputText)
        output.textContent = outputBefore
      },
    )
  })

  describe("Aufgabe 8", function () {
    it("Die Funktion 'aufgabe08()' sollte existieren", function () {
      assert.equal(typeof funcs.aufgabe08, "function")
    })
  })

  describe("Aufgabe 1 (DC)", function () {
    it("Die Funtion 'deleteE()' soll existieren.", function () {
      assert.equal(typeof funcs.deleteE, "function")
    })
    it("Die Eingabe 'e' wird zum leeren String ''.", function () {
      const input = 'e'
      const res = funcs.deleteE(input)
      assert.equal(res,'')
    })
    it("Auch grosse 'E's werden gelöscht", function () {
      const input = 'E'
      const res = funcs.deleteE(input)
      assert.equal(res,'')
    })
  })


  describe("Aufgabe 2 (DC)", function () {
    it("Die Funtion 'upperCase()' soll existieren.", function () {
      assert.equal(typeof funcs.upperCase, "function")
    })
    it("Die Eingabe 'abc' wird zu 'ABC'.", function () {
      const input = 'abc'
      const res = funcs.upperCase(input)
      assert.equal(res,'ABC')
    })
  })


}


