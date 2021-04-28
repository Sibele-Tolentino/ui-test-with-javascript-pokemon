import eletricoPagelements from '../elements/electricElementsPage'
const dados = require('../../fixtures/data.json')

class ElectricPage {
	async pikashu_add() {
		await cy.get(eletricoPagelements.pikachu()).click()
	}

	async raichu_add() {
		await cy.get(eletricoPagelements.raichu()).click()
	}
}
export default ElectricPage
