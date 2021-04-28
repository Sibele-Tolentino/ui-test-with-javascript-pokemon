import CartPage from '../pageObjects/cartPage'
import ElectricPage from '../pageObjects/electricPage'
const dados = require('../../fixtures/data.json')
const cartPage = new CartPage
const electricPage = new ElectricPage

When('I select cart add', async  () => {
	await electricPage.pikashu_add()
  });

Then('I see cart page with one Pikachu item', async () => {
  await cartPage.cart_title_text()
  await cartPage.quantity_item_1()
  });



  