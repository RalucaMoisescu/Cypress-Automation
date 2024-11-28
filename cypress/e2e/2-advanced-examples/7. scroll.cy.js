describe('Scroll', ()=>{
    it('Scroll', ()=>{
    cy.visit('https://naveenautomationlabs.com/opencart/')
    //cy.get('footer').scrollIntoView()
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.scrollTo(26,526)
    cy.wait(2000)
    //cy.get('.sidebar').scrollTo('bottom')
    })

    it.only('ScrollIntoView', ()=>{
        cy.visit('https://codenboxautomationlab.com/')
        cy.wait(3000)
        cy.contains('Contact Us').scrollIntoView()
        cy.wait(3000)
        cy.get('h2.has-text-align-center.has-text-color').scrollIntoView()
    })
})