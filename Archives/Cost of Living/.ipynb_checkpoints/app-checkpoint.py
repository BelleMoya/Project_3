{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "id": "fe13aa88",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * Serving Flask app \"__main__\" (lazy loading)\n",
      " * Environment: production\n",
      "\u001b[31m   WARNING: This is a development server. Do not use it in a production deployment.\u001b[0m\n",
      "\u001b[2m   Use a production WSGI server instead.\u001b[0m\n",
      " * Debug mode: on\n"
     ]
    },
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      " * Restarting with watchdog (windowsapi)\n"
     ]
    },
    {
     "ename": "SystemExit",
     "evalue": "1",
     "output_type": "error",
     "traceback": [
      "An exception has occurred, use %tb to see the full traceback.\n",
      "\u001b[1;31mSystemExit\u001b[0m\u001b[1;31m:\u001b[0m 1\n"
     ]
    },
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "C:\\Users\\cbarr\\anaconda3\\lib\\site-packages\\IPython\\core\\interactiveshell.py:3452: UserWarning: To exit: use 'exit', 'quit', or Ctrl-D.\n",
      "  warn(\"To exit: use 'exit', 'quit', or Ctrl-D.\", stacklevel=1)\n"
     ]
    }
   ],
   "source": [
    "from flask import Flask, render_template\n",
    "import pymongo\n",
    "from config import conn\n",
    "\n",
    "app = Flask(__name__)\n",
    "\n",
    "# setup mongo connection\n",
    "client = pymongo.MongoClient(conn)\n",
    "\n",
    "# connect to mongo db and collection\n",
    "db = client.COL\n",
    "\n",
    "\n",
    "@app.route(\"/\")\n",
    "def index():\n",
    "    # write a statement that finds all the items in the db and sets it to a variable\n",
    "    states = list(db.segment.find())\n",
    "    print(states)\n",
    "\n",
    "    # render an index.html template and pass it the data you retrieved from the database\n",
    "    return render_template(\"index.html\", states=states)\n",
    "\n",
    "\n",
    "if __name__ == \"__main__\":\n",
    "    app.run(debug=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "439684cf",
   "metadata": {},
   "outputs": [],
   "source": [
    "exit"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "c2b01e59",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.9.7"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
