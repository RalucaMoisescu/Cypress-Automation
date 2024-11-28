describe('CY Tests', () => {
    it('TS1', () => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        // use search for "ca"
        cy.get('.search-keyword').type('ca')
        // expect 4 elements
        // cy.get('.product').should('have.length',4) will fail, we have 5 elements in the page
        cy.get('.product:visible').should('have.length',4)
        // search for how many children the parent has
        cy.get('.products').as('prd')
        cy.get('@prd').find('.product').should('have.length',4)

        // Parent child chaining
          // When it finds the second product [eq(1) is second element in the array], add to cart, log text
        cy.get('@prd').find('.product').eq(1).contains('add to CarT', {matchCase: false}).click()
        cy.log('Add to Cart button was clicked successfully')

        
          // Runs through the list of products each(($el first element,index position 0,$list toal no of elements 4) => {)
          // and lists their names
          // When it finds carrot, it adds it to the cart
        cy.get('@prd').find('.product').each(($el,index,$list) => {
          const textveg=$el.find('.product-name').text() // textveg contains Cauliflower 1kg
          cy.log(textveg)

          if(textveg.includes('Cauliflower'))
          {
            cy.wrap($el).find('button').click()
          }
          })

        cy.get('.brand.greenLogo').should('have.text', 'GREENKART') // Use "." to replace " " in locator
        cy.get('.brand').then(function(logo)
          {cy.log(logo.text())

          })
        cy.get(`.cart-icon > img`).click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
      })
})