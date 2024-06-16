import { faker } from '@faker-js/faker';

const cityIds = [439, 934, 1336, 1099, 1501, 2049];

//URL
export class urlCompany {
    static mainUrl: string = "http://109.205.183.105:8081"
    static addCompanyUrl: string = "/v1/api/companies";
    static getCompanyUrl: string = "/v1/api/companies/";
    static editCompanyUrl: string = "/v1/api/companies/";

  

}

//Generate data for creation company
export const generateRequestData = () => {
  return {
    companyShortName: faker.company.name(),
    companyLegalName: faker.company.name(),
    websiteURL: faker.internet.url(),
    email: faker.internet.email(),
    phoneNumber: "48" + faker.string.numeric(9),
    companyRegistrationNumbers: [
      {
        type: "NIP",
        number: faker.string.numeric(10)
      },
      {
        type: "REGON",
        number: faker.string.numeric(14)
      }
    ],
    legalAddress: {
      address: faker.location.streetAddress(),
      cityId: faker.helpers.arrayElement(cityIds),
      postcode: faker.string.numeric(5)
    },
    correspondenceAddress: {
      address: faker.location.streetAddress(),
      cityId: faker.helpers.arrayElement(cityIds),
      postcode: faker.string.numeric(5)
    },
    countryId: 82,
    comment: faker.lorem.sentence(),
    user: {
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName()
    }
  };
};

// Генерация данных и вывод на консоль
const requestData = generateRequestData();
