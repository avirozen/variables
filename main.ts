input.onButtonPressed(Button.A, function () {
    led.unplot(a, b)
    a += -1
    led.plot(a, b)
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(a, b)
    b += 1
    led.plot(a, b)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(a, b)
    a += 1
    led.plot(a, b)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    led.unplot(a, b)
    b += -1
    led.plot(a, b)
})
let b = 0
let a = 0
a = 2
b = 2
led.plot(a, b)
