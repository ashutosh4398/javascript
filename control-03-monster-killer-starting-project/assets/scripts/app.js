const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const STRONG_ATTACK_VALUE = 17;

let chosenMaxLife = 100; // need to rethink of const instead of let;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

let playerLives = 1;

const PLAYER_ATTACK_MODES = { NORMAL_ATTACK: 0, STRONG_ATTACK: 1 };


function isPlayerDead() {
    return currentPlayerHealth <= 0;
}

function isBonusLifeAvailable() {
    return playerLives > 0;
}

function deductBonusLife() {
    playerLives--;
}

function playerAttackValue(mode) {
    if (mode === PLAYER_ATTACK_MODES.NORMAL_ATTACK) {
        return PLAYER_ATTACK_VALUE;
    } else if( mode === PLAYER_ATTACK_MODES.STRONG_ATTACK ) {
        return STRONG_ATTACK_VALUE
    } else {
        throw "Invalid mode passed";
    }
}

function checkHealthAndDisplayResult() {
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        return alert("You Won!");
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        return alert('You lost!');
    } else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        return alert("Drawn!");
    }
}

function attackMonster(mode) { 
    const attackValue = playerAttackValue(mode);
    const monsterDamage = dealMonsterDamage(attackValue);
    currentMonsterHealth -= monsterDamage;
}

function attackPlayer() { 
    const initialHealth = currentPlayerHealth;
    // monster causes damage to player with force of MONSTER_ATTACK_VALUE
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    // check for bonus lives
    if (isPlayerDead() && isBonusLifeAvailable()) {
        deductBonusLife(); // Logical removal
        removeBonusLife(); // UI rendering
        currentPlayerHealth = initialHealth;
        alert("You would be dead but the bonus life saved you!!");
        setPlayerHealth(initialHealth);
    }   
}


function attackHandler() {
    attackMonster(PLAYER_ATTACK_MODES.NORMAL_ATTACK);
    attackPlayer();
    checkHealthAndDisplayResult();
}

function strongAttackHandler() {
    attackMonster(PLAYER_ATTACK_MODES.STRONG_ATTACK);
    attackPlayer();
    checkHealthAndDisplayResult();
}


function healPlayerHander() {
    let healValue;
    if(currentPlayerHealth + HEAL_VALUE > chosenMaxLife) {
        alert("You can't heal more than set chosen health");
        healValue = chosenMaxLife - HEAL_VALUE;
    } else {
        healValue = HEAL_VALUE;
    }
    
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    attackPlayer();
    checkHealthAndDisplayResult();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHander);