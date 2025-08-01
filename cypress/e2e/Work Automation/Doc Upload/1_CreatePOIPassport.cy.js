describe('Send message', () =>{
    beforeEach(() =>{
        cy.on('uncaught:exception', (err, runnable) => {
            return false            
           })
        cy.visit("https://www.three.ie/document-upload?BVv1hdINKDd7rKCVAEeOTn4sIQKaR2rgs+sSFjjoskMNKnKYWXTJmgzFIKd964xQX0AtVD0ewHQrMTrSEcY0ejq3YFzYS5IfIRHzEoDB8fu71tynuGOFtC25DQU2fxn2")
    })
        
    it('Create POI Passport', () => {
        // Add Contact
            // Go to FAQ Tab
            cy.get('#functional-tabs > ul> li:nth-child(3) > a').click();

            // Validate FAQ url
            cy.url('https://messaging.pre.three.ie/faqs').should('contain','faqs');

            // Check See More FAQs
            cy.get('.moreFAQ.grid_item').click();

            // Validate See More FAQs
            cy.get('.moreFAQ.grid_item.open').should('be.visible');

            // Check open FAQ
            cy.contains('What is webtext?').click();
            
            // Validate open FAQ
            cy.get('.hubFAQ-content').should('contain','Webtext allows').and('be.visible');
    })
})