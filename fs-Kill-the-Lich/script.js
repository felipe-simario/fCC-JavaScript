// ----------- DECLARATIONS -----------

//Infos Hero
const heroName = document.getElementById("heroName");
let gold = 50;
const goldText = document.getElementById("goldText");
let health = 150;
const healthText = document.getElementById("healthText");
let xp = 0;
const xpText = document.getElementById("xpText");
const currentWeaponText = document.getElementById("currentWeaponText");
const weapons = ["Stick", "Hammer", "Axe", "Sword", "HighSword"];
let currentWeapon = 0;
const inventory = [weapons[0]];

//Infos Monster
const monsters = [
                    {
                        "monster name": "DarkSlime",
                        "monster lvl": 1,
                        "monster health": 20
                    },
                    {
                        "monster name": "Skeleton",
                        "monster lvl":2 ,
                        "monster health": 85 
                    },
                    {
                        "monster name": "Zombie",
                        "monster lvl": 4,
                        "monster health": 200 
                    },
                    {
                        "monster name": "DarkOgre",
                        "monster lvl": 7,
                        "monster health": 370 
                    },
                    {
                        "monster name": "DarkElf",
                        "monster lvl": 10,
                        "monster health": 400 
                    },
                    {
                        "monster name": "DarkHighElf",
                        "monster lvl": 15,
                        "monster health": 500 
                    },
                    {
                        "monster name": "Lich",
                        "monster lvl": 20,
                        "monster health": 1500
                    }
                 ]
const monsterName = document.getElementById("monsterName");
const monsterLvl = document.getElementById("monsterLvl");
const monsterHealth = document.getElementById("monsterHealth");
const statMonster = document.querySelector(".monster");
let monsterHealthValue = 0;
let monsterLvlValue = 0;

//Button and Text
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const btn1 = document.getElementById("btn1Text");
const btn2 = document.getElementById("btn2Text");
const btn3 = document.getElementById("btn3Text");
const screenText = document.getElementById("screenText");

 // ----------- GAME -----------


// Screens upadtes

