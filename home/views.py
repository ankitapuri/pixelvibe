from django.shortcuts import render,redirect
from django.http import HttpResponse, request
# now for using login sys we import user model
from django.contrib.auth.models import User,auth
from django.contrib.auth  import authenticate,  login, logout
from home.models import Contact,Gallery
from django.contrib import  messages
from django.contrib.auth.decorators import login_required
import math
import random
from django.contrib.auth.hashers import make_password, check_password
import smtplib
import re
regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
def check(email):
    if(re.search(regex,email)):
        return True
    else:
        return False
params={}
# Create your views here.
def home(request):
    allArts = Gallery.objects.all()
    params['allArts']=allArts
    return render(request, 'homepage.html',params)
def changeDimensions(request):
    global params
    params = {}
    return redirect('/paint')

def paint(request):
    global params
    if request.user.is_authenticated:
        pass
    else:
        messages.error(request,"Please Login First !!")
        return redirect('/login')
    if request.method == 'GET':
        print('get')
        if 'height' in params.keys() and 'width' in params.keys():
            return render(request,"canvas.html",params)
    else:
        print('post')
        height = request.POST['height']
        width = request.POST['width']
        print(height,width,type(height))
        if int(width) <= 80 and int(height) <= 80:
            pass
        else:
            messages.error(request,"Width and height must be less than 120!!")
            return redirect("/changeDimensions")
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
        # form validations for signup added by arpit jain
        if(check(email) == True):
            pass
        else:
            messages.error(request,"Email is not valid :( Please Try Again")
            return redirect('/signup')
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

def send_warning_email(email):
    import smtplib
    con = smtplib.SMTP("smtp.gmail.com",587)
    con.ehlo()
    con.starttls()
    admin_email = "pixelzvibe@gmail.com"
    admin_password = "pixelvibeart123"
    con.login(admin_email,admin_password)
    msg = "Some One is Trying To Login With Your Account !!"
    con.sendmail(admin_email,email,"Subject:Login Warning \n\n"+msg)
  

  
login_users = {}
def Handlelogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        print(username,password)
        exist = User.objects.filter(username=username).exists()
        print(exist)
        if not exist:
            messages.error(request," username not Found Please Sign Up")
            return redirect('/login')
        user = User.objects.filter(username=username).first()
        print(user,user.password,password)
        
        user=authenticate(username=username,password=password) 
        if user is not None:
            if username in login_users.keys():
                del(login_users[user.username])
            login(request, user)
            print("Successfully Logged In")
            print('loged in')
            return redirect("/")
        else:
            print("Someone tried to login and failed.")
            if username in login_users.keys():
                login_users[username]+=1
            else:
                login_users[username]=1
            print(login_users)
            if login_users[username] == 5:
                user1 = User.objects.filter(username=username).first()
                print(user1.email)
                send_warning_email(user1.email)
                print("They used username: {} and password: {}".format(username,password))
                
            messages.error(request,"Invalid credentials! Please try again")
            return redirect("/login")
    else:
        return render(request,'login_new.html')

def logout(request):
    auth.logout(request)
    return redirect('/login')

def send_email_to_Admin(msg,email):
    con = smtplib.SMTP("smtp.gmail.com",587)
    con.ehlo()
    con.starttls()
    admin_email = "pixelzvibe@gmail.com"
    admin_password = "pixelvibeart123"
    con.login(admin_email,admin_password)
    msg = str(msg)
    con.sendmail("email",admin_email,"Subject:Contact Response To PixelVibe \n\n"+msg)

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
            msg = str(firstname) + "is trying to contact with us. \nmsg : " + str(content) 
            send_email_to_Admin(msg,email)
            messages.success(request,'Thank You for contacting Us!! Your message has been saved ')
        return redirect('/contact')
    else:
        print('not post')
    return render(request,'contact.html')

def error_404(request, *args, **argv):
        data = {}
        return render(request,'404.html', data)


def send_email_to_user(otp,email):
    import smtplib
    con = smtplib.SMTP("smtp.gmail.com",587)
    con.ehlo()
    con.starttls()
    admin_email = "pixelzvibe@gmail.com"
    admin_password = "pixelvibeart123"
    con.login(admin_email,admin_password)
    msg = "Otp is "+str(otp)
    con.sendmail("email",email,"Subject:Password Reset \n\n"+msg)


