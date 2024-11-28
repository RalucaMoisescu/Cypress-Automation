describe('Test Suite 1', () =>{
    beforeEach('Access Website', ()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    })
    it('Task 2: Confirm the Title of the page is XYZ Bank', () =>{
        cy.title().should('eq','XYZ Bank').and('include','XYZ').and('contain','Bank');
    })

    it('Task 3-21', ()=>{
        // Task 3: Click on Customer Login
        cy.contains('Customer Login').click();
        // Task 4: Choose any Name from the Your Name drop down
        cy.get('#userSelect').select('Albus Dumbledore');
        // Task 5: Click on Login
        cy.get('button[type="submit"').click();
        // Task 6: Write an assertion to confirm the Name selected in Step 4 is displayed after Welcome
        cy.get('.fontBig.ng-binding').should('contain','Albus');
        // Task 7: Confirm the Currency is Dollar (Use Assertion)
        cy.get('.ng-binding').should('contain','Dollar'); // it works but unsure what the best way to do it would be
        // Task 8: Click on Deposit
        cy.get('.btn.btn-lg.tab[ng-class="btnClass2"]').click();
        // Task 9: Enter the amount in Amount to be Deposited textbox
        cy.get('input[type="number"]').type(50);
        // Task 10: Click on Deposit
        cy.get('button[type="submit"]').click();
        cy.wait(1000);
        // Task 11: Confirm "Deposit Successful" is displayed
        cy.get('.error.ng-binding').should('have.text','Deposit Successful');
        // Task 12: Click on Transactions
        cy.get('.btn.btn-lg.tab[ng-class="btnClass1"]').click();
        // Task 13: Confirm the amount entered in Step 9 is displayed under Amount column
        cy.get('table[class="table table-bordered table-striped"] > tbody > tr:nth-child(1) > td:nth-child(2)').should('have.text','50');
        // Task 14: Confirm the Transaction Type is credit
        cy.get('table[class="table table-bordered table-striped"] > tbody > tr:nth-child(1) > td:nth-child(3)').should('have.text','Credit');
        // Task 15: Click on Back button
        cy.get('.btn[ng-click="back()"]').click();
        // Task 16: Click on Withdrawl
        cy.get('.btn.btn-lg.tab[ng-class="btnClass3"]').click();
        // Task 17: Enter the same amount you deposited
        cy.get('input[type="number"]').type(50);
        // Task 18: Click on Withdraw
        cy.get('button[type="submit"]').click();
        cy.wait(1000);
        // Task 19: Confirm "Transaction Successful" is displayed
        cy.get('.error.ng-binding').should('have.text','Transaction successful');
        // Task 20: Click on Transactions
        cy.get('.btn.btn-lg.tab[ng-class="btnClass1"]').click();
        // Task 21: Confirm there is one more row with Transaction Type is debit
        cy.get('table tr').should('have.length', 3);
        cy.get('table[class="table table-bordered table-striped"] > tbody > tr:nth-child(2) > td:nth-child(3)').should('have.text','Debit');
    })
})