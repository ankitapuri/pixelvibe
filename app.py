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
        return render_template("canvas.html",height=height,width=width)
    return render_template('user_input.html')


if __name__ == '__main__':
    app.run(debug=True)
