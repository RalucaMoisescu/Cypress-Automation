describe ('Handling Tabs', () =>{
    it('Handling Tabs', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').invoke('removeAttr','target').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')
        cy.go('back')
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows')
    })
})