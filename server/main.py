from flask import Flask
from flask import request
from flask_cors import CORS
import sqlite3
import random

#import sqlite3

app = Flask(__name__)
CORS(app) # enables CORS


def c(name):
    return request.args.get(name)


def randNum():
    return random.randint(100_000, 1_000_000)


@app.route("/startGame")
def startGame():
    player_id = randNum()
    game_id = randNum()
    try:
        with sqlite3.connect("database.db") as conn:
            conn.cursor().execute(f"""INSERT INTO games (id, player0, currentPlayerIndex) VALUES ({game_id}, {player_id}, 1);""")
            conn.cursor().execute(f"""INSERT INTO players (id, name, game) VALUES ({player_id}, "{c('name')}", {game_id});""")
            conn.commit()
    except Exception as e:
        print(e)
        return "ERROR"
    return str(player_id) + " " + str(game_id)

@app.route("/joinGame")
def joinGame():
    player_id = randNum()
    with sqlite3.connect("database.db") as conn:
        try:
            res = conn.cursor().execute(f'SELECT * FROM games WHERE id = {c("code")};')
            output = res.fetchone()
            if (output is None):
                return "ERROR"
            playerIndex = output[11]
            conn.cursor().execute(f"""INSERT INTO players (id, name, game) VALUES ({player_id}, "{c("name")}", {c("code")})""")
            conn.cursor().execute(f"""UPDATE games SET player{playerIndex} = {player_id}, currentPlayerIndex = {playerIndex+1} WHERE id = {c("code")}""")
            print(f"""UPDATE games SET player{playerIndex} = {player_id}, currentPlayerIndex = {playerIndex+1} WHERE id = {c("code")}""")
            conn.commit()
        except Exception as e:
            print(e)
            return "ERROR"
    return str(player_id)


@app.route("/getLobby")
def getLobby():
    with sqlite3.connect("database.db") as conn:
        try:
            res = conn.cursor().execute(f'SELECT * FROM games WHERE id = {c("code")};')
            output = res.fetchone()
            if (output is None):
                return "ERROR"
            print(output)
            return output
        except:
            return "ERROR"


"""s = CREATE TABLE IF NOT EXISTS tab (
                name TEXT NOT NULL,
                password TEXT
            );
    "
    with sqlite3.connect("database.db") as conn:
        conn.cursor().execute(s)
        conn.commit()
    return {"thing": "Your Mom is fat"}
"""
