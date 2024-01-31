def on_logo_pressed():
    basic.show_leds("""
        . # . # .
        . # # # .
        # # # # #
        . # # # .
        . . # # #
        """)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

basic.show_leds("""
    . # . # .
    . # # # .
    # . # . #
    . # # # .
    . . # # #
    """)