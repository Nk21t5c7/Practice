from openai import OpenAI
from flask import Flask
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
client = OpenAI(
  api_key=os.getenv("")
)

completion = client.chat.completions.create(
  model="gpt-4o-mini",
  store=True,
  messages=[
    {"role": "user", "content": "write a haiku about ai"}
  ]
)

print(completion.choices[0].message);