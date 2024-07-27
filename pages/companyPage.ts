import { faker } from "@faker-js/faker";

const cityIds = [439, 934, 1336, 1099, 1501, 2049];

//URL
export const  urlCompany = {
     companyUrl: "/v1/api/companies",
     //addCompanyUrl: "http://109.205.183.105:8081/v1/api/companies",
     //getCompanyUrl: "http://109.205.183.105:8081/v1/api/companies",
}

export const addedCompanyData: {
    addedcompanyId: number | null,
    emailOrgAdmin: string,
 } = { 
    addedcompanyId: null,
    emailOrgAdmin: "",
}


//Generate data for creation company
export const generateRequestDataAddCompany = () => {
    return {
        companyShortName: faker.company.name(),
        companyLegalName: faker.company.name(),
        websiteURL: faker.internet.url(),
        email: faker.internet.email(),
        phoneNumber: "48" + faker.string.numeric(9),
        companyRegistrationNumbers: [
            {
                type: "NIP",
                number: faker.string.numeric(10),
            },
            {
                type: "REGON",
                number: faker.string.numeric(14),
            },
        ],
        legalAddress: {
            address: faker.location.streetAddress(),
            cityId: faker.helpers.arrayElement(cityIds),
            postcode: faker.string.numeric(5),
        },
        correspondenceAddress: {
            address: faker.location.streetAddress(),
            cityId: faker.helpers.arrayElement(cityIds),
            postcode: faker.string.numeric(5),
        },
        countryId: 82,
        comment: faker.lorem.sentence(),
        user: {
            email: faker.internet.email(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        },
    };
};

//Generate data for editing company
export const generateRequestDataEditCompany = () => {
    return {
        companyShortName: faker.company.name(),
        companyLegalName: faker.company.name(),
        websiteURL: faker.internet.url(),
        phoneNumber: "48" + faker.string.numeric(9),
        email: faker.internet.email(),
        legalAddress: {
            address: faker.location.streetAddress(),
            cityId: faker.helpers.arrayElement(cityIds),
            postcode: faker.string.numeric(5),
        },
        correspondenceAddress: {
            address: faker.location.streetAddress(),
            cityId: faker.helpers.arrayElement(cityIds),
            postcode: faker.string.numeric(5),
        },
        countryId: 82,
        comment: faker.lorem.sentence(),
    };
};
