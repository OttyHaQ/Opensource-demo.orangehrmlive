import 'cypress-fill-command'

Cypress.Commands.add('login', () => {
    cy.fixture('loginPage.json').then((login) => {
        cy.get(login.username_Field).type(login.username)
            .get(login.password_Field).type(login.password)
            .get(login.loginBtn).click()
    })
})

Cypress.Commands.add('clickAddButton', () => {
    cy.fixture('adminPage.json').then((adminPage) => {
        cy.get(adminPage.admin).click()
          .get(adminPage.addBtn).click()
    })
})
