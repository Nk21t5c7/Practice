from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# CORS(app, origins=["http://localhost:3002"])
CORS(app, resources={r"/*": {"origins": "*"}})


# @app.route('/api/data/', methods = ['GET'])
# def get_Data


@app.route('/')
def hello():
    return jsonify(message='Hello')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    