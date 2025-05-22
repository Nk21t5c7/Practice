import hashlib 
import hmac 
import base64
from flask import Flask, request
from app import 


app = Flask(__name__)

@app.route("/webhook", methods=['POST'])
def webhook():
        # 署名検証を無視する（テスト用）
    body = request.get_json()
    print(body)
    return 'OK'

@app.route("/")
def home():
    return "App working"
