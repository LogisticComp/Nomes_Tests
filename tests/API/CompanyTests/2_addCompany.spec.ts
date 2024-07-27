// tests/addCompany.spec.ts
import { expect } from "@playwright/test";
import { urlCompany } from "../../../pages/companyPage";
import { generateRequestDataAddCompany } from "../../../pages/companyPage";
import { testWithFixture } from "../../../fixtures/fixtures";

let requestData = generateRequestDataAddCompany();
//export default function addCompany(){
testWithFixture.describe.configure({ mode: "serial"});
testWithFixture.describe("Adding Company Tests", () => {
    testWithFixture("Add Company", async ({ authorisedRequest, apiData, addedCompanyData }) => {
        const response = await authorisedRequest.post(`${apiData.mainUrl}${urlCompany.companyUrl}`, {
            data: requestData,
        });

        const jsonData = await response.json();
        addedCompanyData.addedcompanyId = jsonData.id;
        addedCompanyData.emailOrgAdmin = jsonData.admins[0].email;
      

        //Basic Checks
        expect(response.status()).toEqual(200);
        expect(response.headers()['content-type']).toMatch(/application\/json/);
        expect(typeof jsonData.id).toBe("number");
        expect(typeof jsonData.createdAt).toBe("number");
        expect(typeof jsonData.updatedAt).toBe("number");

        //CompanyShortName
        expect(requestData.companyShortName).toEqual(jsonData.companyShortName);
        expect(typeof jsonData.companyShortName).toBe("string");

        //companyLegalName
        expect(requestData.companyLegalName).toEqual(jsonData.companyLegalName);
        expect(typeof jsonData.companyLegalName).toBe("string");

        //phoneNumber
        expect(requestData.phoneNumber).toEqual(jsonData.phoneNumber);
        expect(typeof jsonData.phoneNumber).toBe("string");
        expect(requestData.phoneNumber).toHaveLength(11);

        //e-mail
        expect(requestData.email.toLowerCase()).toEqual(jsonData.email);
        expect(typeof jsonData.email).toBe("string");

        //countryId
        expect(requestData.countryId).toEqual(jsonData.country.id);
        expect(typeof jsonData.country.id).toBe("number");

        //countryName
        expect(typeof jsonData.country.name).toBe("string");
        expect(jsonData.country.name).toEqual("Poland");

        //legalAddress
        expect(requestData.legalAddress.address).toEqual(jsonData.legalAddress.address);
        expect(typeof jsonData.legalAddress.address).toBe("string");
        //legalAddress - City
        expect(requestData.legalAddress.cityId).toEqual(jsonData.legalAddress.city.id);
        expect(typeof jsonData.legalAddress.city.id).toBe("number");

        //legalAddress - PostCode
        expect(requestData.legalAddress.postcode).toEqual(jsonData.legalAddress.postcode);
        expect(typeof jsonData.legalAddress.postcode).toBe("string");

        //correspondenceAddress
        expect(requestData.correspondenceAddress.address).toEqual(jsonData.correspondenceAddress.address);
        expect(typeof jsonData.correspondenceAddress.address).toBe("string");
        //correspondenceAddress - City
        // expect(requestData.correspondenceAddress.cityId).toEqual(jsonData.correspondenceAddress.city.id);
        expect(typeof jsonData.correspondenceAddress.city.id).toBe("number");
        //correspondenceAddress - PostCode
        expect(requestData.correspondenceAddress.postcode).toEqual(jsonData.correspondenceAddress.postcode);
        expect(typeof jsonData.correspondenceAddress.postcode).toBe("string");

        // //companyRegistrationNumbers - REGON
        // expect(jsonData.companyRegistrationNumbers[0].type.name).toBe("REGON");
        // expect(requestData.companyRegistrationNumbers[0].number).toBe(jsonData.companyRegistrationNumbers[1].number);
        // expect(jsonData.companyRegistrationNumbers[0].number).toHaveLength(14);

        // //companyRegistrationNumbers - NIP
        // expect(jsonData.companyRegistrationNumbers[1].type.name).toBe("NIP");
        // expect(requestData.companyRegistrationNumbers[1].number).toBe(jsonData.companyRegistrationNumbers[0].number);
        // expect(jsonData.companyRegistrationNumbers[1].number).toHaveLength(10);

        //Сheck comment
        expect(requestData.comment).toEqual(jsonData.comment);
        expect(typeof jsonData.comment).toBe("string");

        // Check isBlocked, isActive, isArchived(boolean values)
        expect(jsonData.isBlocked).toBe(false);
        expect(jsonData.isActive).toBe(true);
        expect(jsonData.isArchived).toBe(false);

    });

    testWithFixture("Get Company", async ({ authorisedRequest, apiData, addedCompanyData }) => {
      const response = await authorisedRequest.get(`${apiData.mainUrl}${urlCompany.companyUrl}/${addedCompanyData.addedcompanyId}`);
      const jsonData = await response.json()
        
        //Basic Checks
        expect(response.status()).toEqual(200);
        expect(response.headers()['content-type']).toMatch(/application\/json/);
        expect(typeof jsonData.id).toBe("number");
        expect(typeof jsonData.createdAt).toBe("number");
        expect(typeof jsonData.updatedAt).toBe("number");

        //CompanyShortName
        expect(jsonData.companyShortName).toBeTruthy();
        expect(typeof jsonData.companyShortName).toBe("string");

        //companyLegalName
        expect(jsonData.companyLegalName).toBeTruthy();
        expect(typeof jsonData.companyLegalName).toBe("string");

        //phoneNumber
        expect(jsonData.phoneNumber).toBeTruthy();
        expect(typeof jsonData.phoneNumber).toBe("string");
        expect(jsonData.phoneNumber).toHaveLength(11);

        //e-mail
        expect(jsonData.email).toBeTruthy();
        expect(typeof jsonData.email).toBe("string");

        //countryId
        expect(jsonData.country.Id).not.toBeNull();
        expect(typeof jsonData.country.id).toBe("number");

        //countryName
        expect(typeof jsonData.country.name).toBe("string");
        expect(jsonData.country.name).toBeTruthy();

        //legalAddress
        expect(jsonData.legalAddress.address).toBeTruthy();
        expect(typeof jsonData.legalAddress.address).toBe("string");
        //legalAddress - City
        expect(jsonData.legalAddress.city.Id).not.toBeNull();
        expect(typeof jsonData.legalAddress.city.id).toBe("number");

        //legalAddress - PostCode
        expect(jsonData.legalAddress.postcode).toBeTruthy();
        expect(typeof jsonData.legalAddress.postcode).toBe("string");

        //correspondenceAddress
        expect(jsonData.correspondenceAddress.address).toBeTruthy();
        expect(typeof jsonData.correspondenceAddress.address).toBe("string");

        //correspondenceAddress - City
        expect(jsonData.correspondenceAddress.city.Id).not.toBeNull();
        expect(typeof jsonData.correspondenceAddress.city.id).toBe("number");
        //correspondenceAddress - PostCode
        expect(jsonData.correspondenceAddress.postcode).toBeTruthy();
        expect(typeof jsonData.correspondenceAddress.postcode).toBe("string");

        //Написать функцию, которая будет обрабатывать нип и регон
        // //companyRegistrationNumbers - REGON
        // expect(jsonData.companyRegistrationNumbers[0].type.name).toBe("REGON");
        // expect(jsonData.companyRegistrationNumbers[0].number).toBeTruthy();
        // expect(jsonData.companyRegistrationNumbers[0].number).toHaveLength(14);

        // //companyRegistrationNumbers - NIP
        // expect(jsonData.companyRegistrationNumbers[1].type.name).toBe("NIP");
        // expect(jsonData.companyRegistrationNumbers[1].number).toBeTruthy();
        // expect(jsonData.companyRegistrationNumbers[1].number).toHaveLength(10);

        //Сheck comment
        expect(jsonData.comment).toBeTruthy();
        expect(typeof jsonData.comment).toBe("string");

        // Check isBlocked, isActive, isArchived(boolean values)
        expect(jsonData.isBlocked).toBe(false);
        expect(jsonData.isActive).toBe(true);
        expect(jsonData.isArchived).toBe(false);


  });
      
});
//}