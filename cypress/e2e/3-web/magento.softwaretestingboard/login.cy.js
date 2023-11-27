describe('Verify magento functionality', () => {
  it('Failed Login - Locked User', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type('agicgibsonbeat@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('MagicGibsonBeat123')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('.message-error > div').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })
  it('Succes Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type('magicgibsonbeat@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('MagicGibsonBeat123')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
  })
  it('Wrong email', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.login('kagicgibsonbeat@gmail.com', 'MagicGibsonBeat123')
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
  })
})