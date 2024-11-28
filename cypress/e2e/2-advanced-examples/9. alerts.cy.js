describe('alerts', () => {
    it('JS Alert', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert') // Explicit BDD Assertion
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')
        })

    // OK and Cancel button
    it('JS Confirm Alert', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Confirm') // Explicit BDD Assertion
        })

        cy.get('#result').should('have.text','You clicked: Ok')
        })
    
    // Click Cancel button
    it('JS Confirm Alert - Cancel', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Confirm') // Explicit BDD Assertion
        })

        cy.on('window:confirm', ()=>false) // Cancel button
        cy.get('#result').should('have.text','You clicked: Cancel')
        })
    
    // Prompt Alert
    it('JS Prompt Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('#result').should('have.text','You entered: welcome')
        })
    
    // Authorization Alert
    it('Authenticated Alert', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get("div[class='example'] h3").should('have.contain','Basic')
        })
})