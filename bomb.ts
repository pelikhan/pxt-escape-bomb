basic.showString("BOMB")

let state = 0;

input.onButtonPressed(Button.A, function () {
    if (!state)
        state = escape.BOMB_DEACTIVATED;
})

radio.onReceivedBuffer(b => {
    escape.logMessage(b);
    switch(b[0]) {
        case escape.TIME_OVER:
            if (!state)
                state = escape.TIME_OVER;
            break;
    }
})

basic.forever(function() {
    switch(state) {
        case escape.TIME_OVER:
            escape.showLose();
            break;
        case escape.BOMB_DEACTIVATED:
            const b = control.createBuffer(1)
            b[0] = escape.BOMB_DEACTIVATED;
            radio.sendBuffer(b);
            escape.showWin();
            break;
        default:
            led.toggle(Math.randomRange(0, 4), Math.randomRange(0, 4))
            break;
    }
})
