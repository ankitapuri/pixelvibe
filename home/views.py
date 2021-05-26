from django.shortcuts import render,redirect
from django.http import HttpResponse, request
# now for using login sys we import user model
from django.contrib.auth.models import User,auth
from django.contrib.auth  import authenticate,  login, logout
from home.models import Contact,Gallery
from django.contrib import  messages
from django.contrib.auth.decorators import login_required

params={}
# Create your views here.
def home(request):
    allArts = Gallery.objects.all()
    params['allArts']=allArts
    return render(request, 'homepage.html',params)

def paint(request):
    if request.user.is_authenticated:
        pass
    else:
        messages.error(request,"Please Login First !!")
        return redirect('/login')
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


def handleSignUp(request):
    if request.method=="POST":
        # Get the post parameters
        username=request.POST['username']
        email=request.POST['email']
        pass1=request.POST['password']
        pass2=request.POST['cpassword']
        if pass1 == pass2:
            # checking if username is exist
            if User.objects.filter(username=username).exists():
                messages.error(request,'user already exist Try a different username!')
                return redirect('/signup')
            else:
                if User.objects.filter(email=email).exists():
                    messages.error(request,'email already exist Try a different email!')
                    return redirect('/signup')
                elif len(pass1)<=5:
                    messages.error(request,'Password must be at least 6 characters Long!!')
                    return redirect('/signup')
                else:
                    # Create the user
                    myuser = User.objects.create_user(username, email, pass1)
                    myuser.save()
                    messages.success(request,'Successfully!! Registred Please Login')
                    return redirect('/login')
           
        else:
            messages.error(request,'password not matched Please Try Again!')
            return redirect('/signup')
    else:
        return render(request,'signup.html')

    

def Handlelogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        print(username,password)
        exist = User.objects.all().filter(username=username)
        print(exist)
        if len(exist)==0:
            messages.error(request," username not Found Please Sign Up")
            return redirect('/login')
        user=authenticate(username=username, password=password) 
        if user is not None:
            login(request, user)
            print("Successfully Logged In")
            print('loged in')
            return redirect("/")
        else:
            messages.error(request,"Invalid credentials! Please try again")
            return redirect("/login")
    else:
        return render(request,'login_new.html')

def logout(request):
    auth.logout(request)
    return redirect('/login')

def contact(request):
    if request.method=="POST":
        print('post')
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        number = request.POST['number']
        content = request.POST['content']
        print(firstname,email,content,number)
        if len(firstname)<2 or len(email)<3 or len(number)<10 or len(content)<4:
            messages.error(request, "Please fill the form correctly")
        else:
            ins = Contact(firstname=firstname,lastname=lastname,email=email,content=content,number=number)
            ins.save()
            messages.success(request,'Thank You for contacting Us!! Your message has been saved ')
        return redirect('/contact')
    else:
        print('not post')
    return render(request,'contact.html')

def error_404(request, *args, **argv):
        data = {}
        return render(request,'404.html', data)