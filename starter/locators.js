var PageObjectSpec = function () {

    //Page objects for login page
    this.usernameInput = element(by.xpath("//*[@data-automation-id='username']"));
    this.passwordInput = element(by.xpath("//*[@data-automation-id='password']"));
    this.signInButton = element(by.xpath("//*[@data-automation-id='login-button']"));

    //Page objects for create a new folder
    this.createButton = element(by.xpath("//*[@data-automation-id='create-button']"));
    this.createNewFolderOption = element(by.id('app.create.folder'));
    this.folderNameInput = element(by.id('adf-folder-name-input'));
    this.createFolderButton = element(by.id('adf-folder-create-button'));
    this.cancelCreateFolderButton = element(by.id('adf-folder-cancel-button'));
    this.createdFolder = element(by.xpath("//*[@data-automation-id='PaulCrisan85-governance-row']"));
    this.validationMessage = element(by.xpath("//simple-snack-bar"));
    this.deleteOption = element(by.id('app.context.menu.delete'));

    this.createNewFolder = createNewFolder

    function createNewFolder(folderName) {
        this.createButton.click();
        this.createNewFolderOption.click();
        this.folderNameInput.sendKeys(folderName);
        this.folderNameInput.getAttribute('value').then(function (name) {
            expect(name).toBe(folderName)
        });
        this.createFolderButton.click();
    };
};

module.exports = PageObjectSpec;