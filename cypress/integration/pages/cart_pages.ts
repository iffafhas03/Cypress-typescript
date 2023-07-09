//TC1
//Menambahkan produk ke keranjang
//klik add
//Your Cart
//.shopping_cart_link
//cy.get('[data-test="firstName"]')
export class CartPage {
  btn_checkout = "#checkout";
  btn_continue = "#continue";
  btn_finish = "#finish";
  txt_firstname = "[data-test='firstName']";
  txt_lastname = "[data-test='lastName']";
  txt_postalcode = "[data-test='postalCode']";

  assertCart() {
    cy.get(".title").should("be.visible");
  }

  clickcheckout() {
    cy.get(this.btn_checkout).click();
  }

  inputFirstname(firstname: string) {
    cy.get(this.txt_firstname).type(firstname);
  }
  inputLastname(lastname: string) {
    cy.get(this.txt_lastname).type(lastname);
  }
  inputPostalcode(postalcode: string) {
    cy.get(this.txt_postalcode).type(postalcode);
  }

  fillData(firstname: string, lastname: string, postalCode: string) {
    this.inputFirstname(firstname);
    this.inputLastname(lastname);
    this.inputPostalcode(postalCode);
  }
  
  noficationErrorDataBlank(){
    cy.get('[data-test="error"]');
  }
  
  clickContinue() {
    cy.get(this.btn_continue).click();
  }

  //Checkout: Overview
  assertCheckoutOverview() {
    cy.get(".title").should("be.visible");
  }
  clickFinish() {
    cy.get(this.btn_finish).click();
    cy.get(".title").should("be.visible");
  }
}
