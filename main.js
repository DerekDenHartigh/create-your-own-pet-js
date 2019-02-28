(function() {
    /**
     * The Game Object
     */
    class Game {
        constructor(petName, userName) {
            this.petName = petName;
            this.userName = userName;
            this.pet = new Pet(petName);
            // Uncomment these once you've created the food and activity objects
            // this.food = [
            //     new Food("Apple", 5),
            //     new Food("Granola", 25),
            //     new Food("Spaghetti", 50)
            // ];
            // this.activities = [
            //     new Activity("Pet", 5),
            //     new Activity("Cuddle", 25),
            //     new Activity("Walk", 50)
            // ];
            this.gameOn = true;
            this.gameClock;
        }        
        setupGame() {
            // Call all of the setup functions here
            this.setupPet();
            this.setupFood();
            this.setupActivites();
            this.runGame();
        }
        setupPet() {
            console.log('set up pet called');
            // Update the pet's name
            document.getElementById('pet-name').innerText = `${this.pet.name}`;

            // Run all of the update functions
            this.updateEnergyLevel();
            this.updateFunLevel();
            this.updateHappinessLevel();
        }
        // Set up event listeners for the food here
        setupFood() {
            console.log('set up food called');         
        }
        // Set up event listeners for the activities here
        setupActivites() {
            console.log('set up activities called');
        }

        // Update the Energy Level text here (set it to this.pet.energyLevel)
        updateEnergyLevel() {
            console.log('update energy levels called');
        }

        // Update the Fun Level text here
        updateFunLevel() {
            console.log('update fun levels called');
        }

        // Update the happiness level text
        // Swap the images based on happiness level
        updateHappinessLevel() {
            // Update the happiness level text here

            // Update the pet's image here
            // 65+, image/pet-happy.png

            // Between 35 and 64, image/pet-bored.png

            // Between 0 and 34, , image/pet-sad.png
        }
        runGame() {
            this.gameClock = setInterval(() => {
                if (this.pet.checkEnergy() !== 0 && this.pet.isAlive && this.gameOn) {
                    this.pet.energyLevel -= 10;
                    this.pet.funLevel -= 10;
                    this.updateEnergyLevel();
                    this.updateFunLevel();
                    this.updateHappinessLevel();
                } else {                              
                    this.pet.die();
                    this.gameOver();          
                    clearInterval(this.gameClock);
                }
            }, 10000);
        }
        gameOver() {
            this.gameOn = false;
            clearInterval(this.gameClock);
            alert("GAME OVER");
        }
    }

    /**
     * The Pet Object
     */
    class Pet {
        constructor(name) {
            this.name = name;
            this.energyLevel = 50;
            this.funLevel = 50;
            this.happinessLevel = 100;
            this.isAlive = true;
        }

        // energy level - food energy value
        feed(food) {
            console.log('feed called');            
        }

        // fun level - food fun value
        play(activity) {
            console.log('play called');        
        }

        // Check the happiness
        checkHappiness() {
            return Math.floor((this.energyLevel + this.funLevel)/2)
        }

        // Kill the pet
        die() {
            this.isAlive = false;
        }
    }

    /**
     * The Food Object
     */
    class Food { // Set up name and energyValue in the constructor
        constructor( ) {
            this.name = name;
            this.energyValue = energyValue;
        }
    } 

    /**
     * The Activity Object
     */
    class Activity { // Set up name and funValue in the constructor
        constructor( ) {
        }
    }


    // UI Logic
    // Grab all of the elements we will need by ID
    let gameOffContainer = document.getElementById('game-off'),
        gameOnContainer  = document.getElementById('game-on'),
        btnStartGame     = document.getElementById('btnStartGame'),
        btnQuitGame      = document.getElementById('btnQuitGame'),
        inputPetName     = document.getElementById('input-pet-name').value,
        inputUserName    = document.getElementById('input-username').value,
        theGame;

    function startGame() {
        // Here, add the hide class to the game off container, and remove it from game on
        // Once hide is setup, this will hide and show the game after the user starts
        gameOffContainer.classList.add('hide');
        gameOnContainer.classList.remove('hide');

        // Set theGame variable to a new Game(), using the user's Pet Name and User Name to create it
        // Call the game objects 'setupGame()' method
        // Finally, add an event listener to the quit game button that calls the endGame function
    }

    function endGame() {
        gameOffContainer.classList.remove('hide');
        gameOnContainer.classList.add('hide');
        theGame.gameOver();
    }

    btnStartGame.addEventListener('click', startGame);
})();