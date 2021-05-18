from flask import Flask,render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy


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

class Contacts(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    number = db.Column(db.String(20), nullable=False)
    msg = db.Column(db.String(20), nullable=False)


session={}
params={}
params['login'] = True
@app.route('/')
def home():
    return render_template('homepage.html',params=params)

@app.route('/paint',methods = ['POST', 'GET'])
def paint():
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
    global params
    if 'user' in session :
        params['login'] = False
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
                params['login'] = False
                return redirect('/')
            else:
                print('wrong password')
        # db.session.add(user)
        # db.session.commit()
        return redirect('loginpage')
    else:
        return redirect('loginpage')

@app.route('/logout')
def logout():
    global session
    session = {}
    params['login'] = True
    # flash("Logged out Successfully","success")
    return redirect('/')
    
@app.route('/contact',methods = ['POST', 'GET'])
def contact():
    if request.method == 'POST':
        print('post')
        name = request.form.get('name')
        email = request.form.get('email')
        number = request.form.get('number')
        msg = request.form.get('msg')
        print(name, email,number,msg)
        entry = Contacts(name=name, email=email,number=number,msg=msg)
        db.session.add(entry)
        db.session.commit()
    else:
        print('get')
    return redirect('/')
if __name__ == '__main__':
    app.run(debug=True)
