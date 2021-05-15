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
    email = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(120), nullable=False)


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

@app.route('/loginpage',methods=['GET'])
def loginpage():
    return render_template('login.html')

@app.route('/login',methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        cpassword = request.form.get('cpassword')
        print(username, email, password,cpassword)
        user = Users(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return redirect('loginpage')
    else:
        return "get"
if __name__ == '__main__':
    app.run(debug=True)
