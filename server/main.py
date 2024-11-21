from flask import Flask
from flask import request
from flask_cors import CORS

#import sqlite3

app = Flask(__name__)
CORS(app) # enables CORS

@app.route("/joinGame")
def joinGame():
    return "You're Dumb: "

"""
s = CREATE TABLE IF NOT EXISTS tab (
                name TEXT NOT NULL,
                password TEXT
            );
    "
    with sqlite3.connect("database.db") as conn:
        conn.cursor().execute(s)
        conn.commit()
    return {"thing": "Your Mom is fat"}
"""
