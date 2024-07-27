import { expect } from "@playwright/test";
import { urlCompany } from "../../../pages/companyPage";
import { testWithFixture } from "../../../fixtures/fixtures";

testWithFixture.describe.configure({mode:"serial"});
testWithFixture.describe("Active\Inactive Company Tests", () => {
    
    testWithFixture("Inactivate Company", async ({authorisedRequest, apiData, addedCompanyData}) =>{
        const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}/inactive`)
    
     //Basic Checks
     expect(response.status()).toEqual(200);
    });

    testWithFixture("Get Inactived Company", async ({ authorisedRequest, apiData, addedCompanyData }) => {
        const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}`);
        const jsonData = await response.json()
          
          //Basic Checks
        expect(response.status()).toEqual(200);
        expect(response.headers()['content-type']).toMatch(/application\/json/);
        expect(jsonData.isActive).toEqual(false);

    });
    
    testWithFixture("Activate Company", async ({authorisedRequest, apiData, addedCompanyData}) =>{
        const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}/active`)
    
     //Basic Checks
     expect(response.status()).toEqual(200);
    });

    testWithFixture("Get Actived Company", async ({ authorisedRequest, apiData, addedCompanyData }) => {
        const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}`);
        const jsonData = await response.json()
          
          //Basic Checks
        expect(response.status()).toEqual(200);
        expect(response.headers()['content-type']).toMatch(/application\/json/);
        expect(jsonData.isActive).toEqual(true);

    }); 
})