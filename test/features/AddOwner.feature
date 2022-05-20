Feature: Add new Owner
Background: Navigate to find owner page
     Given User is on petclinic home page
     When User clicks on find owner menu 

     Scenario: Verify find owner page displayed succesfully
          Given User is on find owner page
          Then Find Owner page should be dispalyed

     Scenario: Verify user able to navigate to add owner page
          Given User is on find owner page
          When User clicks on add owner button
          Then Owner information page should be displayed


     Scenario: Verify user should be able to add new owner
          Given User is on find owner page
          And  User clicks on add owner button
          When User provides all the owner details 
          Then Owner information should be added 


#    add tag to everyscenario







