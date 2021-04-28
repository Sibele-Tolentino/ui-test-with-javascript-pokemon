
class CarrinhoPageElements {
	constructor() {
		this.cart_title = () =>  {return '#root > div > div > div.cart-wrapper > div > span'}
		this.cart_close = () => {return '#root > div > div > div.cart-wrapper > div > div.cart-close'}
		this.cart_item_decreases_quantity = () => {return '#root > div > div > div.cart-wrapper > div > div.inner > div:nth-child(1) > div.change-amount-wrapper > div:nth-child(1)'}
		this.cart_item_quantity = () =>  {return '#root > div > div > div.cart-wrapper > div > div.inner > div.cart-pokemon > div.change-amount-wrapper > div.current-amount'}
		this.cart_item_increment_quantity= () => {return '#root > div > div > div.cart-wrapper > div > div.inner > div:nth-child(1) > div.change-amount-wrapper > div:nth-child(3)'}
		this.cart_remove_all_quantity = () => {return '#root > div > div > div.cart-wrapper > div > div.inner > div:nth-child(1) > div.remove-pokemon'}
	}
}
module.exports = new CarrinhoPageElements();
