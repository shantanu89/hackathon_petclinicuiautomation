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
  await homePage.addNewOwner(data.AddOwnerDetails.firstName,data.AddOwnerDetails.lastName,data.AddOwnerDetails.address,data.AddOwnerDetails.city,data.AddOwnerDetails.telephone);
});


Then(/^Owner information should be added$/, async function () 
{
   await homePage.getData();
  // validating expected and actual result

  for(let i=0;i<data.ActualOwnerData.length;i++)
  {
    expect(data.ExpectedOwnerData[i]).toBe(data.ActualOwnerData[i]);     
    //console.log("Result:"+data.ActualOwnerData[i]);
  }
});
