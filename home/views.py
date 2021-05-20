from django.shortcuts import render,redirect
from django.http import HttpResponse, request
# now for using login sys we import user model
from django.contrib.auth.models import User,auth


# Create your views here.
def home(request):
    print(User.is_authenticated)
    if request.user.is_authenticated:
        pass
    else:
        return redirect('/login')
    return render(request, 'homepage.html')

def paint(request):
    if request.method == 'GET':
        print('get')
    else:
        print('post')
        height = request.POST['height']
        width = request.POST['width']
        print(height,width)
        params={}
        params['height'] = height
        params['width'] = width
        print(params)
        return render(request,"canvas.html",params)
    return render(request, 'user_input.html')

def loginpage(request):
    return render(request,'login.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        print(username,password)
        # user = Users.query.filter_by(username=username).first() 
        # if user is None:
        #     print('no user')
        # else:
        #     print('user')
        #     if user.password == password:
        #         print('password matched')
        #         session['user'] = username
        #         params['login'] = False
        #         return redirect('/')
        #     else:
                # print('wrong password')
        # db.session.add(user)
        # db.session.commit()
        return redirect('loginpage')
    else:
        return redirect('loginpage')

def logout(request):
    auth.logout(request)
    return redirect('/login')