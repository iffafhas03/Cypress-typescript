export class DashboardPage {
  link_sauceLabsBackpack = "Sauce Labs Backpack";
  btn_add = "#add-to-cart-sauce-labs-backpack";
  btn_select = ".product_sort_container";
  btn_basket = ".shopping_cart_link";
  sauceLabsBackpack() {
    cy.contains(this.link_sauceLabsBackpack).click();
    cy.contains("Sauce Labs Backpack").should("be.visible");
  }

  clickBasket() {
    cy.get(this.btn_basket).click();
  }
  clickAddItemDashboard() {
    cy.get(this.btn_add).click();
    cy.contains("Remove");
  }
  clickFilterLowtoHigh() {
    //cy.select(this.btn_select).click();
    cy.get("select")
      .select("Price (low to high)")
      .invoke("val")
      .should("eq", "az");
  }
  clickFilterHightToLow() {
    //cy.select(this.btn_select).click();
    cy.get("select")
      .select("Price (high to low)")
      .invoke("val")
      .should("eq", "az");
  }
}
