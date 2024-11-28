describe('Using Fixtures', () => {
    let data // Initialized the variable data

    beforeEach(() =>{
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
        cy.fixture('login').then((value)=>{ // Load the data from the login.json file present inside the Fixture folder
            data = value;
        })
    })

    it('Login into the application using fixture data', () => {
        cy.get('input[name="email"]').type(data.email);
        cy.get('input[name="password"]').type(data.password);
        cy.get('input[type="submit"]').click();
    })
})