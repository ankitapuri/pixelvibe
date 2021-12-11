

<p align="center"><img src="https://github.com/FOSS-Cell-GECPKD/pixelvibe/blob/main/static/assets/pixelVibe.gif"></p>

<p>
  
  [![Number of Contributors](https://img.shields.io/github/contributors/FOSS-Cell-GECPKD/pixelvibe)](https://github.com/FOSS-Cell-GECPKD/pixelvibe/graphs/contributors)
  [![Issues opened](https://img.shields.io/github/issues/FOSS-Cell-GECPKD/pixelvibe)](https://github.com/FOSS-Cell-GECPKD/pixelvibe/issues)
  [![Issues closed](https://img.shields.io/github/issues-closed/FOSS-Cell-GECPKD/pixelvibe)](https://github.com/FOSS-Cell-GECPKD/pixelvibe/issues)
  [![PRs open](https://img.shields.io/github/issues-pr/FOSS-Cell-GECPKD/pixelvibe)](https://github.com/FOSS-Cell-GECPKD/pixelvibe/pulls)
  [![PRs closed](https://img.shields.io/github/issues-pr-closed/FOSS-Cell-GECPKD/pixelvibe)](https://github.com/FOSS-Cell-GECPKD/pixelvibe/pulls)
  ![Repo size](https://img.shields.io/github/repo-size/FOSS-Cell-GECPKD/pixelvibe)

### 📋 Description

PixelVibe is a pixel-art maker which is mainly made for the creative art lover in you 😃
### Demo 🎥
![PixelVib](https://raw.githubusercontent.com/arpit456jain/pixelvibe/demo/static/gifs/2.gif)<br>
![PixelVib](https://raw.githubusercontent.com/arpit456jain/pixelvibe/demo/static/gifs/1.gif)<br>

### ✅&nbsp; Features
1. Variable canvas size as per user requirement 
2. Choice of colors for user 
3. A drop-down menu for 
-  Brush of varying sizes 
-  Eraser for clearing 
-  Undo feature
-  Delete feature to clear the screen
-   color fill to fill up the page
4. Signin / sign up page 
5. Forgot password feature 
6. Can change the password when required

### 💻 Tech Stack

PixelVibe uses a number of open source projects to work properly:
### Front-End:
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>  <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> 
<img alt="BootStrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/> 

### Back-End:
<img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/> <img alt="Django" src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/>    

### Data-Base:
<img alt="SQLite" src ="https://img.shields.io/badge/sqlite-%2307405e.svg?&style=for-the-badge&logo=sqlite&logoColor=white"/> 


### Other:
<img alt="Progressive Web Apps" src="https://img.shields.io/badge/Progressive Web Apps%20-%2300C4CC.svg?&style=for-the-badge&logo=ProgressiveWebApps&logoColor=white"/>

### Project Structure 💁‍♀️
  
```
PixelVibe
│   
├───PixelVibe                  # Main Project Directory
│       
├───home                       # Project Main App Directory
│   │   
│   └───migrations              # Migrations
│           
├───static          
|   |                           # Static Directory
│   └───| 
│       ├───assets              # Image Files  
|       |
│       ├───css                 # CSS Files  
|       |
|       ├───fonts               # Fonts Used
│       │       
|       ├───JS                  # js Files                      
│       │       
│       ├───favicons            # favicons
│       |    
│       
│         
|           
├───templates                   # Root Template Directory (all html templates)
|
├───db.sqlite3                  # Database  File
|
├───manage.py                   # For running django server
|
├───requirements.txt            # All modules which are used in project

```            

## 🚀 Quick Start :

#### Step 1: Forking the repository :

To work on an open-source project, you will first need to make your copy of the repository. To do this, you should fork the repository and then clone it so that you have a local working copy.

Get your own Fork/Copy of repository by clicking `Fork` button right upper corner.<br><br>

#### Step 2: Clone the Forked Repository

After the repository is forked, you can now clone it so that you have a local working copy of the codebase.

To make your local copy of the repository follow the steps:
- Open the Command Prompt
- Type this command:
  
```bash
$ git clone https://github.com/<your-github-username>/pixelvibe
```


#### Step 3: Creating a new branch (IMP)
This is one of the very important step that you should follow to contribute in Open Source. A branch helps to manage the workflow, isolate your code and does not creates a mess. To create a new branch:
  
```bash
$ git branch <name_of_branch>
$ git checkout -b <name_of_branch>
```

Keep your cloned repo upto date by pulling from upstream (this will also avoid any merge conflicts while committing new changes)
```bash
git pull origin main
```

#### Step 4: Setting up Project

##### For Django:
**1. Create a Virtual Environment**

- *On macOS and Linux:*
  ```bash
    python3 -m venv env
  ```
- *Windows*
  ```bash
    py -m venv env
  ````

**2. Activate the Virtual Environment**
  - *On Windows*
    ```bash
    .\env\Scripts\activate
    ```
  - *On macOS and Linux:*
    ```bash
    source env/bin/activate
    ```

**3. Install dependencies using**
```bash
pip install -r requirements.txt
```

**4. Make Migrations**

```bash
  python manage.py makemigrations
  python manage.py migrate
```
**5. Run Server**

```bash
  python manage.py runserver
```
**6. Create admin**

```bash
  python manage.py createsuperuser
```

**5.** Go to ` http://127.0.0.1:8000/` and enjoy the application.

#### Step 5: Contribute
Make relevant changes according to the issue that you were assigned on. Contribute in any way you feel like :)

#### Step 6: Commiting and Pushing
Once you have modified an existing file or added a new file to the project, you can add it to your local repository, which we can do with the git add command.

```bash
git add .
```
With our file staged, we’ll want to record the changes that we made to the repository with the git commit command.

The commit message is an important aspect of your code contribution; it helps the other contributors fully understand the change you have made, why you made it, and how significant it is.

```bash
git commit -m "useful commit message"
```

At this point you can use the git push command to push the changes to the current branch of your forked repository:

```bash
git push origin <branch-name>
```

#### Step 7: Create Pull Request
Now, you are ready to make a pull request to the original repository.

You should navigate to your forked repository, and press the "Compare & pull request" button on the page.

GitHub will alert you that you can merge the two branches because there is no competing code. You should add in a title, a comment, and then press the “Create pull request” button.

## ⚙ Contributing Guidelines
Please go through the Contributing guidelines <a href="https://github.com/FOSS-Cell-GECPKD/pixelvibe/blob/main/Contributing.md">here</a>.
## 📖 Code Of Conduct
You can find the Code of Conduct <a href="https://github.com/FOSS-Cell-GECPKD/pixelvibe/blob/main/CODE_OF_CONDUCT.md">here</a>.

### ✅&nbsp; PEP8 Standards to be followed
-	Please follow the guidelines of PEP8 as given in <a href="https://github.com/FOSS-Cell-GECPKD/pixelvibe/blob/main/PEP8StandardGuide.md">here</a>.

### ✅&nbsp; Pycode style to be followed
-	Please follow the guidelines of python module pycodestyle as given in <a href="https://github.com/FOSS-Cell-GECPKD/pixelvibe/blob/main/Pycodestyle.md">here</a>.

 <h1 align=center> Project Admin ❤️ </h1>
<p align="center">
<table>
  <tbody><tr>
     <td align="center"><a href="https://github.com/ankitapuri"><img alt="" src="https://avatars.githubusercontent.com/ankitapuri" width="100px;"><br><sub><b> Ankita Puri</b></sub></a><br></td></a></td>
 <td align="center"><a href="https://github.com/arpit456jain"><img alt="" src="https://avatars.githubusercontent.com/arpit456jain" width="100px;"><br><sub><b> Arpit Jain </b></sub></a><br></td> </a></td>

</tbody></table>
  
### 🚀 Contributing  
This repository is contribution friendly. If you would like to add or improve, your contribution is welcome!  
Do not forget to follow [Contribution Guidelines](Contributing.md) and [Code of Conduct](CODE_OF_CONDUCT.md) 😃  

## 📘&nbsp; License

The PixelVibe is released under the under terms of the [MIT License](LICENSE).
  
## Open Source Program(s)

This project is a part of GSSOC 2021.
<img src="https://raw.githubusercontent.com/GirlScriptSummerOfCode/MentorshipProgram/master/GSsoc%20Type%20Logo%20Black.png">
  
This project is a part of SWOC 2021.  
<img src="https://user-images.githubusercontent.com/74487802/145520292-1d4acbfa-2de9-493e-af4d-e2094623aa5d.png">


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
  
  <b>show some ❤️&nbsp; by giving the star to this repo</b>
