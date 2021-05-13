from flask import Flask,render_template, request, redirect, url_for, flash
app = Flask(__name__,template_folder='template')



@app.route('/')
def home():
    return render_template('homepage.html')

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

@app.route('/login',methods = ['POST', 'GET'])
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
