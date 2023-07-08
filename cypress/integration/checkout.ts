import { LoginPage } from "./pages/login_pages";
import { DashboardPage } from "./pages/dashboard_pages";
import { CartPage } from "./pages/cart_pages";

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
let cartPage = new CartPage();
const URL = "https://www.saucedemo.com/";

it("success checkout item", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();
  dashboardPage.clickAddItemDashboard();
  dashboardPage.clickBasket();
  cartPage.assertCart();
  cartPage.clickcheckout();
  cartPage.fillData("ica", "ica", "40184");
  cartPage.clickContinue();
  cartPage.assertCheckoutOverview();
  cartPage.clickFinish();
});
it("blank lastname data", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();
  dashboardPage.clickAddItemDashboard();
  dashboardPage.clickBasket();
  cartPage.assertCart();
  cartPage.clickcheckout();
  cartPage.fillData("ica", " ", "40184");
  cartPage.clickContinue();
  cartPage.assertCheckoutOverview();
  cartPage.clickFinish();
});
