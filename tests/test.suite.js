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
      it("Should have no more 'E's in it", function () {
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
      it("Should keep capital letters", function () {
        const input = "aBc"
        const res = funcs.exercise02(input)
        assert.equal(res, "ABC")
      })
      it("Can also handle special characters", function () {
        const input = "This is a sentence(!) with multiple special characters."
        const res = funcs.exercise02(input)
        assert.equal(res, "THIS IS A SENTENCE(!) WITH MULTIPLE SPECIAL CHARACTERS.")
      })
    })

    describe("exercise 03", function () {
      it("The function 'exercise03()' must exist.", function () {
        assert.equal(typeof funcs.exercise03, "function")
      })
      it("Should count 1 'e'", function () {
        const input = "Hello"
        const res = funcs.exercise03(input)
        assert.equal(res, 1)
      })
      it("Should count multiple 'e's", function () {
        const input = "just a very simple text."
        const res = funcs.exercise03(input)
        assert.equal(res, 3)
      })
      it("Should also count 'E's", function () {
        const input = "Even simpler text."
        const res = funcs.exercise03(input)
        assert.equal(res, 4)
      })
    })

    describe("exercise 04", function () {
      it("The function 'exercise04()' must exist.", function () {
        assert.equal(typeof funcs.exercise04, "function")
      })
      it("Should count 2 words", function () {
        const input = "Two Words"
        const res = funcs.exercise04(input)
        assert.equal(res, 2)
      })
      it("Should count 4 words", function () {
        const input = "Only four words here."
        const res = funcs.exercise04(input)
        assert.equal(res, 4)
      })
      it("Can also handle special characters", function () {
        const input =
          "Not everything - separated by spaces, is a word..."
        const res = funcs.exercise04(input)
        assert.equal(res, 8)
      })
      it("Also counts numbers as words", function () {
        const input = "Only 4 words here."
        const res = funcs.exercise04(input)
        assert.equal(res, 4)
      })
    })
    describe("exercise 05", function () {
      it("The function 'exercise05()' must exist.", function () {
        assert.equal(typeof funcs.exercise05, "function")
      })
      it("Should not contain capital letters", function () {
        const input = "all lower case here...."
        const res = funcs.exercise05(input)
        assert.equal(res, false)
      })
      it("Should recognize exactly one capital letter", function () {
        const input = "Only the beginning is upper case!"
        const res = funcs.exercise05(input)
        assert.equal(res, true)
      })
      it("Should also recognize several capital letters", function () {
        const input = "Here more than the Beginning is upper Case."
        const res = funcs.exercise05(input)
        assert.equal(res, true)
      })
      it("Should also work if the first letter is not capitalized", function () {
        const input = "abcdEEEfg"
        const res = funcs.exercise05(input)
        assert.equal(res, true)
      })
      it("Should return 'false' for only special characters", function () {
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
      it("Spaces are not special characters", function () {
        const input = "No special characters"
        const res = funcs.exercise06(input)
        assert.equal(res, false)
      })
      it("Periods are special characters", function () {
        const input = "Here ther is a special character."
        const res = funcs.exercise06(input)
        assert.equal(res, true)
      })
      it("Should not recognize the empty string as a special character", function () {
        const input = ""
        const res = funcs.exercise06(input)
        assert.equal(res, false)
      })
      it("Should recognize special characters in the middle of the text", function () {
        const input = "Hey! More than one special character here."
        const res = funcs.exercise06(input)
        assert.equal(res, true)
      })
    })
    describe("exercise 07", function () {
      it("The function 'exercise07()' must exist.", function () {
        assert.equal(typeof funcs.exercise07, "function")
      })
      it("Does not contain the word 'and'", function () {
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
      it("Input is shorter than 6 characters", function () {
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
        const input = "nothing"
        const res = funcs.exercise13(input)
        assert.equal(res, -1)
      })
    })
    describe("exercise 14", function () {
      it("The function 'exercise14()' must exist.", function () {
        assert.equal(typeof funcs.exercise14, "function")
      })
      it("Should give -1, if there are not enough 'e's", function () {
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
        const input = "Here is some long text"
        const res = funcs.exercise15(input)
        assert.equal(res, "Hier")
      })
      it("Should be empty if it starts with a space", function () {
        const input = " nothing"
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
        const input = "$everything is ignored."
        const res = funcs.exercise16(input)
        assert.equal(res, ["", "everything is ignored."])
      })
      it("Should read everything", function () {
        const input = "everything is read$"
        const res = funcs.exercise16(input)
        assert.equal(res, ["everything is read"])
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
      it("Should write 'Your name is and you are 17 years old'", function () {
        const input = " 17"
        const res = funcs.exercise18(input)
        assert.equal(res, "Your name is and you are 17 years old.")
      })
      it("Should write 'Your name is Julia and you are years old'", function () {
        const input = "Julia"
        const res = funcs.exercise18(input)
        assert.equal(res, "Your name is Julia and you are years old.")
      })
    })
    describe("exercise 19", function () {
      it("The function 'exercise19()' must exist.", function () {
        assert.equal(typeof funcs.exercise19, "function")
      })
      it("Should still be empty", function () {
        const input = ""
        const res = funcs.exercise19(input)
        assert.equal(res, "")
      })
      it("Should be 'aa'", function () {
        const input = "a"
        const res = funcs.exercise19(input)
        assert.equal(res, "aa")
      })
      it("Should duplicate several characters", function () {
        const input = "ab cde"
        const res = funcs.exercise19(input)
        assert.equal(res, "aabb  ccddee")
      })
    })
    describe("exercise 20", function () {
      it("The function 'exercise20()' must exist.", function () {
        assert.equal(typeof funcs.exercise20, "function")
      })
      it("Should be 'false'", function () {
        const input = "Not like this.It needs a space here."
        const res = funcs.exercise20(input)
        assert.equal(res, false)
      })
      it("Should be 'true'", function () {
        const input = "This is how it works. There is a space after a period"
        const res = funcs.exercise20(input)
        assert.equal(res, true)
      })
      it("A space is also needed at the end.", function () {
        const input = "Also at the end."
        const res = funcs.exercise20(input)
        assert.equal(res, false)
      })
      it("Correct at the end", function () {
        const input = "Also at the end. "
        const res = funcs.exercise20(input)
        assert.equal(res, true)
      })
    })
    describe("exercise 21", function () {
      it("The function 'exercise21()' must exist.", function () {
        assert.equal(typeof funcs.exercise21, "function")
      })
      it("Should remain blank", function () {
        const input = ""
        const res = funcs.exercise21(input)
        assert.equal(res, "")
      })
      it("Should keep a single character", function () {
        const input = "a"
        const res = funcs.exercise21(input)
        assert.equal(res, "a")
      })
      it("Should keep several identical characters", function () {
        const input = "aaaa"
        const res = funcs.exercise21(input)
        assert.equal(res, "aaaa")
      })
      it("Should distinguish capital letters", function () {
        const input = "aAaa"
        const res = funcs.exercise21(input)
        assert.equal(res, "aaAa")
      })
    })
    describe("exercise 22", function () {
      it("The function 'exercise22()' must exist.", function () {
        assert.equal(typeof funcs.exercise22, "function")
      })
      it("Should replace everything", function () {
        const input = "All gone..."
        const res = funcs.exercise22(input)
        assert.equal(res, "____________")
      })
      it("Should replace one part", function () {
        const input = "everything up to kere is gone"
        const res = funcs.exercise22(input)
        assert.equal(res, "__________kere is gone")
      })
      it("Should not replace anything", function () {
        const input = "kno underlines..."
        const res = funcs.exercise22(input)
        assert.equal(res, "kno underlines...")
      })
    })
    describe("exercise 23", function () {
      it("The function 'exercise23()' must exist.", function () {
        assert.equal(typeof funcs.exercise23, "function")
      })
      it("Remains empty", function () {
        const input = ""
        const res = funcs.exercise23(input)
        assert.equal(res, "")
      })
      it("Duplicates the first character", function () {
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
      it("Should remain empty", function () {
        const input = ""
        const res = funcs.exercise24(input)
        assert.equal(res, "")
      })
      it("Should stay the same", function () {
        const input = "a"
        const res = funcs.exercise24(input)
        assert.equal(res, "a")
      })
      it("Should stay the same", function () {
        const input = "aa"
        const res = funcs.exercise24(input)
        assert.equal(res, "aa")
      })
      it("Should swap", function () {
        const input = "ab"
        const res = funcs.exercise24(input)
        assert.equal(res, "ba")
      })
      it("Should only swap the beginning and end", function () {
        const input = "abcdef"
        const res = funcs.exercise24(input)
        assert.equal(res, "fbcdea")
      })
      it("Should also swap spaces", function () {
        const input = "abcd "
        const res = funcs.exercise24(input)
        assert.equal(res, " bcda")
      })
    })
    describe("exercise 25", function () {
      it("The function 'exercise25()' must exist.", function () {
        assert.equal(typeof funcs.exercise25, "function")
      })
      it("Should remain empty", function () {
        const input = ""
        const res = funcs.exercise25(input)
        assert.equal(res, "")
      })
      it("Should become empty", function () {
        const input = "a"
        const res = funcs.exercise25(input)
        assert.equal(res, "")
      })
      it("Should become empty", function () {
        const input = "aa"
        const res = funcs.exercise25(input)
        assert.equal(res, "")
      })
      it("Should delete 1 character", function () {
        const input = "abc"
        const res = funcs.exercise25(input)
        assert.equal(res, "ac")
      })
      it("Should delete 2 characters", function () {
        const input = "abcd"
        const res = funcs.exercise25(input)
        assert.equal(res, "ad")
      })
      it("Should treat identical characters separately", function () {
        const input = "abbc"
        const res = funcs.exercise25(input)
        assert.equal(res, "ac")
      })
    })
    describe("exercise 26", function () {
      it("The function 'exercise26()' must exist.", function () {
        assert.equal(typeof funcs.exercise26, "function")
      })
      it("Should leave the first two characters as they are", function () {
        const input = "abcde"
        const res = funcs.exercise26(input)
        assert.equal(res, "abcde")
      })
      it("Should swap the first two characters", function () {
        const input = "bacdef"
        const res = funcs.exercise26(input)
        assert.equal(res, "abcdef")
      })
      it("Should take upper case letters to the front", function () {
        const input = "aAbcdef"
        const res = funcs.exercise26(input)
        assert.equal(res, "Aabcdef")
      })
    })

    describe("exercise 27", function () {
      it("The function 'exercise27()' must exist.", function () {
        assert.equal(typeof funcs.exercise27, "function")
      })
      it("Should be a number", function () {
        const input = "12"
        const res = funcs.exercise27(input)
        assert.equal(res, true)
      })
      it("Should not be a number", function () {
        const input = "1 2"
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Should not be a number", function () {
        const input = ""
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Should not be a number", function () {
        const input = "two"
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Should not have a space at the beginning", function () {
        const input = " 12"
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Should not have a space at the end", function () {
        const input = "10 "
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
      it("Should only read integers", function () {
        const input = "27.1"
        const res = funcs.exercise27(input)
        assert.equal(res, false)
      })
    })
    describe("exercise 28", function () {
      it("The function 'exercise28()' must exist.", function () {
        assert.equal(typeof funcs.exercise28, "function")
      })
      it("Should read 2 numbers and add them together", function () {
        const input = "3 8"
        const res = funcs.exercise28(input)
        assert.equal(res, 11)
      })
      it("Should only react to spaces", function () {
        const input = "3 + 2"
        const res = funcs.exercise28(input)
        assert.equal(res, null)
      })
      it("Should also deal with multi-digit numbers", function () {
        const input = "12 600"
        const res = funcs.exercise28(input)
        assert.equal(res, 612)
      })
    })
  }
}
