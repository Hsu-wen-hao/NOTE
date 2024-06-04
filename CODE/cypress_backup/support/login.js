import './commands'

Cypress.Commands.add('QPETRA_login',()=>{
    const username = 'iisia01'
    const password = 'Iisi@87654321'
    describe('login test',()=>{
        cy.visit('https://61.56.11.201/TRA/');
        cy.get('#id_username').type(username)
        cy.get('#id_password').type(password)
        cy.get('.btn').click()
    })
})