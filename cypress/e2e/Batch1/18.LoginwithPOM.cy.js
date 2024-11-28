import Login from "../../PageObjects/LoginPage";

describe('POM', () =>{
    beforeEach( ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    // General Approach
    it('LoginTest', ()=>{
        cy.get("input[name='username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    })

    // using POM approach
    it('LoginTest with POM', () => {
        const ln = new Login()
        ln.setUserName('Admin');
        ln.setPassword('admin123');
        ln.clickSubmit();
        ln.verifyLogin();
    })

    // using POM with Fixture approach
    it.only('Login Text with Fixture File', () =>{
        cy.fixture('LoginPageFix').then((data) =>{
            const ln = new Login()
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        })
    })
})