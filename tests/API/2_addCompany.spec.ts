// tests/addCompany.spec.ts
import { test, expect, request as baseRequest } from '@playwright/test';
import { apiData } from '../../pages/authPage';
import { urlCompany } from '../../pages/companyPage';
import { generateRequestDataAddCompany } from '../../pages/companyPage';
import { APIRequestContext } from "playwright";
import { testWithFixture } from "../../fixtures/fixtures";

let requestData = generateRequestDataAddCompany();

test.describe('Adding Company Tests', () => {
  let testRequest: APIRequestContext
  test.beforeEach(async () => {
    if (!process.env.TEST_API_TOKEN) {
      throw new Error('Access token is missing');
    }

    // Установите токен в заголовках для всех запросов
    testRequest = await baseRequest.newContext({
      extraHTTPHeaders: {
        'Authorization': `Bearer ${process.env.TEST_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  });

  test('Add Company', async () => {
    const response = await testRequest.post(`${apiData.mainUrl}${urlCompany.companyUrl}`, {
      data: requestData,
    });

    expect(response.status()).toBe(200);

    const jsonData = await response.json();
    // Дополнительные проверки
  });

});

testWithFixture.describe('Adding Company Tests', () => {
   testWithFixture('Add Company 2', async ({authorisedRequest}) => {
    const response = await authorisedRequest.post(`${apiData.mainUrl}${urlCompany.companyUrl}`, {
      data: requestData,
    });

    expect(response.status()).toBe(200);

    const jsonData = await response.json();
    // Дополнительные проверки
  });

});
