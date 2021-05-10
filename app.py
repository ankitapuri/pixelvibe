from flask import Flask,render_template, request, redirect, url_for, flash
app = Flask(__name__,template_folder='template')

@app.route('/',methods = ['POST', 'GET'])
def hello_world():
    if request.method == 'GET':
        print('get')
    else:
        print('post')
        height = request.form['height']
        width = request.form['width']
        print(height,width)
        return render_template("index3.html",height=height,width=width)
    return render_template('index2.html')


if __name__ == '__main__':
    app.run(debug=True)
