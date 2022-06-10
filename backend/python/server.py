import json
from flask import Flask, request, jsonify
app = Flask(__name__)

whitelist = []

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/register")
def get_whitelist():
  return jsonify(whitelist)

@app.route('/register', methods=['POST'])
def set_whitelist():
  global whitelist
  data = json.loads(request.data)
  whitelist = data['whitelist']
  return jsonify(whitelist)

if __name__ == "__main__":
  app.run()
