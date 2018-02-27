var pick; // to hold the simulated pick
var gameArray; // to hold the game array
var revealedDoor; // hold the revealed door
var stickWins = 0; //number of wins by sticking
var switchWins = 0; // of wins by switching

function main() {

    //fill array with goats
    gameArray = ['goat', 'goat', 'goat']

    //set car based on random
    gameArray[getRandomArbitrary(0, 3)] = 'car'
    console.log(gameArray[0], gameArray[1], gameArray[2])

    //assign player pick
    pick = getRandomArbitrary(0, 3)
    console.log('pick is: ' + pick)

    //open door, returns a goat position
    revealedDoor = openDoor()

    console.log('openDoor is: ' + revealedDoor)

    //test for stick win
    testStick();

    //test for switch win
    testSwitch();

    console.log('Switch Wins: ' + switchWins)
    document.getElementById('switch_wins').innerHTML = switchWins;
    console.log('Stick Wins: ' + stickWins)
    document.getElementById('stick_wins').innerHTML = stickWins;
}

function getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function openDoor() {
    for (var i = 0; i < gameArray.length; i++) {
        if (gameArray[i] != 'car' && i != pick) {
            return i;
        }
    }
}

function testStick() {
    if (gameArray[pick] == 'car') {
        stickWins += 1;
        return true;
    }
}

function testSwitch() {
    if (gameArray[switchDoor()] == 'car') {
        switchWins += 1;
        return true;
    }
}

function switchDoor() {
    if (pick == 0)  {
        if (revealedDoor == 1) {
            return 2;
        } else {
            return 1;
        }
    }
    else if (pick == 1) {
        if (revealedDoor == 0) {
            return 2;
        } else {
            return 0;
        }
    }
    else if (pick == 2) {
        if (revealedDoor == 0) {
            return 1;
        } else {
            return 0;
        }
    }
}

function multi() {
   var x = document.getElementById('times').value;
   for (var i = 0; i < x; i++) {
       main();
    }
}