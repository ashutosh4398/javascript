const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100; // need to rethink of const instead of let;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;


function attackHandler() {
    // player causes damage to monster with force = PLAYER_ATTACK_VALUE
    const monsterDamage = dealMonsterDamage(PLAYER_ATTACK_VALUE);
    currentMonsterHealth -= monsterDamage;

    if (currentMonsterHealth <= 0) {
        alert('You won!');
        return;
    }

    // monster causes damage to player with force of MONSTER_ATTACK_VALUE
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentPlayerHealth <= 0) {
        alert('You Lost!');
        return;
    }
    
}

attackBtn.addEventListener('click', attackHandler);