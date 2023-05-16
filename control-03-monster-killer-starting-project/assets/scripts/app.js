const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

const STRONG_ATTACK_VALUE = 17;

let chosenMaxLife = 100; // need to rethink of const instead of let;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

const PLAYER_ATTACK_MODES = { NORMAL_ATTACK: 0, STRONG_ATTACK: 1 };


function playerAttackValue(mode) {
    if (mode === PLAYER_ATTACK_MODES.NORMAL_ATTACK) {
        return PLAYER_ATTACK_VALUE;
    } else if( mode === PLAYER_ATTACK_MODES.STRONG_ATTACK ) {
        return STRONG_ATTACK_VALUE
    } else {
        throw "Invalid mode passed";
    }
}

function attackMonster(mode) { 
    const attackValue = playerAttackValue(mode);
    const monsterDamage = dealMonsterDamage(attackValue);
    currentMonsterHealth -= monsterDamage;
}

function attackPlayer() { 
    // monster causes damage to player with force of MONSTER_ATTACK_VALUE
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
}


function attackHandler() {
    attackMonster(PLAYER_ATTACK_MODES.NORMAL_ATTACK);

    if (currentMonsterHealth <= 0) {
        alert('You won!');
        return;
    }
    attackPlayer()
    if (currentPlayerHealth <= 0) {
        alert('You Lost!');
        return;
    }
}

function strongAttackHandler() {
    attackMonster(PLAYER_ATTACK_MODES.STRONG_ATTACK);
    if (currentMonsterHealth <= 0) {
        alert('You won!');
        return;
    }
    attackPlayer()
    if (currentPlayerHealth <= 0) {
        alert('You Lost!');
        return;
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);