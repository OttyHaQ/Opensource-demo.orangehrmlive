describe("User Management", () => {
  it("create user", () => {
    cy.clickAddButton();
    cy.fixture("addUserPage.json").then((addUserPage) => {
      cy.get(addUserPage.userRoleField)
        .click()
        .get(addUserPage.ess)
        .click()
        .get(addUserPage.employeeNameField)
        .type(addUserPage.name)
        .get(addUserPage.employeeName)
        .click()
        .get(addUserPage.statusField)
        .click()
        .get(addUserPage.enabled)
        .click()
        .get(addUserPage.usernameField)
        .type(addUserPage.username)
        .get(addUserPage.passwordField)
        .type(addUserPage.password)
        .get(addUserPage.confirmPassField)
        .type(addUserPage.password)
        .get(addUserPage.saveBtn)
        .click()
        .get(addUserPage.alert)
        .should("be.visible")
        .get(addUserPage.alert)
        .should("have.text", "SuccessSuccessfully Saved");
    });
  });

  it("edit user", () => {
    cy.fixture("adminPage.json").then((adminPage) => {
      cy.get(adminPage.admin)
        .click()
        .get(adminPage.searchUsernameField)
        .type(adminPage.userName)
        .get(adminPage.userRoleField)
        .click()
        .get(adminPage.essUser)
        .click()
        .get(adminPage.seachBtn)
        .click();
    });

    cy.fixture("editUserPage.json").then((editUserPage) => {
      cy.get(editUserPage.editIcon)
        .click({ force: true })
        .get(editUserPage.userNameField)
        .clear()
        .type(editUserPage.newUserName)
        .get(editUserPage.saveBtn)
        .click()
        .get(editUserPage.alert)
        .should("be.visible")
        .get(editUserPage.alert)
        .should("have.text", "SuccessSuccessfully Updated");
    });
  });

  it("delete user", () => {
    cy.fixture("adminPage.json").then((adminPage) => {
      cy.get(adminPage.admin)
        .click()
        .get(adminPage.searchUsernameField)
        .type(adminPage.newUserName)
        .get(adminPage.userRoleField)
        .click()
        .get(adminPage.essUser)
        .click()
        .get(adminPage.seachBtn)
        .click()
        .get(adminPage.selectUser)
        .click()
        .get(adminPage.deleteUserBtn)
        .click()
        .get(adminPage.confirmDeleteBtn)
        .click()
        .get(adminPage.confirmationToast)
        .should("be.visible")
        .get(adminPage.confirmationToast)
        .should("have.text", "SuccessSuccessfully Deleted");
    });
  });
});
