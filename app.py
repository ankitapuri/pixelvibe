from flask import Flask,render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
import json

app = Flask(__name__,template_folder='template')

server = "localhost"
username = "root"
password = ""
database = "pixelvibe"

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://{}:{}@{}/{}'.format(username,password,server,database)
# app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:@localhost/pixelvibe"
db = SQLAlchemy(app)
class Users(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(120), nullable=False)

session={}
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

@app.route('/signup',methods = ['POST', 'GET'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        cpassword = request.form.get('cpassword')
        print(username, email, password,cpassword)
        user = Users.query.filter_by(username=username).first()
        if user is None:  
            user = Users(username=username, email=email, password=password)
            db.session.add(user)
            db.session.commit()
            return redirect('loginpage')
        else:
            print('user exists')
            return redirect('signup')
    else:
        return redirect('loginpage')

@app.route('/login',methods = ['POST', 'GET'])
def login():
    if 'user' in session :
        return redirect('/')
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        print(username,password)
        user = Users.query.filter_by(username=username).first() 
        if user is None:
            print('no user')
        else:
            print('user')
            if user.password == password:
                print('password matched')
                session['user'] = username
                return redirect('/')
            else:
                print('wrong password')
        # db.session.add(user)
        # db.session.commit()
        return redirect('loginpage')
    else:
        return redirect('loginpage')
if __name__ == '__main__':
    app.run(debug=True)
