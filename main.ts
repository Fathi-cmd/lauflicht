let Platzhalter = 0
basic.forever(function () {
    Platzhalter = 50
    for (let Index = 0; Index <= 3; Index++) {
        led.plot(Index, 0)
        basic.pause(Platzhalter)
        led.unplot(Index, 0)
    }
    for (let Index = 0; Index <= 3; Index++) {
        led.plot(4, Index)
        basic.pause(Platzhalter)
        led.unplot(4, Index)
    }
    for (let Index = 0; Index <= 3; Index++) {
        led.plot(4 - Index, 4)
        basic.pause(Platzhalter)
        led.unplot(4 - Index, 4)
    }
    for (let Index = 0; Index <= 3; Index++) {
        led.plot(0, 4 - Index)
        basic.pause(Platzhalter)
        led.unplot(0, 4 - Index)
    }
})
