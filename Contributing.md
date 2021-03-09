# Contributing to Pixelvibe

Thanks a lot for checking out this project. We are pleased that you are interesting in contributing to this project. There are rules and tips for creating a cool contribution. We hope you will follow them and help yourself contributing to this project. Please read the suitable category. 

## I am not very experienced with Git and GitHub. What should I do?

No problem, we have got your back. Please see these guides before you contribute here. It will help you understand the workflow. We however expect you to have introductory knowledge of command line.
#### See these Guides/Tutorials
- [Hello GitHub](https://guides.github.com/activities/hello-world/)
- [Git and GitHub for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk) -> Use timestamps to see specific parts
- [How to create pull requests](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)

#### Install Git on your system 
- Windows [Download here](https://git-scm.com/download/win)
- Linux [See commands here for your distro](https://git-scm.com/download/linux)
- MacOS [See instructions here](https://git-scm.com/download/mac)

Please follow the rest of the guidelines for further guidelines.

## Choosing an issue

Go to [issue](https://github.com/FOSS-Cell-GECPKD/pixelvibe/issues) tab of this repository and find an issue to work on. Open the issue and see if it is not assigned comment on it that you are interested. Issues are assigned at first-come-first-serve basis. *Note: If you are contributing under a program such as Girlscript Summer of Code,to give every participant an opportunity you will be assigned only one issue at a given time. Once your PR is opened/merged you can take another issue.)*

Once you have been assigned an issue or you have opened an issue you can start working on it. 

## Working on changes/issue 
Open your command prompt/terminal in your system and use following command. **You must fork this project to submit a pull request.**

```bash
  # clone this project
  git clone https://github.com/your-github-username/pixelvibe.git
  
  # go to the project folder or open this folder in your favorite editor/IDE
  cd pixelvibe
  
  # add a new branch
  git checkout -b branch-name
```
Make your changes, add/remove files as needed then commit your changes. Keep the commit messages meaningful. Also please add only one commit per change.
```bash
  # stage changes 
  git add .
  # you can also use alternative command
  git stage -A
  
  # commit your changes
  git commit -m "message describing changes"
  
  # push commit to remote
  git push -u origin branch-name
```

## Submit a pull request

Goto your GitHub and open your fork of this project. Then follow pull request procedure as described [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github). Your pull request must contain following informations. *We will close pull requests having no descriptions*
- Details of the changes made (file added/changed, code changes, bug fixes etc)
- Link a related issue if any as `Fixes #issue-number`
- Your Program name if any (i.e. - GSSOC21`
- References if any(StackOverFlow or GeeksForGeeks or book, other websites)
- Anything else you want to add

Submit your pull request and wait for our review. We will soon review and proceed further. You can now choose another issue to work on.

<p align=center> Thanks for your Contribution 😊<p>


