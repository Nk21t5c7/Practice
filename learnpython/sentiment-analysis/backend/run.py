from flask import Flask, request, jsonify
from flask_cors import CORS
from analysis.test1 import TestAnalyzer

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

analyzer = TestAnalyzer('analysis/trained.joblib', 'analysis/vectorizer.joblib')


@app.route('/api/msg', methods = ['POST'])
def submit_msg():
    # receive as json
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No data'}), 400
    
    msg = data.get('msg')
    print(msg)
    
    return jsonify({'result': msg}), 200
    
    


@app.route('/')
def hello():
    return jsonify(message='Hello')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    