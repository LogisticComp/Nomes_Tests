import { faker } from '@faker-js/faker';

//URL

export class urlCompany {
    static addCompanyUrl: string = "http://109.205.183.105:8081/v1/api/companies";

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
        number: faker.string.numeric(9)
      }
    ],
    legalAddress: {
      address: faker.location.streetAddress(),
      cityId: parseInt(faker.string.numeric(3)),
      postcode: faker.string.numeric(5)
    },
    correspondenceAddress: {
      address: faker.location.streetAddress(),
      cityId: parseInt(faker.string.numeric(3)),
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
console.log(requestData);