const screens = [
    {
        "functionName": goStore,
        "button text": ["Buy", "Sell", "GoTown"],
        "button function": [goBuy, goSell, goTown],
        text: "You see a Store, need buy or sell?"
    },
    {
        "functionName": goBuy,
        "button text": ["Buy 20 health for 20g", "Buy next weapon for 50g.", "GoTown"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: "You are buying."
    },
    {
        "functionName": goSell,
        "button text": ["Sell your last weapon ", "Sell all weapons (not equipped)", "GoTown"],
        "button function": [sellWeapon, sellAllWeapon, goTown],
        text: "You are selling."
    },
    {
        "functionName": goTown,
        "button text": ["Go Store", "Fight Monster", "Fight Lich"],
        "button function": [goStore, fightMonster, fightLich],
        text: "You are in Square Town"
    },
    {
        "functionName": fightMonster,
        "button text": ["Attack", "Dodge", "Run"],
        "button function": [attack, dodge, runFight],
        text: "You find a monster. The fight start!"
    },
    {
        "functionName": restart,
        "button text": ["Restart", "Restart", "Restart"],
        "button function": [restart, restart, restart],
        text: ""
    },
];


//Question to name hero
window.onload = function(){
    startGame();
}

function startGame(){
    const heroPrompt = window.prompt("Tell me your name, my Hero.")
    if(heroPrompt){
        heroName.innerText = heroPrompt
    } else {
        heroName.innerText = "Hero"
    }

    button1.onclick = goStore;
    button2.onclick = fightMonster;
    button3.onclick = fightLich;
}

//function to match array content the screen update

function updateScreen(screen) {
    btn1.innerText = screen["button text"][0];
    btn2.innerText = screen["button text"][1];
    btn3.innerText = screen["button text"][2];
    screenText.innerText = screen.text;
    button1.onclick = screen["button function"][0];
    button2.onclick = screen["button function"][1];
    button3.onclick = screen["button function"][2];
}

// __ -- __ STORE FUNCTIONS __ -- __

function goStore(){
    updateScreen(screens[0]);
}

function goBuy(){
    updateScreen(screens[1]);

}

function goSell(){
    updateScreen(screens[2]);
    screenText.innerText += "This is your inventory: \n";
    screenText.innerText += inventory;

}

function goTown(){
    updateScreen(screens[3])
}

function buyHealth(){
    if(gold < 20) {
        screenText.innerText = "You don't have gold enougth."
    } else {
        health += 20;
        healthText.innerText = health;
        gold -= 20;
        goldText.innerText = gold;
        screenText.innerText = "You buy 20 health."
    }
}

function buyWeapon(){
    if(gold >= 50){
        if(currentWeapon == weapons.length-1){
            screenText.innerText = "You alread have the strong weapon.";
            btn2.innerText = "Don`t have more strong weapon.";
        } else {
            currentWeapon++;
            currentWeaponText.innerText = weapons[currentWeapon];
            screenText.innerText = "You buy the next strong weapon, your attack increases!";
            inventory.push(weapons[currentWeapon])
            gold -= 50;
            goldText.innerText = gold;
            btn2.innerText = `Buy next weapon for 50g.`;
            if(currentWeapon >= weapons.length-1){
                btn2.innerText = "Don`t have more strong weapon.";
            } else {
                btn2.innerText = `Buy next weapon for 50g.`;
            }
        }
    } else {
        screenText.innerText = "You don't have enough gold.";
    }
}

function sellWeapon(){
    if(inventory.length == 1){
        screenText.innerText = "You can't sell your only weapon!"
    } else {
        inventory.splice(-2, 1);
        screenText.innerText = "You sell a weapon and received 30 gold."
        gold += 30;
        goldText.innerText = gold;
        screenText.innerText += "\n You inventory contain:" + inventory;
    }
}

function sellAllWeapon(){
    if(inventory.length == 1){
        screenText.innerText = "You can't sell your only weapon!"
    } else {
        gold += (inventory.length-1) * 30;
        goldText.innerText = gold;
        inventory.splice(0, inventory.length - 1);
        screenText.innerText = "You sell all weapon in your inventory and receive 30 gold for each."    
        screenText.innerText += "\n You inventory contain:" + inventory;
    }
}

// __ -- __ FIGHT FUNCTIONS __ -- __

//
function fightMonster(){
    updateScreen(screens[4]);
    //FIND MONSTER
    statMonster.style.display = "grid";
    if(xp < 100){
        //find lower lvl monster
        monsterUpdate(monsters[Math.floor(Math.random()*1)]);
    } else if(xp > 101 && xp < 350){
        //find medium lvl monster
        monsterUpdate(monsters[Math.floor(Math.random()*3)]);
    } else if(xp > 351 && xp < 800){
        //find hight lvl monster
        monsterUpdate(monsters[Math.floor(Math.random()*5)]);
    } else {
        //find all monsters
        monsterUpdate(monsters[Math.floor(Math.random()*6)]);
    }
}

function fightLich(){
    updateScreen(screens[4]);
    statMonster.style.display = "grid";
    monsterUpdate(monsters[6]);
    screenText.innerText = `You are fighting with Lich, the final boss! \n Please save us.`
}

function attack(){
    let giveDamage = Math.floor(Math.random()*(xp/2 + 10)) + ((currentWeapon + 1) * 5);
    if(giveDamage > 200){
        giveDamage = 150;
    }
    let receiveDamage = Math.floor(Math.random() * 21) + monsterLvlValue*2;
    monsterHealthValue -= giveDamage;
    monsterHealth.innerText = monsterHealthValue;
    health -= receiveDamage;
    healthText.innerText = health;
    screenText.innerText = `You hit ${giveDamage} on monster. \n`
    screenText.innerText +=`The monster attack you, -${receiveDamage} health`;

    if(monsterHealthValue <= 0){
        
        if(monsterLvlValue == 20){
            winGame();
        } else {
            winFight();
        }
    }

    if(health <= 0){
        lose();
    }

   
}

function winFight(){
    statMonster.style.display = "none";
    goTown();
    let rewardXp = Math.floor(Math.random()*monsterLvlValue*30);
    let rewardGold = Math.floor(Math.random() * (monsterLvlValue * 50));
    screenText.innerText = "You in the fight and return to Town Square.\n";
    gold += rewardGold;
    goldText.innerText = gold;
    xp += rewardXp;
    xpText.innerText = xp;
    screenText.innerText += `You reward fight are +${rewardGold} gold and +${rewardXp} xp.`

}

function winGame(){
    updateScreen(screens[5]);
    statMonster.style.display = "none";
    screenText.innerText += "Thank you! Finally we can living free again! \n"
    screenText.innerText += "You are the best!"

}

function lose(){
    confirm("You lose. The game are restarting now.")
    restart();
}

function restart(){
    xp = 0;
    gold = 50;
    inventory.splice(0, inventory.length)
    inventory.push(weapons[0])
    currentWeapon = 0;
    health = 150;

    xpText.innerText = xp;
    goldText.innerText = gold;
    currentWeaponText.innerText = weapons[currentWeapon];
    healthText.innerText = health;
    statMonster.style.display = "none";

    startGame();

    updateScreen(screens[3]);
    screenText.innerText = "In a realm shrouded in the shadows of darkness, a Lich, an immortal lord who wields the power of the dead, spreads its malevolent dominion over lands that were once prosperous. Villages tremble, and forests sigh under the weight of its nefarious presence. Only a hero born from the fire of determination and forged in the crucible of adversity can defeat it."

    

}

function monsterUpdate(monster){
    monsterName.innerText = monster["monster name"];
    monsterLvl.innerText = monster["monster lvl"];
    monsterHealth.innerText = monster["monster health"];
    monsterHealthValue = monster["monster health"];
    monsterLvlValue = monster["monster lvl"];
}

function dodge(){
    if(Math.random() > .12){
        screenText.innerText = "Monster attack, but you dodge."
    } else {
    let receiveDamage = Math.floor(Math.random() * 21) + monsterLvlValue*2;
    health -= receiveDamage;
    healthText.innerText = health;
    screenText.innerText =`The monster attack you, -${receiveDamage} health`;
    if(health <= 0) {
        lose();
    }
    }
}

function runFight(){
    if(Math.random() > .3){
        statMonster.style.display = "none";
        goTown();
        screenText.innerText = "You run the fight and return to Town Square."
    } else {
        let receiveDamage = Math.floor(Math.random() * 21) + monsterLvlValue*2;
        health -= receiveDamage;
        healthText.innerText = health;
        screenText.innerText =`You can't run and the monster attack you, -${receiveDamage} health`;
        if(health <= 0) {
            lose();
        }
        }
}



