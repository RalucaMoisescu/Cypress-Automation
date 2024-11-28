describe('Viewport', () => {
    it('Viewport or resolution', () =>{
        cy.viewport(768, 1024);
        cy.visit('https://www.amazon.co.uk');
    })

    it('Viewport or resolution 2', () =>{
        cy.viewport("iphone-8");
        cy.visit('https://www.amazon.co.uk');
    })

    it('Viewport or resolution 3', () =>{
        cy.viewport("macbook-16", "landscape");
        cy.visit('https://www.amazon.co.uk');
    })
})