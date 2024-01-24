function drawSnake () {
    snakeposxlist.push(snakePositionX)
    snakeposylist.push(snakePositionY)
    led.plot(snakeposxlist[snakeposxlist.length - 1], snakeposylist[snakeposylist.length - 1])
    basic.pause(1000)
    led.unplot(snakeposxlist[snakeposxlist.length - snakeLength], snakeposylist[snakeposylist.length - snakeLength])
}
function eat () {
    snakeLength += 1
    foodPositionX = randint(0, 4)
    foodPositionY = randint(0, 4)
    for (let index = 0; index <= snakeLength - 1; index++) {
        while (foodPositionX == snakeposxlist[snakeposxlist.length - (index + 1)] && foodPositionY == snakeposylist[snakeposylist.length - (index + 1)]) {
            foodPositionX = randint(0, 4)
            foodPositionY = randint(0, 4)
        }
    }
    led.plot(foodPositionX, foodPositionY)
}
function reset () {
    basic.clearScreen()
    snakeposxlist = [0]
    snakeposylist = [0]
    basic.pause(500)
    snakePositionX = 0
    snakePositionY = 2
    direction = 3
    snakeLength = 1
    foodPositionX = randint(0, 4)
    foodPositionY = randint(0, 4)
    while (foodPositionX == snakePositionX && foodPositionY == snakePositionY) {
        snakePositionX = randint(0, 4)
    }
    led.plot(foodPositionX, foodPositionY)
}
let direction = 0
let snakeLength = 0
let snakeposylist: number[] = []
let snakeposxlist: number[] = []
let snakePositionY = 0
let snakePositionX = 0
let foodPositionY = 0
let foodPositionX = 0
foodPositionX = randint(0, 4)
foodPositionY = randint(0, 4)
while (foodPositionX == snakePositionX && foodPositionY == snakePositionY) {
    snakePositionX = randint(0, 4)
}
led.plot(foodPositionX, foodPositionY)
loops.everyInterval(1000, function () {
	
})
basic.forever(function () {
    if (0 == 0 || 0 == 0 || (0 == 0 || 0 == 0)) {
        basic.pause(500)
        basic.clearScreen()
        basic.pause(200)
        basic.showNumber(snakeLength)
        basic.pause(1000)
    }
    if (0 == 0 && 0 == 0) {
    	
    }
})
