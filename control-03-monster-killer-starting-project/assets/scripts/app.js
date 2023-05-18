const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const STRONG_ATTACK_VALUE = 17;

const enteredValue = prompt(
  "Enter maximum life for both Monster and Player",
  "100"
);
let chosenMaxLife = parseInt(enteredValue);

// user input validation and handling
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

adjustHealthBars(chosenMaxLife);

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

let playerLives = 3;

const PLAYER_ATTACK_MODES = {
  NORMAL_ATTACK: "NORMAL_ATTACK",
  STRONG_ATTACK: "STRONG_ATTACK",
};

const logEvents = {
  PLAYER_NORMAL_ATTACK: "PLAYER_NORMAL_ATTACK",
  PLAYER_STRONG_ATTACK: "PLAYER_STRONG_ATTACK",
  MONSTER_ATTACK: "MONSTER_ATTACK",
  PLAYER_HEALED: "PLAYER_HEALED",
  GAME_OVER: "GAME_OVER",
  LIFE_REDUCED: "LIFE_REDUCED",
};

let battleLog = [];

// bonus life setting
setBonusLife(playerLives);

function isPlayerDead() {
  return currentPlayerHealth <= 0;
}

function isBonusLifeAvailable() {
  return playerLives > 0;
}

function deductBonusLife() {
  playerLives--;
}

function writeToLog(event, damage, monsterHealth, playerHealth) {
  const logEntry = {
    event: event,
    value: damage,
    monsterHealth: monsterHealth,
    playerHealth: playerHealth,
  };
  battleLog.push(logEntry);
}

function reset() {
  writeToLog(
    logEvents.GAME_OVER,
    "GAME_OVER",
    currentMonsterHealth,
    currentPlayerHealth
  );
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function playerAttackValue(mode) {
  if (mode === PLAYER_ATTACK_MODES.NORMAL_ATTACK) {
    return PLAYER_ATTACK_VALUE;
  } else if (mode === PLAYER_ATTACK_MODES.STRONG_ATTACK) {
    return STRONG_ATTACK_VALUE;
  } else {
    throw "Invalid mode passed";
  }
}

function checkHealthAndDisplayResult() {
  let isGameResultReady = false;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    isGameResultReady = true;
    alert("You Won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    isGameResultReady = true;
    alert("You lost!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    isGameResultReady = true;
    alert("Drawn!");
  }

  if (isGameResultReady) {
    reset();
  }
}

function attackMonster(mode) {
  const attackValue = playerAttackValue(mode);
  const monsterDamage = dealMonsterDamage(attackValue);
  currentMonsterHealth -= monsterDamage;
  mode =
    mode === PLAYER_ATTACK_MODES.NORMAL_ATTACK
      ? logEvents.PLAYER_NORMAL_ATTACK
      : logEvents.PLAYER_STRONG_ATTACK;
  writeToLog(mode, monsterDamage, currentMonsterHealth, currentPlayerHealth);
}

function attackPlayer() {
  const initialHealth = currentPlayerHealth;
  // monster causes damage to player with force of MONSTER_ATTACK_VALUE
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    logEvents.MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  // check for bonus lives
  if (isPlayerDead() && isBonusLifeAvailable()) {
    deductBonusLife(); // Logical removal
    setBonusLife(playerLives); // UI rendering
    writeToLog(
      logEvents.LIFE_REDUCED,
      playerLives,
      currentMonsterHealth,
      currentPlayerHealth
    );
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
  if (currentPlayerHealth + HEAL_VALUE > chosenMaxLife) {
    alert("You can't heal more than set chosen health");
    healValue = chosenMaxLife - HEAL_VALUE;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  attackPlayer();
  checkHealthAndDisplayResult();
  writeToLog(
    logEvents.PLAYER_HEALED,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
}

function logHandler() {
  console.table(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHander);
logBtn.addEventListener("click", logHandler);
