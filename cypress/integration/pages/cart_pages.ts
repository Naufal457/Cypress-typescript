export class CartPage{

    btn_removeproduct = '#remove-sauce-labs-backpack'
    btn_checkout = '#checkout'
    btn_continue = '#continue'
    btn_finish = '#finish'
    field_firstName = '#first-name'
    field_lastName = '#last-name'
    field_postalCode = '#postal-code'
    txt_successOrder = '#checkout_complete_container'

    removeProductFromCart(){
        cy.get(this.btn_removeproduct).click()
    }

    assertRemovefromCart(){
        cy.get('#item_4_title_link').should('not.exist');
    }

    ///CHECKOUT
    inputFirstName(firstname: string){
        cy.get(this.field_firstName).type(firstname)
    }

    inputLastName(lastname: string){
        cy.get(this.field_lastName).type(lastname)
    }

    inputPostalCode(postalcode: string){
        cy.get(this.field_postalCode).type(postalcode)
    }

    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }

    clickContinue(){
        cy.get(this.btn_continue).click()
    }

    clickFinish(){
        cy.get(this.btn_finish).click()
    }

    checkoutProcess(firstname : string, lastname : string, postalcode : string){
        this.clickCheckout()
        this.inputFirstName(firstname)
        this.inputLastName(lastname)
        this.inputPostalCode(postalcode)
        this.clickContinue()
    }

    assertCheckoutSuccess(){
        cy.get(this.txt_successOrder).should('be.visible')
        cy.contains('THANK YOU FOR YOUR ORDER').should('contain','THANK YOU FOR YOUR ORDER')
    }

    assertCheckoutFailNoFirstName(){
        cy.get('[data-test="error"]').should('be.visible')
        cy.contains('Error: First Name is required').should('contain','Error: First Name is required')
    }

    assertCheckoutFailNoLastName(){
        cy.get('[data-test="error"]').should('be.visible')
        cy.contains('Error: Last Name is required').should('contain','Error: Last Name is required')
    }
}