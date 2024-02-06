// ----------- DECLARATIONS -----------

//Infos Hero
const heroName = document.getElementById("heroName");
let gold = 20;
const goldText = document.getElementById("goldText");
let health = 100;
const healthText = document.getElementById("healthText");
let xp = 0;
const xpText = document.getElementById("xpText");
const currentWeaponText = document.getElementById("currentWeaponText");
const weapons = ["Stick", "Hammer", "Axe", "Sword", "HighSword"];
let currentWeapon = weapons[0];
const inventory = [currentWeapon];

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
        "button text": ["Buy Health", "Buy next weapon " + '"' + weapons[1] + '".', "GoTown"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: "You are buying."
    },
    {
        "functionName": goSell,
        "button text": ["Sell your weapon " + '"' + inventory[inventory.length-1] + '".', "Sell all weapons (not equipped)" + '"' + weapons[1] + '".', "GoTown"],
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

function updateScreen(screen) {
    btn1.innerText = screen["button text"][0];
    btn2.innerText = screen["button text"][1];
    btn3.innerText = screen["button text"][2];
    screenText.innerText = screen.text;
    button1.onclick = screen["button function"][0];
    button2.onclick = screen["button function"][1];
    button3.onclick = screen["button function"][2];
}

function goStore(){
    updateScreen(screens[0])
}

function goBuy(){
    updateScreen(screens[1])
}

function goSell(){
    updateScreen(screens[2])
}

function goTown(){
    updateScreen(screens[3])
}

function buyHealth(){
    //vazia
}

function buyWeapon(){
    //vazia
}

function sellWeapon(){
    //vazia
}

function sellAllWeapon(){
    //vazia
}

function fightMonster(){
    //vazia
}




