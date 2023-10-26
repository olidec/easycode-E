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
  }
}
