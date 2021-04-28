@buy_electric_pokemon
Feature: Buy electric pokemon

   Feature I as a user want to access the electric Pokémon page and buy

   Background: Acess base page
     Given I access the base page

   @buy_pikachu
   Scenario: Try to buy a Pikachu
      When I press the Pikachu button
      When I select cart add
      Then I see cart page with one Pikachu item