global_dict = {'otp':"",'email':"",'otpcheck':""} 
def generate_otp():
    digits = [i for i in range(0, 10)]
    random_str = ""
    for i in range(6):
        index = math.floor(random.random() * 10)
        random_str += str(digits[index])
    print(random_str,type(random_str))
    global_dict['otp'] = random_str
    send_email_to_user(random_str,global_dict['email'])
    
    return

def forgotPass(request):
    if request.method == 'POST':
        email = request.POST['email']
        if User.objects.filter(email=email).exists():
            print("exist")
            global_dict['email'] = email
            generate_otp()
            messages.success(request, 'An otp is send to your Email please Enter that otp')
            return redirect('/otp')
        else:
            messages.error(request,"Email Not Found! Please Sign Up")
            return redirect('/signup')
    else:
        return render(request,'forgot.html')

def otpVerification(request):
    if request.method == 'POST':
        get_otp = request.POST["otp"]
        if global_dict['otp'] == get_otp:
            print("match")
            global_dict['otpcheck'] = "1"
            return redirect('/passwordReset')
        else:
            print("otp is",global_dict['otp'])
            messages.error(request, 'Otp not Matched Please Try Again')
            return redirect("/otp")
    else:
        if global_dict['email']!="":
            return render(request,'otp.html')
        else:
            messages.error(request, 'Please Enter a Valid Email First!')
            return redirect('/forgotPass')

def passwordReset(request):
    if request.method == 'POST':
        password = request.POST["password"]
        cpassword = request.POST["cpassword"]
        if password != cpassword:
            messages.error(request,"Password not Matched")
            return redirect("/passwordReset")
        else:
            if len(password)<=5:
                messages.error(request,'Password must be at least 6 characters Long!!')
                return redirect("/passwordReset")
            else:
                pass
        user = User.objects.filter(email=global_dict['email']).first()
        user.password = make_password(password)
        print(user,user.email,user.password)
        user.save()
        messages.success(request,"Password reset successfully! Please Login")
        return redirect('/login')
    else:
        if global_dict['email']!="":
            if global_dict['otp']!="" and global_dict['otpcheck'] == "1":
                return render(request,'passwordReset.html')
            else:
                messages.error(request,"Please Enter a Valid Otp First!")
                return redirect('/otp')
        else:
            messages.error(request, 'Please Enter a Valid Email First!')
            return redirect('/forgotPass')

def send_confirmation_email(email):
    import smtplib
    con = smtplib.SMTP("smtp.gmail.com",587)
    con.ehlo()
    con.starttls()
    admin_email = "pixelzvibe@gmail.com"
    admin_password = "pixelvibeart123"
    con.login(admin_email,admin_password)
    msg = "Password is changed of your Account !!"
    con.sendmail(admin_email,email,"Subject:Login Warning \n\n"+msg)      
def changePassword(request):
    if request.user.is_authenticated:
        pass
    else:
        messages.error(request,"Please Login First !!")
        return redirect('/login')
    if request.method == "POST":
        current_password = request.POST["current_password"]
        new_password = request.POST["new_password"]
        confirm_password = request.POST["confirm_password"]
        print(new_password,confirm_password)
        user = User.objects.filter(username=request.user).first()
        print(user.password)

        if check_password(current_password,user.password):
            pass
        else:
            messages.error(request,"Current Password Not Matched")
            return redirect("/changePassword")
        if len(new_password)<=5:
                messages.error(request,'Password must be at least 6 characters Long!!')
                return redirect("/changePassword")
        else:
            pass
        if new_password != confirm_password:
            messages.error(request,"Password not Matched")
            return redirect("/changePassword")
        else:
            user.password = make_password(new_password)
            user.save()
            print("email is ",user.email)
            send_confirmation_email(user.email)
            login(request,user)
            messages.success(request,"Password changed successfully Please Login Again!")
            return redirect("/login")
    else:
        pass
    
    return render(request,"changePassword.html")