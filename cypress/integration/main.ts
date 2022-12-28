import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { CartPage } from "./pages/cart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Add to cart successfully', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addCartSauceLabsBackpack()
    dashboardPage.assertCartBackpack() 
})

it('Remove product from cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addCartSauceLabsBackpack()
    dashboardPage.assertCartBackpack() 
    cartPage.removeProductFromCart()
    cartPage.assertRemovefromCart()
})

it('Filter Name on Product List', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.filterNameZtoA()
    dashboardPage.assertFilterName()
})

it('Filter Price on Product List', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.filterPriceHitoLo()
    dashboardPage.assertFilterPrice()
})

it('Checkout Successfully', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addCartSauceLabsBackpack()
    dashboardPage.assertCartBackpack()
    cartPage.checkoutProcess('John','Cena','12345')
    cartPage.clickFinish()
    cartPage.assertCheckoutSuccess()
})

it('Checkout Failed - Empty First Name Field', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addCartSauceLabsBackpack()
    dashboardPage.assertCartBackpack()
    cartPage.checkoutProcess('{backspace}','Cena','12345')
    cartPage.assertCheckoutFailNoFirstName()
})

it('Checkout Failed - Empty Last Name Field', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addCartSauceLabsBackpack()
    dashboardPage.assertCartBackpack()
    cartPage.checkoutProcess('John','{backspace}','12345')
    cartPage.assertCheckoutFailNoLastName()
})


