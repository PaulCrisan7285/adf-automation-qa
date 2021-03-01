import PageObjectSpec from './locators';

let username = 'guest@example.com';
let password = 'Password';
let folderName = 'PaulCrisan85';
let URL = 'https://j1hp01s5.trials.alfresco.com/';

describe('ADF Demo App', function() {

  let poSpec = new PageObjectSpec();

  beforeAll(function(){
  
   browser.get(URL);
  });

  it('Login with valid credentials', function() {

    browser.wait(protractor.ExpectedConditions.visibilityOf(poSpec.usernameInput), 10000);
    poSpec.usernameInput.sendKeys(username);
    poSpec.passwordInput.sendKeys(password);
    poSpec.signInButton.click();
  });

  it('Create a new folder', function() {

    browser.wait(protractor.ExpectedConditions.visibilityOf(poSpec.createButton), 10000);
    poSpec.createNewFolder(folderName);
    browser.wait(protractor.ExpectedConditions.visibilityOf(poSpec.createdFolder), 10000);
    expect(poSpec.folderNameInput.isPresent()).toBe(false);
    expect(poSpec.createdFolder.isDisplayed()).toBe(true);
  });

  it('Create a new folder with the same name', function() {

    browser.wait(protractor.ExpectedConditions.visibilityOf(poSpec.createButton), 10000);
    poSpec.createNewFolder(folderName);
    browser.wait(protractor.ExpectedConditions.visibilityOf(poSpec.validationMessage), 10000);
    expect(poSpec.folderNameInput.isDisplayed()).toBe(true);
    expect(poSpec.validationMessage.getText()).toEqual("There's already a folder with this name. Try a different name.");
    poSpec.cancelCreateFolderButton.click();
    browser.wait(protractor.ExpectedConditions.invisibilityOf(poSpec.folderNameInput), 10000);
    expect(poSpec.folderNameInput.isPresent()).toBe(false);
  });

  it('Delete the create folder', function() {
    browser.actions().mouseMove(poSpec.createdFolder).perform();
    browser.actions().click(poSpec.createdFolder, protractor.Button.RIGHT).perform();
    browser.wait(protractor.ExpectedConditions.visibilityOf(poSpec.deleteOption), 10000);
    poSpec.deleteOption.click();
    browser.wait(protractor.ExpectedConditions.invisibilityOf(poSpec.createdFolder), 10000);
  });
});