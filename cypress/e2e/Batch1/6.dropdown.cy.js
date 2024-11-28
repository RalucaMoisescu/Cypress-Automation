describe('Dropdown', () => {
    it('Dropdowns with select', () => {
        cy.visit('https://www.orangehrm.com/en/30-day-free-trial')
        cy.get('#Form_getForm_Country').select('Ireland', {force: true}).should('have.value', 'Ireland')
    })

    it('Dropdowns without Select', () => {
        cy.visit('http://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Ireland').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Ireland')
    })

    it('Dropdowns Auto suggest or Dynamic DropDown', () => {
        cy.visit('https://www.wikipedia.org')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click({force: true}) //suggestion-highlight

    })

    it('Dynamic Dropdown', () => {
        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('united states')
        cy.get('.ui-menu-item-wrapper').contains('USA').click()
    })

    it('Dynamic Dropdown', () => {
        cy.visit('http://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('us')
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
            if($el.text()=='Cyprus') {
                $el.trigger("click")
            }

        })
        cy.get('#autocomplete').should('have.value', 'Cyprus')
    })  

    it('Dropdown select', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('select.action-select').select(2) //index
        cy.get('select.action-select').select('bananas') //visible text
        cy.get('select.action-select').select('fr-bananas') //something
    }) 

    it.only('Dropdown without Select tag', () =>{
        cy.visit('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
        cy.get('#menu1').click()
        cy.xpath('//a[@role="menuitem"]').each(function($ele,index,$list){
            //cy.log($ele,text())
            if($ele.text()==='JavaScript') {
                cy.log("Found Element")
                //cy.wait(6000)
                //cy.click($ele, {force:true})
                cy.wrap($ele).click({ force: true })
                //cy.contains('Java').click({force: true})
                cy.title().should('include','Automation')
            }
            else {
                cy.log('Current Value', $ele.text())
            }

        })
    })
})