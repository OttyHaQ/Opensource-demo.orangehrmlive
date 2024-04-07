

describe('Admin Management', () => {

  it('create admin', () => { 
      cy.clickAddButton()
      cy.fixture('addUserPage.json').then((addAdmin) => {
        cy.get(addAdmin.userRoleField).click()
          .get(addAdmin.admin).click()
          .get(addAdmin.employeeNameField).type(addAdmin.name)
          .get(addAdmin.employeeName).click()
          .get(addAdmin.statusField).click()
          .get(addAdmin.enabled).click()
          .get(addAdmin.usernameField).type(addAdmin.username)
          .get(addAdmin.passwordField).type(addAdmin.password)
          .get(addAdmin.confirmPassField).type(addAdmin.password)
          .get(addAdmin.saveBtn).click()
          .get(addAdmin.alert).should('be.visible')
          .get(addAdmin.alert).should('have.text', 'SuccessSuccessfully Saved')
      })
    })

  it('edit admin', () => {
      
    cy.fixture('adminPage.json').then((adminPage) => {
      cy.get(adminPage.admin).click()
        .get(adminPage.searchUsernameField).type(adminPage.userName)
        .get(adminPage.userRoleField).click()
        .get(adminPage.adminUser).click()
        .get(adminPage.seachBtn).click()
    })

    cy.fixture('editUserPage.json').then((editAdmin) => {
      cy.get(editAdmin.editIcon).click({force: true})
        .get(editAdmin.userNameField).clear().type(editAdmin.newUserName)
        .get(editAdmin.saveBtn).click()
        .get(editAdmin.alert).should('be.visible')
        .get(editAdmin.alert).should('have.text', 'SuccessSuccessfully Updated')
    })
  })

  it('delete admin', () => {
      
    cy.fixture('adminPage.json').then((adminPage) => {
      cy.get(adminPage.admin).click()
        .get(adminPage.searchUsernameField).type(adminPage.newUserName)
        .get(adminPage.userRoleField).click()
        .get(adminPage.adminUser).click()
        .get(adminPage.seachBtn).click()
        .get(adminPage.selectUser).click()
        .get(adminPage.deleteUserBtn).click()
        .get(adminPage.confirmDeleteBtn).click()
        .get(adminPage.confirmationToast).should('be.visible')
        .get(adminPage.confirmationToast).should('have.text', 'SuccessSuccessfully Deleted')
    })
  })
})
  