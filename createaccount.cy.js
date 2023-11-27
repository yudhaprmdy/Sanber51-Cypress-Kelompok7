describe('Create an Account', () => {
    it('1. Validating Success Create an Account', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains("Create an Account").as('btn').click()   
      cy.get('.field-name-firstname').type("asfasfagaga");
      cy.get('#lastname').type("sgaasgag");
      cy.get('#email_address').type("nyobanyoba50@gmail.com");
      cy.get('#password').type("QWQBBQ12312841Ajnf");
      cy.get('#password-confirmation').type("QWQBBQ12312841Ajnf");
    
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
      cy.get('.message-success > div').should('have.text', 'Thank you for registering with Main Website Store.');
      cy.url().should('include', '/customer/account/');
      }).timeout(10000);
    

    it('2. Verify Failed Sign Up, Blank Password', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.contains("Create an Account").as('btn').click()   
        cy.get('.field-name-firstname').type("asfasfagaga");
        cy.get('#lastname').type("sgaasgag");
        cy.get('#email_address').type("nyobanyoba1@gmail.com");
        cy.get('#password').clear();
        cy.get('#password-confirmation').clear();
      
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('#password-error').should('have.text', 'This is a required field.');
        }).timeout(10000);

    it('3. Verify Failed Sign Up, Blank Email', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.contains("Create an Account").as('btn').click()   
        cy.get('.field-name-firstname').type("asfasfagaga");
        cy.get('#lastname').type("sgaasgag");
        cy.get('#email_address').clear();
        cy.get('#password').type("agaqwgqQQWR22");
        cy.get('#password-confirmation').type("agaqwgqQQWR22");
      
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('[id="email_address-error"]').should('have.text', 'This is a required field.');
        }).timeout(10000);

    it('4. Verify Failed Sign Up, Invalid Email Format', () => {
          cy.visit('https://magento.softwaretestingboard.com/')
          cy.contains("Create an Account").as('btn').click()   
          cy.get('.field-name-firstname').type("asfasfagaga");
          cy.get('#lastname').type("sgaasgag");
          cy.get('#email_address').type("qwiqriqwor.com");
          cy.get('#password').type("agaqwgqQQWR22");
          cy.get('#password-confirmation').type("QWQBBQ12312841Ajnf");
        
          cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
          cy.get('[id="email_address-error"]').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
          }).timeout(10000);

    it('5. Verify Failed Sign Up, Invalid Email Uses to many characters (more than 20 characters)', () => {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.contains("Create an Account").as('btn').click()   
            cy.get('.field-name-firstname').type("asfasfagaga");
            cy.get('#lastname').type("sgaasgag");
            cy.get('#email_address').type("asgasagasasfasfasfahsjfhkajshfiajshfiluagwfiuqwgfiqgbwfihqvfhqbikbfqiwbfkajbsmnb@gmail.com");
            cy.get('#password').type("QWQBBQ12312841Ajnf");
            cy.get('#password-confirmation').type("QWQBBQ12312841Ajnf");
          
            cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
            cy.get('.message-error > div').should('have.text', '"Email" uses too many characters.');
            }).timeout(10000);
      })

    

