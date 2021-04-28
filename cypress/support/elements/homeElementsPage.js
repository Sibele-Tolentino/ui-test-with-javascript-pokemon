
class HomePageElements {
	constructor() {
		this.electric = () =>  {return '#root > div > div > div.electric'}
		this.fire = () =>  {return '#root > div > div > div.fire'}
		this.gram= () =>  {return '#root > div > div > div.grass'}
		this.aquatic = () =>  {return '#root > div > div > div.water'}

	}
}
module.exports = new HomePageElements();
