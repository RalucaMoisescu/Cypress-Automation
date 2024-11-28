describe('Retry Rerun', ()=> {
    it('Retry rerun Test', {retries:2}, ()=>{
        cy.visit('https://www.amazon.co.slss');
        cy.contains("Today's Deals").should('be.visible');
        cy.reload();
        cy.contains("Today's Deals").should('be.visible');
    })
})