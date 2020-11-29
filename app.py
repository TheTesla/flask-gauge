#!/usr/bin/env python3

from flask import Flask, Response, render_template
import time

app = Flask(__name__)

i = 0
told = 0
eold = 0


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/js/gauge.js")
def js():
    return render_template("/js/gauge.js")

@app.route("/val1")
def val1():
    global i
    global told
    global eold
    with open('/sys/devices/virtual/powercap/intel-rapl/intel-rapl:0/energy_uj','r') as f:
        e = int(f.read())
    with open('/sys/devices/virtual/powercap/intel-rapl/intel-rapl:0/constraint_0_max_power_uw','r') as f:
        pmax = int(f.read())/1000000
    t = time.time()
    p = (e-eold)/(t-told)/1000000
    eold = e
    told = t
    print(p)
    #i = i + 0.01
    #return Response("{:0.3f}".format(i), mimetype="text/plain")
    #return "{:0.3f}".format(p/pmax)
    return '{{ "power": "{:0.3f}", "maxpower": "{:0.3f}"}}'.format(p, pmax)

if __name__ == "__main__":
    app.run()


