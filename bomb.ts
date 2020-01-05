basic.showString("BOMB")

// send deactivation signal on button pressed
input.onPinPressed(TouchPin.P0, function() {
    escape.broadcastMessage(escape.BOMB_DEACTIVATED);
})

escape.onUpdate(function () {
    led.toggle(Math.randomRange(0, 4), Math.randomRange(0, 4))
})
