// ----------- DECLARATIONS -----------

//Infos Hero
const heroName = document.getElementById("heroName");
let gold = 250;
const goldText = document.getElementById("goldText");
let health = 100;
const healthText = document.getElementById("healthText");
let xp = 0;
const xpText = document.getElementById("xpText");
const currentWeaponText = document.getElementById("currentWeaponText");
const weapons = ["Stick", "Hammer", "Axe", "Sword", "HighSword"];
let currentWeapon = 0;
const inventory = [weapons[0]];

//Infos Monster
const monsters = ["DarkSlime", "Skeleton", "Zombie", "DarkOgre", "DarkElf", "DarkHighElf", "Lich"];
const monsterName = document.getElementById("monsterName");
const monsterLvl = document.getElementById("monsterLvl");
const monsterHealth = document.getElementById("monsterHealth");

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
        "button function": [goStore, fightMonster, goTown],
        text: "You are in Square Town"
    }
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
        screenText.innerText += "You buy 20 health."
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

function fightMonster(){
    //vazia
}




