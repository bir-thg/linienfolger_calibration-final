input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(maqueen.readPatrol(maqueen.Patrol.PatrolLeft))
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(maqueen.readPatrol(maqueen.Patrol.PatrolRight))
    basic.pause(2000)
    basic.clearScreen()
})
basic.setLedColor(0x0000ff)
maqueen.setColor(0x0000ff)
