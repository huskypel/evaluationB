servos.P0.setAngle(150)
let capteur_infrarouge = 1
basic.forever(function () {
    capteur_infrarouge = pins.digitalReadPin(DigitalPin.P1)
    if (capteur_infrarouge == 0) {
        servos.P0.setAngle(60)
        basic.pause(2000)
    } else if (capteur_infrarouge == 1) {
        servos.P0.setAngle(150)
    }
})
