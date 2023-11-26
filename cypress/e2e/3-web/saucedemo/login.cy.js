import loginPage from '../../../support/pageObject/loginPage'
const userData = require('../../../fixtures/userData.json')

describe('Verify Saucedemo Login Functionlity', () => {
  it('Failed Login - Locked User', () => {
    cy.visit('')
    cy.get('#user-name').type(Cypress.env('lockedUser'))
    cy.get('[data-test="password"]').type(userData.invalid[1].invalid_pass)
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.')
  })
  it('Failed Login - Wrong password', () => {
    cy.visit('')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type(userData.invalid[0].invalid_pass)
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user')
  })
  it('Success Login - POM', () => {
    cy.visit('')
    cy.get(loginPage.usrnm).type(userData.valid.valid_user)
    //cy.get('#user-name').type('standard_user')
    cy.get(loginPage.pswd).type(userData.valid.valid_password)
    //cy.get('[data-test="password"]').type('secret_sauce')
    cy.get(loginPage.login_btn).click()
    //cy.get('.submit-button.btn_action').click()
    cy.url().should('include', '/inventory.html')
  })
  it('Failed Login - Wrong password - POM2', () => {
    cy.visit('')
    loginPage.inputUsername(userData.valid.valid_user)
    loginPage.inputPassword(userData.invalid[2].invalid_pass)
    loginPage.clickLogin()
    loginPage.verifyError('Username and password do not match any user')
  })
  it('Failed Login - Wrong creds CUSTOM COMMAND', () => {
    cy.visit('')
    cy.login(userData.invalid[0].invalid_user,userData.invalid[0].invalid_pass)
    cy.verifyContain('[data-test="error"]', 'Username and password do not match')
  })
  it('Failed Multiple Login', () => {
    cy.visit('')
    cy.fixture('userData.json').then((user) => {
      user.invalid.forEach((data) => {
        cy.login(data.invalid_user,data.invalid_pass)
        cy.get('[data-test="error"]').should('be.visible')
      })
    })
  })
})