import request from "superagent";
import { urlCompany } from "../pages/companyPage";
import { generateRequestDataEditCompany } from "../pages/companyPage";
import { companyId } from "./2_addCompany.tests";
import { tokenPlatformOwner } from "./1_auth.tests";
import { apiData } from "../pages/authPage";

//Executing generate data function
const requestData = generateRequestDataEditCompany();

describe("Edit company Tests", () => {
    beforeEach(async () => {
        // Очистка или инициализация состояния перед каждым тестом
    });

    afterEach(async () => {
        // Очистка состояния после каждого теста
    });

    test("Edit Company", async () => {
        if (!tokenPlatformOwner) {
            throw new Error("Access token is missing");
        }

        const res = await request
            .put(`${apiData.mainUrl}${urlCompany.companyUrl}/${companyId}`)
            .set("Authorization", `Bearer ${tokenPlatformOwner}`)
            .send(requestData);
        let jsonData = res.body;

        //Basic Checks
        expect(res.status).toEqual(200);
        expect(res.type).toMatch(/json/);
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
        expect(jsonData.country.id).toBe(82);
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
        expect(typeof jsonData.correspondenceAddress.city.id).toBe("number");
        //correspondenceAddress - PostCode
        expect(requestData.correspondenceAddress.postcode).toEqual(jsonData.correspondenceAddress.postcode);
        expect(typeof jsonData.correspondenceAddress.postcode).toBe("string");

        //Написать функцию, которая будет обрабатывать нип и регон
        // //companyRegistrationNumbers - REGON
        // expect(jsonData.companyRegistrationNumbers[0].type.name).toBe("REGON");
        // expect(jsonData.companyRegistrationNumbers[0].number).toHaveLength(14);

        // //companyRegistrationNumbers - NIP
        // expect(jsonData.companyRegistrationNumbers[1].type.name).toBe("NIP");
        // expect(jsonData.companyRegistrationNumbers[1].number).toHaveLength(10);

        //Сheck comment
        expect(requestData.comment).toEqual(jsonData.comment);
        expect(typeof jsonData.comment).toBe("string");

        // Check isBlocked, isActive, isArchived(boolean values)
        expect(jsonData.isBlocked).toBe(false);
        expect(jsonData.isActive).toBe(true);
        expect(jsonData.isArchived).toBe(false);
    });

    test("Get Edited Company", async () => {
        if (!tokenPlatformOwner) {
            throw new Error("Access token is missing");
        }
        if (!companyId) {
            throw new Error("CompanyID is missing");
        }
        const res = await request
            .get(`${apiData.mainUrl}${urlCompany.companyUrl}/${companyId}`)
            .set("Authorization", `Bearer ${tokenPlatformOwner}`);
        let jsonData = res.body;

        //Basic Checks
        expect(res.status).toEqual(200);
        expect(res.type).toMatch(/json/);
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
