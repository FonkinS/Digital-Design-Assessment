### How To Run:
So I'll assume you have python3 and npm (The Node Package Manager) installed. 
Install the python3 modules *Flask* and *sqlite3* (Flask for running the server, and SQlite3 for interacting with the database)

Run the server in one terminal window by navigating to `[path to this folder]/ddassessment/server` and running `python3 -m flask --app main.py run --debug`

Run the actual application in another terminal window by running `npm start` in the root directory. Then open your browser and go to `127.0.0.1:3000`. 

### How To Play:
So this is meant to be a multiplayer game, although it can be played with just one player. To simulate playing with multiple players, you can open the website in multiple browser tabs, however it will have to be using another browser or Chrome Profile (or using Incognito mode), to make sure that the Cookies are not shared between the two tabs.

The first (hosting) player should press "Create Game", and input their name. This will take them to the lobby screen, where it shows the game code, which they can tell the other players, who can then press "Join Game", and input that code, in order to join the lobby. Once everyone has joined the game (Max 10 players, otherwise stuff will break) the host can press "Start Game".

There will be a sequence of questions, for each question there is a ~5 second preview of the question, then up to 10 seconds for each player to input their answer. While waiting for the rest of the players, you can see what the correct answer was, and a quick explanation for why. Each player should get a certain amount of points, inversely proportional to how much time they spent answering. 

At the end of the game, it will show how many points each player got
