input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 1; index++) {
        basic.showLeds(`
            . # . # .
            . # # # .
            # . # . #
            . # # # .
            . . # # #
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 1, 1470, 76, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
    basic.showLeds(`
        . # . # .
        . # # # .
        # . # . #
        . # . # .
        . . # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . # # # .
        # . # . #
        . # . # .
        . . # # #
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        . . # # #
        . . # . #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        . . # # #
        . . # . #
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        . . # # #
        . . # . #
        `)
    basic.showLeds(`
        . # . # .
        . # # # .
        # . # . #
        . # . # .
        . . # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index <= 1; index++) {
        basic.showLeds(`
            . # . # .
            . # # # .
            # # # # #
            . # . # .
            . . # # #
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 2957, 943, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
    basic.showLeds(`
        . # . # .
        . # # # .
        # . # . #
        . # . # .
        . . # # #
        `)
})
basic.showLeds(`
    . # . # .
    . # # # .
    # . # . #
    . # . # .
    . . # # #
    `)
music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
