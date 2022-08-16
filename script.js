function aufgabe1() {
    print("Hello World!!!")
}

function aufgabe2() {
    const input = read()
    print(`Hello ${input}!`)
}

function aufgabe3() {
    const input = read()
    const args = parseArgs(input)
    const num1 = parseInt(args[0])
    const num2 = parseInt(args[1])
    print(`Das Resultat der Rechnung ${num1} + ${num2} ist: ${num1 + num2}`)
}
