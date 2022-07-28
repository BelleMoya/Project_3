from pydoc import render_doc
from flask import Flask, render_template
import pymongo
from config import conn

app = Flask(__name__)

# setup mongo connection
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.COL

@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    cities = list(db.segment.find())
    print(cities)

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index2.html", cities=cities)


if __name__ == "__main__":
    app.run(debug=True)