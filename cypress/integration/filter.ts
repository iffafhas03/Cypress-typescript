import { LoginPage } from "./pages/login_pages";
import { DashboardPage } from "./pages/dashboard_pages";
//import { CartPage } from "./pages/cart_pages";

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
//let cartPage = new CartPage();
const URL = "https://www.saucedemo.com/";

it("success sort low price to high prize", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();
  dashboardPage.clickFilterLowtoHigh();
});

it("success sort high price to low prize", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();
  dashboardPage.clickFilterHightToLow();
});