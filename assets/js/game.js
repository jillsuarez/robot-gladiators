var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert plaers that thery are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

     //if player choses to fight, then fight
     if (promptFight === "fight" || promptFight === "FIGHT") {
         //remove enemy's health by subtracting the amount set in the playerAttack variable
         enemyHealth = enemyHealth - playerAttack;

         // Log a resulting message to the console so we know that it worked.
         console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
         );

         // check enemys health
         if (enemyHealth <= 0) {
         window.alert(enemyName + " has died!");
         }
         else {
         window.alert(enemyName + " still has " + enemyHealth + " health left.");
         }

         //remove player's health by subtracting the amount set in the enemyAttack variable
         playerHealth = playerHealth - enemyAttack;

         // Log a resulting message to the console so we know that it worked.
         console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
         );
         // check player's health
         if (playerHealth <= 0) {
             window.alert( playerName + " has died!");
         }
         else {
             window.alert( playerName + " still has " + playerHealth + " health left.");
         }
     } 

     //if player choses to skip
     else if (promptFight === "skip" || promptFight === "SKIP") {
         //confirm player wants to skip
         var confirmSkip = window.confirm("Are you sure you'd like to quit?");

         // if yes (true), leave fight
         if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money for player skipping
            playerMoney = playerMoney - 2;
         }
         //if no (false), ask question again by running fight() option
         else {
            fight();
         }
     }
     
     //if invalid input
     else {
         window.alert("You need to chose a valid option. Try again!");
     }

      


};

fight();