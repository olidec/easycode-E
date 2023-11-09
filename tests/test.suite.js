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

  if (APP.type === "sort") {
    describe("Bubble Sort", function () {
      it("The function 'bubbleSort()' must exist.", function () {
        assert.equal(typeof funcs.bubbleSort, "function")
      })
      it("Should order the text", function () {
        const input = "cdefab"
        const res = funcs.bubbleSort(input)
        assert.equal(res, "abcdef")
      })
      it("Should have upper case letters for lower case letters", function () {
        const input = "aAbCdEEe"
        const res = funcs.bubbleSort(input)
        assert.equal(res, "ACEEabde")
      })
    })
  } else if (APP.type === "palindrom") {
    describe("Palindromes", function () {
      it("The function 'checkPalindrome()' must exist.", function () {
        assert.equal(typeof funcs.checkPalindrome, "function")
      })
      it("Anna is a palindrome", function () {
        const input = "Anna"
        const res = funcs.checkPalindrom(input)
        assert.equal(res, true)
      })
      it("'An a' is a palindrome", function () {
        const input = "An a"
        const res = funcs.checkPalindrom(input)
        assert.equal(res, true)
      })
      it("'Hanna' is not a palindrome", function () {
        const input = "Hanna"
        const res = funcs.checkPalindrom(input)
        assert.equal(res, false)
      })
    })
  } else {
    describe("exercise 01", function () {
      it("The function 'exercise01()' must exist.", function () {
        assert.equal(typeof funcs.exercise01, "function")
      })
      it("Should have no more 'e's in it", function () {
        const input = "Hello"
        const res = funcs.exercise01(input)
        assert.equal(res, "Hllo")
      })
      it("Should have no more 'e's in it", function () {
        const input = "Emoji"
        const res = funcs.exercise01(input)
        assert.equal(res, "moji")
      })
      it("Should delete several 'e's", function () {
        const input = "This has several 'e's in it."
        const res = funcs.exercise01(input)
        assert.equal(res, "This has svral ''s in it.")
      })
    })

    describe("exercise 02", function () {
      it("The function 'exercise02()' must exist.", function () {
        assert.equal(typeof funcs.exercise02, "function")
      })
      it("Should only contain capital letters", function () {
        const input = "a"
        const res = funcs.exercise02(input)
        assert.equal(res, "A")
      })
      it("Should capitalize several letters", function () {
        const input = "abc"
        const res = funcs.exercise02(input)
        assert.equal(res, "ABC")
      })
      it("Should remain capital letters", function () {
        const input = "aBc"
        const res = funcs.exercise02(input)
        assert.equal(res, "ABC")
      })
      it("Can also handle special characters", function () {
        const input = "Hier ist ein Satz mit mehreren Zeichen."
        const res = funcs.exercise02(input)
        assert.equal(res, "HIER IST EIN SATZ MIT MEHREREN ZEICHEN.")
      })
    })

    describe("exercise 03", function () {
      it("The function 'exercise03()' must exist.", function () {
        assert.equal(typeof funcs.exercise03, "function")
      })
      it("Should contain 1 'e'", function () {
        const input = "Hello"
        const res = funcs.exercise03(input)
        assert.equal(res, 1)
      })
      it("Should contain 4 'e's", function () {
        const input = "ein einfacher Text."
        const res = funcs.exercise03(input)
        assert.equal(res, 4)
      })
      it("Should also count 'E's", function () {
        const input = "Ein einfacher Text."
        const res = funcs.exercise03(input)
        assert.equal(res, 4)
      })
    })

    describe("exercise 04", function () {
      it("The function 'exercise04()' must exist.", function () {
        assert.equal(typeof funcs.exercise04, "function")
      })
      it("Should count 2 words", function () {
        const input = "Zwei Wörter"
        const res = funcs.exercise04(input)
        assert.equal(res, 2)
      })
      it("Should count 4 words", function () {
        const input = "Nur vier Wörter hier."
        const res = funcs.exercise04(input)
        assert.equal(res, 4)
      })
      it("Can also handle special characters", function () {
        const input =
          "Nicht alles - was von Leerzeichen getrennt wird, sind Wörter..."
        const res = funcs.exercise04(input)
        assert.equal(res, 9)
      })
      it("Also counts numbers as words", function () {
        const input = "Nur 4 Wörter hier."
        const res = funcs.exercise04(input)
        assert.equal(res, 4)
      })
    })
    describe("exercise 05", function () {
      it("The function 'exercise05()' must exist.", function () {
        assert.equal(typeof funcs.exercise05, "function")
      })
      it("Should not contain capital letters", function () {
        const input = "hier ist alles klein...."
        const res = funcs.exercise05(input)
        assert.equal(res, false)
      })
      it("Should recognize exactly one capital letter", function () {
        const input = "Hier ist nur der anfang gross!"
        const res = funcs.exercise05(input)
        assert.equal(res, true)
      })
      it("Should also recognize several capital letters", function () {
        const input = "Hier ist mehr wie nur der Anfang gross."
        const res = funcs.exercise05(input)
        assert.equal(res, true)
      })
      it("Should also work if the first letter is not capitalized", function () {
        const input = "abcdEEEfg"
        const res = funcs.exercise05(input)
        assert.equal(res, true)
      })
      it("Should be 'false' with only special characters", function () {
        const input = "1 + 2 - 4 = -1"
        const res = funcs.exercise05(input)
        assert.equal(res, false)
      })
      it("Should be 'false' for the empty string", function () {
        const input = ""
        const res = funcs.exercise05(input)
        assert.equal(res, false)
      })
    })
    describe("exercise 06", function () {
      it("The function 'exercise06()' must exist.", function () {
        assert.equal(typeof funcs.exercise06, "function")
      })
      it("Does not contain any special characters", function () {
        const input = "abc"
        const res = funcs.exercise06(input)
        assert.equal(res, false)
      })
      it("A space is not recognized as a special character", function () {
        const input = "Ohne Sonderzeichen"
        const res = funcs.exercise06(input)
        assert.equal(res, false)
      })
      it("Periods are special characters", function () {
        const input = "Hier gibt es ein Sonderzeichen."
        const res = funcs.exercise06(input)
        assert.equal(res, true)
      })
      it("Should not recognize the empty string as a special character", function () {
        const input = ""
        const res = funcs.exercise06(input)
        assert.equal(res, false)
      })
      it("Should recognize special characters in the middle of the text", function () {
        const input = "Hey! Hier sind mehr wie ein Sonderzeichen."
        const res = funcs.exercise06(input)
        assert.equal(res, true)
      })
    })
    describe("exercise 07", function () {
      it("The function 'exercise07()' must exist.", function () {
        assert.equal(typeof funcs.exercise07, "function")
      })
      it("Should not contain the word 'and'", function () {
        const input = "und"
        const res = funcs.exercise07(input)
        assert.equal(res, false)
      })
      it("Should recognize the word 'and'", function () {
        const input = "and"
        const res = funcs.exercise07(input)
        assert.equal(res, true)
      })
      it("Should find 'And' at the beginning of the sentence", function () {
        const input = "And here is also one."
        const res = funcs.exercise07(input)
        assert.equal(res, true)
      })
      it("Should not recognize 'And' if it is not at the beginning of the sentence", function () {
        const input = "Here is an incorrect And."
        const res = funcs.function07(input)
        assert.equal(res, false)
      })
    })
    describe("exercise 08", function () {
      it("The function 'exercise08()' must exist.", function () {
        assert.equal(typeof funcs.exercise08, "function")
      })
      it("Should replace 'e's with '3'", function () {
        const input = "e"
        const res = funcs.exercise08(input)
        assert.equal(res, "3")
      })
      it("Should replace multiple 'e's with '3'", function () {
        const input = "abcdeeefgh"
        const res = funcs.exercise08(input)
        assert.equal(res, "abcd333fgh")
      })
      it("Should not replace capital 'E's", function () {
        const input = "ABCDEEEFGH"
        const res = funcs.exercise08(input)
        assert.equal(res, "ABCDEEEFGH")
      })
    })

    describe("exercise 09", function () {
      it("The function 'exercise09()' must exist.", function () {
        assert.equal(typeof funcs.exercise09, "function")
      })
      it("Input is not 6 characters long", function () {
        const input = "abcd"
        const res = funcs.exercise09(input)
        assert.equal(res, false)
      })
      it("Input is exactly 6 characters long", function () {
        const input = "abcdef"
        const res = funcs.exercise09(input)
        assert.equal(res, true)
      })
      it("Input is longer than 6 characters", function () {
        const input = "abcdefghijkl"
        const res = funcs.exercise09(input)
        assert.equal(res, false)
      })
      it("Should also count spaces", function () {
        const input = "abc de"
        const res = funcs.exercise09(input)
        assert.equal(res, true)
      })
    })

    describe("exercise 10", function () {
      it("The function 'exercise10()' must exist.", function () {
        assert.equal(typeof funcs.exercise10, "function")
      })
      it("Input is an incorrect RGB hexcode", function () {
        const input = "#FF009G"
        const res = funcs.exercise10(input)
        assert.equal(res, false)
      })
      it("Input is a correct code", function () {
        const input = "#FF0077"
        const res = funcs.exercise10(input)
        assert.equal(res, true)
      })
      it("Should recognize the color 'red' in hexadecimal", function () {
        const input = "#FF0000"
        const res = funcs.exercise10(input)
        assert.equal(res, true)
      })
      it("Should recognize the color 'green' in hexadecimal", function () {
        const input = "#00FF00"
        const res = funcs.exercise10(input)
        assert.equal(res, true)
      })
      it("Should recognize the color 'blue' in hexadecimal", function () {
        const input = "#0000FF"
        const res = funcs.exercise10(input)
        assert.equal(res, true)
      })
      it("Should recognize the color 'yellow' in hexadecimal", function () {
        const input = "#FF00FF"
        const res = funcs.exercise10(input)
        assert.equal(res, true)
      })
      it("Should not be a hex code if the hash is missing", function () {
        const input = "FF0077"
        const res = funcs.exercise10(input)
        assert.equal(res, false)
      })
    })

    describe("exercise 11", function () {
      it("The function 'exercise11()' must exist.", function () {
        assert.equal(typeof funcs.exercise11, "function")
      })
      it("Should recognize the ASCII code of 'a'", function () {
        const input = "a"
        const res = funcs.exercise11(input)
        assert.equal(res, 97)
      })
      it("Should recognize the ASCII code of 'B'", function () {
        const input = "B"
        const res = funcs.exercise11(input)
        assert.equal(res, 66)
      })
      it("Should return 'null' if more than one character is entered", function () {
        const input = "aB"
        const res = funcs.exercise11(input)
        assert.equal(res, null)
      })
      it("Should return 'null' if no input is given", function () {
        const input = ""
        const res = funcs.exercise11(input)
        assert.equal(res, null)
      })
    })
    describe("exercise 12", function () {
      it("The function 'exercise12()' must exist.", function () {
        assert.equal(typeof funcs.exercise12, "function")
      })
      it("Should find an 'e' at position 0", function () {
        const input = "ein Text"
        const res = funcs.exercise12(input)
        assert.equal(res, 0)
      })
      it("Should find an 'e' at position 5", function () {
        const input = "Ein Text"
        const res = funcs.exercise12(input)
        assert.equal(res, 5)
      })
      it("Should return -1 if no 'e' is present", function () {
        const input = "abcdfgh"
        const res = funcs.exercise12(input)
        assert.equal(res, -1)
      })
    })
    describe("exercise 13", function () {
      it("The function 'exercise13()' must exist.", function () {
        assert.equal(typeof funcs.exercise13, "function")
      })
      it("Should find the last position where there is an 'e'", function () {
        const input = "eine"
        const res = funcs.exercise13(input)
        assert.equal(res, 3)
      })
      it("Should return -1 if no 'e' occurs", function () {
        const input = "nichts"
        const res = funcs.exercise13(input)
        assert.equal(res, -1)
      })
    })
    describe("exercise 14", function () {
      it("The function 'exercise14()' must exist.", function () {
        assert.equal(typeof funcs.exercise14, "function")
      })
      it("Should give -1, as there are not enough 'e's", function () {
        const input = "abcdefge"
        const res = funcs.exercise14(input)
        assert.equal(res, -1)
      })
      it("Should return 2, since only 'e's occur", function () {
        const input = "eeeeeeee"
        const res = funcs.exercise14(input)
        assert.equal(res, 2)
      })
      it("Should consider spaces and also count them", function () {
        const input = "Hier ist mehr Text mit vielen 'e's"
        const res = funcs.exercise14(input)
        assert.equal(res, 15)
      })
      it("Should not respond to capital 'E's", function () {
        const input = "EEEEeEee"
        const res = funcs.exercise14(input)
        assert.equal(res, 7)
      })
    })

    describe("exercise 15", function () {
      it("The function 'exercise15()' must exist.", function () {
        assert.equal(typeof funcs.exercise15, "function")
      })
      it("Should abort after the first ' '", function () {
        const input = "Hier ist langer Text"
        const res = funcs.exercise15(input)
        assert.equal(res, "Hier")
      })
      it("Should be empty if it starts with a space", function () {
        const input = " nichts"
        const res = funcs.exercise15(input)
        assert.equal(res, "")
      })
      it("Should read '_' as normal", function () {
        const input = "Hier_ist_langer_Text."
        const res = funcs.exercise15(input)
        assert.equal(res, "Hier_ist_langer_Text.")
      })
      it("Should deal with trailing spaces", function () {
        const input = "Ohne_Leerzeichen "
        const res = funcs.exercise15(input)
        assert.equal(res, "Ohne_Leerzeichen")
      })
    })
    describe("exercise 16", function () {
      it("The function 'exercise16()' must exist.", function () {
        assert.equal(typeof funcs.exercise16, "function")
      })
      it("Should not read anything", function () {
        const input = "$alles wird ignoriert."
        const res = funcs.exercise16(input)
        assert.equal(res, ["", "alles wird ignoriert."])
      })
      it("Should read everything", function () {
        const input = "alles wird eingelesen$"
        const res = funcs.exercise16(input)
        assert.equal(res, ["alles wird eingelesen"])
      })
      it("Should only read one part", function () {
        const input = "Sollte nur bis hier$einlesen."
        const res = funcs.exercise16(input)
        assert.equal(res, ["Sollte nur bis hier", "einlesen."])
      })
      it("Should be empty", function () {
        const input = ""
        const res = funcs.exercise16(input)
        assert.equal(res, [""])
      })
      it("Should read everything", function () {
        const input = "alles"
        const res = funcs.exercise16(input)
        assert.equal(res, ["alles"])
      })
      it("Should only have 2 entries in the list", function () {
        const input = "eins$zwei$drei"
        const res = funcs.exercise16(input)
        assert.equal(res, ["eins", "zwei$drei"])
      })
    })
    describe("exercise 17", function () {
      it("The function 'exercise17()' must exist.", function () {
        assert.equal(typeof funcs.exercise17, "function")
      })
      it("Should return a list with the empty element", function () {
        const input = ""
        const res = funcs.exercise17(input)
        assert.equal(res, [""])
      })
      it("Should return a list with only one entry", function () {
        const input = "nur ein Eintrag"
        const res = funcs.exercise17(input)
        assert.equal(res, ["nur ein Eintrag"])
      })
      it("Should have 2 entries", function () {
        const input = "eins,zwei"
        const res = funcs.exercise17(input)
        assert.equal(res, ["eins", "zwei"])
      })
      it("Should have 3 entries", function () {
        const input = "eins,zwei,drei"
        const res = funcs.exercise17(input)
        assert.equal(res, ["eins", "zwei", "drei"])
      })
      it("Should only have 2 entries", function () {
        const input = "eins,zwei,"
        const res = funcs.exercise17(input)
        assert.equal(res, ["eins", "zwei"])
      })
    })
    describe("exercise 18", function () {
      it("The function 'exercise18()' must exist.", function () {
        assert.equal(typeof funcs.exercise18, "function")
      })
      it("Should write 'Your name is Julia and you are 17 years old'", function () {
        const input = "Julia 17"
        const res = funcs.exercise18(input)
        assert.equal(res, "Your name is Julia and you are 17 years old.")
      })
      it("Should write 'Your name is 17 and you are Julia years old'", function () {
        const input = "17 Julia"
        const res = funcs.exercise18(input)
        assert.equal(res, "Your name is 17 and you are Julia years old.")
      })
      it("Sollte 'Your name is and you are 17 years old' write", function () {
        const input = " 17"
        const res = funcs.exercise18(input)
        assert.equal(res, "Your name is and you are 17 years old.")
      })
      it("Sollte 'Your name is Julia and you are years old' write", function () {
        const input = "Julia"
        const res = funcs.exercise18(input)
        assert.equal(res, "Your name is Julia and you are years old.")
      })
    })
    describe("exercise 19", function () {
      it("The function 'exercise19()' must exist.", function () {
        assert.equal(typeof funcs.exercise19, "function")
      })
      it("Sollte immernoch leer sein", function () {
        const input = ""
        const res = funcs.exercise19(input)
        assert.equal(res, "")
      })
      it("Sollte 'aa' heissen", function () {
        const input = "a"
        const res = funcs.exercise19(input)
        assert.equal(res, "aa")
      })
      it("Sollte mehrere Zeichen verdoppeln", function () {
        const input = "ab cde"
        const res = funcs.exercise19(input)
        assert.equal(res, "aabb  ccddee")
      })
    })
    describe("exercise 20", function () {
      it("The function 'exercise20()' must exist.", function () {
        assert.equal(typeof funcs.exercise20, "function")
      })
      it("Sollte 'false' sein", function () {
        const input = "So nicht.Es braucht hier einen Leerschlag"
        const res = funcs.exercise20(input)
        assert.equal(res, false)
      })
      it("Sollte 'true' sein", function () {
        const input = "So gehts. Nach einem Punkt kommt ein Leerzeichen"
        const res = funcs.exercise20(input)
        assert.equal(res, true)
      })
      it("Auch am Ende braucht es einen Leerschlag", function () {
        const input = "Auch am Ende."
        const res = funcs.exercise20(input)
        assert.equal(res, false)
      })
      it("Am Ende richtig", function () {
        const input = "Auch am Ende. "
        const res = funcs.exercise20(input)
        assert.equal(res, true)
      })
    })
    describe("exercise 21", function () {
      it("The function 'exercise21()' must exist.", function () {
        assert.equal(typeof funcs.exercise21, "function")
      })
      it("Sollte leer bleiben", function () {
        const input = ""
        const res = funcs.exercise21(input)
        assert.equal(res, "")
      })
      it("Sollte ein einzelnes Zeichen behalten", function () {
        const input = "a"
        const res = funcs.exercise21(input)
        assert.equal(res, "a")
      })
      it("Sollte mehrere gleiche Zeichen behalten", function () {
        const input = "aaaa"
        const res = funcs.exercise21(input)
        assert.equal(res, "aaaa")
      })
      it("Sollte Grossbuchstaben unterscheiden", function () {
        const input = "aAaa"
        const res = funcs.exercise21(input)
        assert.equal(res, "aaAa")
      })
    })
    describe("exercise 22", function () {
      it("The function 'exercise22()' must exist.", function () {
        assert.equal(typeof funcs.exercise22, "function")
      })
      it("Sollte alles ersetzen", function () {
        const input = "Alles weg..."
        const res = funcs.exercise22(input)
        assert.equal(res, "____________")
      })
      it("Sollte einen Teil ersetzen", function () {
        const input = "alles bis kier ist weg"
        const res = funcs.exercise22(input)
        assert.equal(res, "__________kier ist weg")
      })
      it("Sollte nichts ersetzen", function () {
        const input = "keine Unterstriche..."
        const res = funcs.exercise22(input)
        assert.equal(res, "keine Unterstriche...")
      })
    })
    describe("exercise 23", function () {
      it("The function 'exercise23()' must exist.", function () {
        assert.equal(typeof funcs.exercise23, "function")
      })
      it("Bleibt leer", function () {
        const input = ""
        const res = funcs.exercise23(input)
        assert.equal(res, "")
      })
      it("Verdoppelt das erste Zeichen", function () {
        const input = "a"
        const res = funcs.exercise23(input)
        assert.equal(res, "aaa")
      })
      it("Verdoppelt das erste Zeichen", function () {
        const input = "abc"
        const res = funcs.exercise23(input)
        assert.equal(res, "aabca")
      })
    })
    describe("exercise 24", function () {
      it("The function 'exercise24()' must exist.", function () {
        assert.equal(typeof funcs.exercise24, "function")
      })
      it("Sollte leer bleiben", function () {
        const input = ""
        const res = funcs.exercise24(input)
        assert.equal(res, "")
      })
      it("Sollte gleich bleiben", function () {
        const input = "a"
        const res = funcs.exercise24(input)
        assert.equal(res, "a")
      })
      it("Sollte gleich bleiben", function () {
        const input = "aa"
        const res = funcs.exercise24(input)
        assert.equal(res, "aa")
      })
      it("Sollte vertauschen", function () {
        const input = "ab"
        const res = funcs.exercise24(input)
        assert.equal(res, "ba")
      })
      it("Sollte nur den Anfang und Schluss vertauschen", function () {
        const input = "abcdef"
        const res = funcs.exercise24(input)
        assert.equal(res, "fbcdea")
      })
      it("Sollte auch Leerzeichen vertauschen", function () {
        const input = "abcd "
        const res = funcs.exercise24(input)
        assert.equal(res, " bcda")
      })
    })
    describe("exercise 25", function () {
      it("The function 'exercise25()' must exist.", function () {
        assert.equal(typeof funcs.exercise25, "function")
      })
      it("Sollte leer bleiben", function () {
        const input = ""
        const res = funcs.exercise25(input)
        assert.equal(res, "")
      })
      it("Soll leer werden", function () {
        const input = "a"
        const res = funcs.exercise25(input)
        assert.equal(res, "")
      })
      it("Soll leer werden", function () {
        const input = "aa"
        const res = funcs.exercise25(input)
        assert.equal(res, "")
      })
      it("Soll 1 Zeichen löschen", function () {
        const input = "abc"
        const res = funcs.exercise25(input)
        assert.equal(res, "ac")
      })
      it("Soll 2 Zeichen löschen", function () {
        const input = "abcd"
        const res = funcs.exercise25(input)
        assert.equal(res, "ad")
      })
      it("Soll gleiche Zeichen separat behandeln", function () {
        const input = "abbc"
        const res = funcs.exercise25(input)
        assert.equal(res, "ac")
      })
    })
    describe("exercise 26", function () {
      it("The function 'exercise26()' must exist.", function () {
        assert.equal(typeof funcs.exercise26, "function")
      })
      it("Soll die ersten beiden Zeichen so lassen", function () {
        const input = "abcde"
        const res = funcs.exercise26(input)
        assert.equal(res, "abcde")
      })
      it("Soll die ersten beiden Zeichen vertauschen", function () {
        const input = "bacdef"
        const res = funcs.exercise26(input)
        assert.equal(res, "abcdef")
      })
      it("Soll Grossbuchstaben nach vorne nehmen", function () {
        const input = "aAbcdef"
        const res = funcs.exercise26(input)
        assert.equal(res, "Aabcdef")
      })
    })

    describe("exercise 27", function () {
      it("The function 'exercise27()' must exist.", function () {
        assert.equal(typeof funcs.exercise27, "function")
      })
      it("Sollte eine Zahl sein", function () {
        const input = "12"
        const res = funcs.exercise27(input)
        assert.equal(res, true)
      })
      it("Sollte keine Zahl sein", function () {
        const input = "1 2"
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Sollte keine Zahl sein", function () {
        const input = ""
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Sollte keine Zahl sein", function () {
        const input = "zwei"
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Sollte kein Leerzeichen am Anfang haben", function () {
        const input = " 12"
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Sollte kein Leerzeichen am Ende haben", function () {
        const input = "10 "
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Soll nur ganze Zahlen lesen", function () {
        const input = "27.1"
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
    })
    describe("exercise 28", function () {
      it("The function 'exercise28()' must exist.", function () {
        assert.equal(typeof funcs.exercise28, "function")
      })
      it("Sollte 2 Zahlen haben, und diese addieren", function () {
        const input = "3 8"
        const res = funcs.exercise28(input)
        assert.equal(res, 11)
      })
      it("Sollte nur auf Leerzeichen reagieren", function () {
        const input = "3 + 2"
        const res = funcs.exercise28(input)
        assert.equal(res, null)
      })
      it("Sollte auch mit mehrstelligen Zahlen rechnen", function () {
        const input = "12 600"
        const res = funcs.exercise28(input)
        assert.equal(res, 612)
      })
    })
  }
}
