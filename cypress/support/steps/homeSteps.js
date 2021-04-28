import HomePage from '../pageObjects/homePage'
const homePage = new HomePage

Given('I access the base page', async function () {
  console.log('Started on hooks')
  })
When('I press the Pikachu button', async function () {
  await homePage.access_electric_pokemon_page()
  })