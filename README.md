Bananagrams
Bananagrams is a word game created for groups of 2-4 players. Players choose from a pile of 144 available letter tiles and create as many words as they can in a connected grid format. The player to use all of their letters after all of the tiles in the center pool are exhausted wins!

Installing
To start the Banangrams application, first clone the bananagram-backend repository and follow the directions there. Link: https://github.com/kenman21/bananagram-backend

After following the instructions in banangrams-backend, execute the following commands inside of the bananagram-frontend directory

npm install

To host a local server for the application run the following in terminal while in the project directory:

npm start

Visit localhost:3001 in your browser to begin using the application.

User Experience

Users begin the bananagram application by first signing in with their desired username. Following this, they will enter the game lobby, which lists all of the available games that they can enter. To enter a specific game, users click on the "Join Game" button associated with the game they want to enter. 

Users that enter a game are shown an array of 144 letter tiles. These tiles represent the letters that are collectively used by all of the players, and will be randomly selected from throughout the remainder of the game. At the bottom of the page there is a section labeled "Player Tiles", which will hold all of a player's letters. The user can put tiles into their respective letter trays by dragging and dropping a tile from the center into their sections. For a 2-4 player game, players must drag and drop a total of 21 letters. 

After a player has successfully chosen all of their letters, their game board will render in the center of the screen. A user can play their letters by dragging a tile from their letter tray onto a square of the game board. Letters used to form words must be placed in a crossword-style format, and adjacent to one another to be considered a valid word. Invalid words are actively checked when a player places a tile, and are shown in an "Invalid Words" section in the left sidebar. When a player has used all of their tiles, and there are still letters in the collective tile pool, they can press the "PEEL" button at the top of the page. Doing so will give every player in the game an additional tile. If a player uses all of their tiles, and the tiles in the collective pool equal 0 or are fewer in number than the total number of players in the game, they win. The name of the winning player is shown in a message at the top of the page to all other players in the game. 

Authors

Sinclair Kinch- MatthewDtotheG
Kenneth Lehr  - kenman21

Acknowledgements
This is a pair programming assignment at the Flatiron School. Thanks to instructors Stephen, Tashawn, and Graham for their help along the way.
