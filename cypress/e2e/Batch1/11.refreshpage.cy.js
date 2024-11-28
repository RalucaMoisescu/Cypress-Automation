describe('Refresh Page', () => {
    it('Reload Page', () =>{
        cy.visit('https://www.amazon.co.uk');
        cy.contains("Today's Deals").should('be.visible');
        cy.reload();
        cy.contains("Today's Deals").should('be.visible');

        //Cache reload - By default timeout - 6000ms
        cy.reload(true);
        cy.contains("Today's Deals").should('be.visible');

        //Custom timeout
        cy.reload({timeout:10000});
        cy.contains("Today's Deals").should('be.visible');
    })
})