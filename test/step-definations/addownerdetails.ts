import { Given, Then, When } from "@wdio/cucumber-framework";
import data from "../data/testdata";
import { homePage } from "../page/HomePage";


Given(/^User is on petclinic home page$/, async function ()
{
  await homePage.navigateToPetClinicApp();
});

When(/^User clicks on find owner menu$/, async function ()
{
  await homePage.navigateToFindOwner();
});

Then(/^Find Owner page should be dispalyed$/, async function () 
{
  expect(await homePage.findOwnerPage()).toBe(true);
});

Given(/^User is on find owner page$/, async function () 
{
  expect(await homePage.findOwnerPage()).toBe(true);
});

When(/^User clicks on add owner button$/, async function () 
{
  await homePage.navigateToAddOwner();
});

Then(/^Owner information page should be displayed$/, async function () 
{
  expect(await homePage.addOwnerPage()).toBe(true);
});


When(/^User provides all the owner details$/, async function () 
{
  // Adding new data
  await homePage.addfirstname(data.AddOwnerDetails.firstName);
  await homePage.addLastName(data.AddOwnerDetails.lastName);
  await homePage.addAddress(data.AddOwnerDetails.address);
  await homePage.addCity(data.AddOwnerDetails.city);
  await homePage.addtelephone(data.AddOwnerDetails.telephone);
  await homePage.submitAddOwnerDetails();
});


Then(/^Owner information should be added$/, async function () 
{
   await homePage.getData();
  // expect(await homePage.verifyaddOwnerNameDetails()).toBe(data.AddOwnerDetails.firstName + " " + data.AddOwnerDetails.lastName)
  // expect(await homePage.verifyaddOwnerAddressDetails()).toBe(data.AddOwnerDetails.address)
  // expect(await homePage.verifyaddOwnerCityDetails()).toBe(data.AddOwnerDetails.city)
  // expect(await homePage.verifyaddOwnerTelephoneDetails()).toBe(data.AddOwnerDetails.telephone)

  for(let i=0;i<data.ActualOwnerData.length;i++)
  {
    expect(data.ExpectedOwnerData[i]).toBe(data.ActualOwnerData[i]);     
    console.log("Result:"+data.ActualOwnerData[i]);
  }
});



// how to use assertion (wdio) (reseach)