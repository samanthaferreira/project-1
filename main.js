'use strict'


function createHtml(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}
  
  
function main() {
  // finds the div in the html (div with id main-content) and stores it in a variable
  var mainContentElement = document.getElementById('main-content');

  //TITLE SCREEN

  var titleScreen;
  var startButton;

  function handleStartClick() {
     destroyStartPage();
     createGameScreen();
  }

  function createTitleScreen(){
    titleScreen = createHtml(`
      <div class="title-screen">
        <button>Start Mission!</button>
      </div>
    `);

    mainContentElement.appendChild(titleScreen);
    startButton = titleScreen.querySelector('button');
    startButton.addEventListener('click', handleStartClick);//goes to handlestartclick function, that function destroys start page when click and creates game page
  }
    // add event listener when click run a functionb -> console.log(!!)

  function destroyStartPage(){
    titleScreen.remove(); // removes titleScreen html
    startButton.removeEventListener('click', handleStartClick);// removes button from screen
  }
   




  //GAME SCREEN

   var game;

   function gameEnded(){
    destroyGamePage();
    createGameOver();
   } 

  function createGameScreen(){
    // gameScreen = createHtml(``);
    game = new Game(mainContentElement); // send the mainContentElement variable to the Game
    
    game.build();
    game.start();
    console.log("im in game screen")
    // window.setTimeout(gameEnded, 1000) //will call gameEnded ibn 5 secs
  }

  function destroyGamePage(){
     game.destroy();
  }




  //GAME OVER SCREEN
   
  var gameOverScreen;
  var restartButton;


  function handleRestartClick(){
    destroyGameOverScreen();
    createGameScreen();
  }



  function createGameOver(){
    gameOverScreen = createHtml(`<div class = "game-over">
    <p>Game Over!</p>
    <button> Restart </button>
    </div>`);
    
    mainContentElement.appendChild(gameOverScreen);
    restartButton = gameOverScreen.querySelector('button');
    restartButton.addEventListener('click', handleRestartClick);
  }
  
  function destroyGameOverScreen(){
    gameOverScreen.remove();
    restartButton.removeEventListener('click', handleRestartClick);

  }
  
  // -- START!

  createTitleScreen();
}


main();

//window.addEventListener('load', main); //?

