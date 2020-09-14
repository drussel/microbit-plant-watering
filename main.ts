let percent_water = 0
basic.forever(function () {
    percent_water = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    692,
    663,
    100,
    0
    ))
    if (percent_water < 25) {
        basic.showLeds(`
            # . . . #
            # . . . #
            . # # # .
            . . . . .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            . . . . .
            . # . # .
            `)
        basic.pause(100)
    }
})
