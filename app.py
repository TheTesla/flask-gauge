#!/usr/bin/env python3

from flask import Flask, Response, render_template

app = Flask(__name__)

i = 0;

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/js/gauge.js")
def js():
    return render_template("/js/gauge.js")

@app.route("/val1")
def val1():
    global i
    print(i)
    i = i + 0.01
    #return Response("{:0.3f}".format(i), mimetype="text/plain")
    return "{:0.3f}".format(i)

if __name__ == "__main__":
    app.run()


