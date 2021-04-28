
class EletricoPageElements {
	constructor() {
		this.pikachu = () =>  {return '#root > div > div > div.pokemons-wrapper > div:nth-child(1) > div > div.card-header > div.card-container > div.add-to-card'}
		this.raichu = () =>  {return '#root > div > div > div.pokemons-wrapper > div:nth-child(2)'}
	}
}
module.exports = new EletricoPageElements();
