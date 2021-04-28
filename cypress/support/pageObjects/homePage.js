import homePageElements from '../elements/homeElementsPage'

class HomePage{
    access_electric_pokemon_page (){
        cy.get(homePageElements.electric()).click()
    }
    access_fire_pokemon_page (){
        cy.get(homePageElements.fire()).click()
    }
    access_gram_pokemon_page (){
        cy.get(homePageElements.gram()).click()
    }
    access_aquatic_pokemon_page (){
        cy.get(homePageElements.aquatic()).click()
    }
}
export default HomePage
