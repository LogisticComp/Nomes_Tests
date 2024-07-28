import { faker } from "@faker-js/faker";

export const urlOrder = {
    addOrder: "/v1/api/orders",
};

function getRandomElement(array: any) {
    return array[Math.floor(Math.random() * array.length)];
}

const orderStatuses = ["UNASSIGNED", "ASSIGNED", "IN_PROGRESS", "COMPLETED"];

export const generateRequestDataAddOrder = () => {
    return {
        orderNumber: faker.number.int(100),
        loadingDate: 1721552147,
        loadingCountryId: 82,
        loadingCityId: 439,
        companyNameLoading: faker.company.name().slice(0, 30),
        addressLoading: faker.location.streetAddress(),
        postcodeLoading: faker.string.numeric(5),
        loadingCoordinates: {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        },
        unloadingDate: 1721552147,
        unloadingCountryId: 82,
        unloadingCityId: 439,
        addressUnloading: faker.location.secondaryAddress().slice(0, 30),
        companyNameUnloading: faker.company.name(),
        postcodeUnloading: faker.string.numeric(5),
        unloadingCoordinates: {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        },
        weight: faker.number.int(1000),
        orderStatus: getRandomElement(orderStatuses),
        notes: faker.lorem.sentence(),
    };
};
