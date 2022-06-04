const readlineSync = require('readline-sync');

const name = readlineSync.question("What is your name?");

readlineSync.question("Hello "+ name +" ,  Welcome to the Dog Pen! Please press enter to begin!");


const badGuys = ["Lucifer ", "Coyote ", "Fox "];
const treasure = ["bone ", "dog food ", "treat "];
var prize =[];
let userHealth = 15;
const options = ["Walk", "Exit", "Print"];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (6-2) + 1);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 15;
    const badGuysPower = Math.floor(Math.random() * (5-1) + 2);

    const index = readlineSync.keyInSelect(options, "What is your next move?");

    if (options[index] == "Exit"){
        return userHealth = 0;
    } else if (options[index] == "Print"){
        console.log(name + ": \n" + userHealth + "\nTreasure:" + pickUp);
    } else if (options[index] == "Walk") {
        let key = Math.random();
        if (key <= .3){
        console.log("Walking, no sign of trouble here.");
        } else if (key >= .3){
            console.log(badGuy + " is present.");
        }
    while(badGuysHealth > 0 && userHealth > 0){
        const user = readlineSync.question(`What would you like to do? Enter "r" to run or enter "a" to attack.`);
        switch(user){
            case "r":
            const run = Math.random();
            if(run < .5){
                console.log("Before you ran away, " + badGuy + " attacked you with: " + badGuysPower);
            } else {
                console.log("You ran away successfully");
                break;
            }

            case "a":
            badGuysHealth -= attackPower;
            console.log("You attacked " + " " + badGuy + " with " + attackPower + " attack power.");

            userHealth -= badGuysPower;
            console.log("Enemy just attacked you with:  " + " " + badGuysPower + "  attack power.");

            if(badGuysHealth <= 0){
                console.log("You killed " + badGuy + ".\n" + badGuy + " left: " + pickUp);
                let loot = Math.random();
                if (loot <= .3){
                prize.push(pickUp);
                }
            }else if (userHealth <= 0){
                console.log(badGuy + " has killed you.")
            }

        }

    }



    }

}
while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 15;
    }
   game();
}