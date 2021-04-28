import CartElementsPage from '../elements/cartElementsPage'
const dados = require('../../fixtures/data.json')

class CartPage {
	async cart_title_text() {
		await cy.get(CartElementsPage.cart_title()).should('contain','Pokémons no seu carrinho')
    }

    async quantity_item_1() {
		await cy.get(CartElementsPage.cart_item_quantity()).should('contain','1')
    }

    async add_more_item() {
		await cy.get(CartElementsPage.cart_item_increment_quantity()).click()
	}

	async remove_one_item() {
		await cy.get(CartElementsPage.cart_item_increment_quantity()).click()
	}


}
export default CartPage
