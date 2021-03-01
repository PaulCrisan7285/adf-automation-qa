## Alfresco ADF automation QA exercise

Do you love automation testing and you know how to solve the following exercise? Contact us! We may have a job for you :)
* https://jobs.smartrecruiters.com/Alfresco/743999676099136-senior-qa-automation-engineer

## Exercise

Fork this GitHub repository and push the produced code in your fork repository. 

Automate the following scenario using protractor:

1. Access <https://j1hp01s5.trials.alfresco.com/>
2. Enter
- username: guest@example.com
- password: Password
- click SIGN IN
3. Click on NEW -> Create Folder
4. Create new folder dialog is displayed.
5. Enter your Github username.
6. Name has been added.
7. Click on 'Create' button.
8. The dialog is closed. Folder with your Github username is created in the current folder.
9. Click on NEW -> Create Folder
10. Create new folder dialog is displayed.
11. Enter your Github username.
12. Name has been added.
13. Click on 'Create' button.
14. The dialog is not closed.
15. The message "There's already a folder with this name. Try a different name" is displayed.
16. Click Cancel
17. Dialog is closed
18. Select the folder with your Github username
19. Right click on the folder
20. Click Delete
21. Folder is deleted

In the README file of the repository we want to see also the following sections:

1. ***Description*** run the protractor conf.js in command line.
2. ***Explanation*** I choosen to use a page object pattern so it will be easy to maintain the tests.
3. ***Prerequisites*** We need to install node.js, protractor and the project dependcies.

You can send the link to your fork at mario.romano@alfresco.com. Feel free to attach also your cv and a link to your linkedin profile.

### Starter
The framework has already been setup in the /starter folder, please add your teest case in the spec.js file.

### Some info about protractor
* https://github.com/angular/protractor
* https://blog.cloudboost.io/building-your-first-tests-for-angular5-with-protractor-a48dfc225a75

### Some info about ADF
* https://github.com/Alfresco/alfresco-ng2-components
* https://alfresco.github.io/adf-component-catalog/
