import ApplicationPage from "./ApplicationPage"
import data from "../data/testdata";
import { realpathSync } from "fs";

const selectors={

    firstname:'input#firstname',
    lastname:'input#lastname',
    address:'input#address',
    city:'input#city',
    telephone:'input#telephone',
    addownersumbmitbutton:'a.btn.btn-default',
    navigatetofindowner:"a[href='/owners/find']",
    addownerbutton:'button.btn.btn-default',
    addownerinfo:'table.table.table-striped',
    verifyaddOwnerTelephoneDetails:'/html/body/div/div/table[1]/tbody/tr[4]/td',
    verifyaddOwnerCityDetails:'/html/body/div/div/table[1]/tbody/tr[3]/td',
    verifyaddOwnerAddressDetails:'/html/body/div/div/table[1]/tbody/tr[2]/td',
    verifyaddOwnerNameDetails:'/html/body/div/div/table[1]/tbody/tr[1]/td',
    addOwnerPage:'div.container-fluid',
    findOwnerPage:'div.container.xd-container',
    tablelength:'tbody'
}
class HomePage extends ApplicationPage 
{
    constructor() 
    {
        super()
        selectors;    
    }

    //opening petclininc url
    async navigateToPetClinicApp()
    {
        await browser.url(data.APP_URL.BASE_URL);     
    } 

    // navigating to find owner menu
    async navigateToFindOwner() 
    {
        await (await $(selectors.navigatetofindowner)).click()
    }

    //clicking on add owner button
    async navigateToAddOwner()
     {
        const addOwnerButton = await $(selectors.addownersumbmitbutton)
        //await addOwnerButton.waitForClickable({ timeout: 3000 });
        addOwnerButton.click()   
    }

    //Adding details name,address,city,telephone to pet clinic app
    async addfirstname(firstnamevalue:any)
    {
        const firstname = await $(selectors.firstname);
        firstname.setValue(firstnamevalue);
    } 

    async addLastName(lastnamevalue:any)
    {
        const lastname = await $(selectors.lastname);
        lastname.setValue(lastnamevalue);
    }

    async addAddress(addressvalue:any)
     {
        const address = await $(selectors.address);
        address.setValue(addressvalue);
    }

    async addCity(cityvalue:any) 
    {
        const city = await $(selectors.city);
        city.setValue(cityvalue);
    }
    
    async addtelephone(telephonevalue:any) 
    {
        const telephone = await $(selectors.telephone);
        telephone.setValue(telephonevalue);
    }

    async submitAddOwnerDetails() 
    {
        const addownerbutton = await $(selectors.addownerbutton);
        addownerbutton.click();  
    }

    async AddOwner() 
    {
        const buttonClick = await $(selectors.addownerbutton)
        buttonClick.click();  
    }

    //validating details
    async checkOwnerInformationExists(){
        let addOwnerInfo = await $(selectors.addownerinfo)
        let ISDispalyed= addOwnerInfo.isDisplayed();
        console.log("ISDispalyed? "+ ISDispalyed)
        return ISDispalyed;
    }

    async findOwnerPage() {
        let findOwnerPage = await $(selectors.findOwnerPage)
        let isDisplayed=findOwnerPage.isDisplayed();
        console.log("ISDispalyed? "+ isDisplayed)
        return isDisplayed;
    }

    async addOwnerPage() {
        let addOwnerPage = await $(selectors.addOwnerPage)
        let isDisplayed=addOwnerPage.isDisplayed();
        console.log("ISDispalyed? "+ isDisplayed)
        return isDisplayed;
    }

    //  public async verifyaddOwnerNameDetails()
    //  {
    //  let name = await (await (await $(selectors.verifyaddOwnerNameDetails)).getText())
    //  return name;
    //  getting data from front end for validation
    //  }
     
    // getting data from table element for validation
        public async getData()
        {  
            let length = selectors.tablelength.length;
    
            for(let i=1;i<=length-1;i++)
            {
                let details= await(await $("/html/body/div/div/table[1]/tbody/tr["+i+"]/td")).getText();
                data.ActualOwnerData.push(details);
                console.log("Data:"+details); 
            }
        }
}


const homePage = new HomePage();
export { homePage }
