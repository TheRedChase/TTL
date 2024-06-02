var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    update: 1
}

function earnGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("Gold").innerHTML = gameData.gold + " Gold"
}

function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        document.getElementById("Gold").innerHTML = gameData.gold + " Gold"
        document.getElementById("perClickUpgrade").innerHTML = "Improve class (Currently level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
}

var mainGameLoop = window.setInterval(function() {
    earnGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("SaveTTL", JSON.stringify(gameData))
}, 15000)

var saveGame = JSON.parse(localStorage.getItem("SaveTTL"))
if (saveGame !== null) {
    gameData = saveGame
}