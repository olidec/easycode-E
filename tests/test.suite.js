export function testSuite({ assert, funcs, APP }) {
  function nit(description, callback) {
    it(description, function () {
      if (typeof window === "undefined") {
        this.skip()
      } else {
        callback()
      }
    })
  }

  if (APP.type === "address") {
    describe("Vorname korrekt", function () {
      it("Die Funktion 'addressCheckFirstname()' soll existieren", function () {
        assert.equal(typeof funcs.addressCheckFirstname, "function")
      })
      it("Die Funktion 'addressCheckFirstname()' soll existieren", function () {
        assert.equal(typeof funcs.addressCheckFirstname, "function")
      })
      it("Falsch wenn Vorname leer ist", function () {
        const input = ""
        const res = funcs.addressCheckFirstname(input)
        assert.equal(res, false)
      })
      it("Richtig wenn Vorname länger wie ein Zeichen ist", function () {
        const input = "C"
        const res = funcs.addressCheckFirstname(input)
        assert.equal(res, true)
      })
    })
  } else {
    describe("Aufgabe 01", function () {
      it("Die Funktion 'aufgabe01()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe01, "function")
      })
      it("Sollte keine 'e's mehr drin haben", function () {
        const input = "Hello"
        const res = funcs.aufgabe01(input)
        assert.equal(res, "Hllo")
      })
      it("Sollte keine 'E's mehr drin haben", function () {
        const input = "Emoji"
        const res = funcs.aufgabe01(input)
        assert.equal(res, "moji")
      })
      it("Sollte mehrere 'e's löschen", function () {
        const input = "Hier hat es mehrere 'e's drin."
        const res = funcs.aufgabe01(input)
        assert.equal(res, "Hir hat s mhrr ''s drin.")
      })
    })

    describe("Aufgabe 02", function () {
      it("Die Funktion 'aufgabe02()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe02, "function")
      })
      it("Sollte nur noch Grossbuchstaben enthalten", function () {
        const input = "a"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "A")
      })
      it("Sollte mehrere Buchstaben gross schreiben", function () {
        const input = "abc"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "ABC")
      })
      it("Sollten Grossbuchstaben bleiben", function () {
        const input = "aBc"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "ABC")
      })
      it("Kann auch mit Sonderzeichen umgehen", function () {
        const input = "Hier ist ein Satz mit mehreren Zeichen."
        const res = funcs.aufgabe02(input)
        assert.equal(res, "HIER IST EIN SATZ MIT MEHREREN ZEICHEN.")
      })
    })

    describe("Aufgabe 03", function () {
      it("Die Funktion 'aufgabe03()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe03, "function")
      })
      it("Sollte 1 'e' enthalten", function () {
        const input = "Hello"
        const res = funcs.aufgabe03(input)
        assert.equal(res, 1)
      })
      it("Sollte 4 'e's enthalten", function () {
        const input = "ein einfacher Text."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
      it("Sollte auch 'E's zählen", function () {
        const input = "Ein einfacher Text."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
    })

    describe("Aufgabe 04", function () {
      it("Die Funktion 'aufgabe04()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe04, "function")
      })
      it("Sollte 2 Wörter zählen", function () {
        const input = "Zwei Wörter"
        const res = funcs.aufgabe03(input)
        assert.equal(res, 2)
      })
      it("Sollte 4 Wörter zählen", function () {
        const input = "Nur vier Wörter hier."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
      it("Kann auch mit Sonderzeichen umgehen", function () {
        const input =
          "Nicht alles - was von Leerzeichen getrennt wird, sind Wörter..."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 9)
      })
      it("Zählt auch Zahlen als Wörter", function () {
        const input = "Nur vier Wörter hier."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
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
      nit(
        "Es soll ein HTML-Input-Element mit der ID 'input' geben",
        function () {
          const elem = document.querySelector("input#input")
          assert.notEqual(elem, null)
        },
      )
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
      it("Die Funktion 'deleteE()' soll existieren.", function () {
        assert.equal(typeof funcs.deleteE, "function")
      })
      it("Die Eingabe 'e' wird zum leeren String ''.", function () {
        const input = "e"
        const res = funcs.deleteE(input)
        assert.equal(res, "")
      })
      it("Auch grosse 'E's werden gelöscht", function () {
        const input = "E"
        const res = funcs.deleteE(input)
        assert.equal(res, "")
      })
    })

    describe("Aufgabe 2 (DC)", function () {
      it("Die Funktion 'upperCase()' soll existieren.", function () {
        assert.equal(typeof funcs.upperCase, "function")
      })
      it("Die Eingabe 'abc' wird zu 'ABC'.", function () {
        const input = "abc"
        const res = funcs.upperCase(input)
        assert.equal(res, "ABC")
      })
    })
  }
}
