from flask import Flask,render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
import json

app = Flask(__name__,template_folder='template')

#now we use config.json
with open('config.json','r') as c:
    params = json.load(c)['params']
local_server = True

app.config['SQLALCHEMY_DATABASE_URI'] = params['local_uri']
db = SQLAlchemy(app)
class Users(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    phone_num = db.Column(db.String(12), nullable=False)
    password = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(20), nullable=False)


@app.route('/',methods = ['POST', 'GET'])
def hello_world():
    if request.method == 'GET':
        print('get')
    else:
        print('post')
        height = request.form['height']
        width = request.form['width']
        print(height,width)
        return render_template("canvas.html",height=height,width=width)
    return render_template('user_input.html')

@app.route('/login',methods = ['POST', 'GET'])
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
