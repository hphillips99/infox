import requests
from flask import Flask, request

app = Flask(__name__)

API_URL = "https://api-inference.huggingface.co/models/google/pegasus-xsum"
API_TOKEN = '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'
headers = {"Authorization": f"Bearer {API_TOKEN}"}

@app.route("/model", methods=["GET", "POST"])

def check_input():
    user = request.form['nm']
    response = requests.post(API_URL, headers=headers, json=user)
    output = response.json()
    return output[0]['summary_text']

if __name__ == '__main__':
   app.run(debug = True)