import { expect } from "@playwright/test";
import { urlCompany } from "../../../pages/companyPage";
import { testWithFixture } from "../../../fixtures/fixtures";

testWithFixture.describe.configure({mode:"serial"});
testWithFixture.describe("Archive\Unarchive Company Tests", () => {
    
    testWithFixture("Archive Company", async ({authorisedRequest, apiData, addedCompanyData}) =>{
        const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}/archive`)
    
     //Basic Checks
     expect(response.status()).toEqual(200);
    });

    testWithFixture("Get Archived Company", async ({ authorisedRequest, apiData, addedCompanyData }) => {
        const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}`);
        const jsonData = await response.json()
          
        //Basic Checks
        expect(response.status()).toEqual(200);
        expect(response.headers()['content-type']).toMatch(/application\/json/);
        expect(jsonData.isArchived).toEqual(true);

    });
    
    testWithFixture("UnArchive Company", async ({authorisedRequest, apiData, addedCompanyData}) =>{
        const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}/unarchive`)
    
     //Basic Checks
     expect(response.status()).toEqual(200);
    });

    testWithFixture("Get Unarchived Company", async ({ authorisedRequest, apiData, addedCompanyData }) => {
        const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}`);
        const jsonData = await response.json()
          
          //Basic Checks
        expect(response.status()).toEqual(200);
        expect(response.headers()['content-type']).toMatch(/application\/json/);
        expect(jsonData.isArchived).toEqual(false);

    }); 
})