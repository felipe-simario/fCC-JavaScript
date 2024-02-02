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
    
}

button1.onclick = function() {
    goStore();
}

function goStore(){
    btn1.innerText = "Buy";
    btn2.innerText = "Sell";
    btn3.innerText = "GoTown";
    screenText.innerText = "You stay in Store, what you need?";

    button1.onclick = function() {
        goBuy();
    }
}

function goBuy() {
    btn1.innerText = "Buy Health";
    btn2.innerText = "Buy next weapon " + '"' + weapons[1] + '".';
    btn3.innerText = "GoTown";
    screenText.innerText = "You are buying.";
    screenText.innerText += "Itens in your inventory = " + inventory;
}