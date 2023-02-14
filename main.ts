input.onButtonPressed(Button.A, function () {
    numerointroducido += 10
})
input.onGesture(Gesture.Shake, function () {
    numerointroducido = 0
    nºadivinar = randint(0, 99)
})
input.onButtonPressed(Button.B, function () {
    numerointroducido += 1
})
let nºadivinar = 0
let numerointroducido = 0
numerointroducido = 0
basic.forever(function () {
    basic.showString("" + (numerointroducido))
})
