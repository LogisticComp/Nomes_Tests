// tests/addCompany.spec.ts
import { test, expect, request as baseRequest } from '@playwright/test';
import { apiData } from '../../pages/authPage';
import { urlCompany } from '../../pages/companyPage';
import { generateRequestDataAddCompany } from '../../pages/companyPage';
import { tokenPlatformOwner } from './1_auth.spec';

let requestData = generateRequestDataAddCompany();

test.describe('Adding Company Tests', () => {
  test.beforeEach(async ({ request }) => {
    if (!tokenPlatformOwner) {
      throw new Error('Access token is missing');
    }

    // Установите токен в заголовках для всех запросов
    request = await baseRequest.newContext({
      extraHTTPHeaders: {
        'Authorization': `Bearer ${tokenPlatformOwner}`,
        'Content-Type': 'application/json',
      },
    });
  });

  test('Add Company', async ({ request }) => {
    const response = await request.post(`${apiData.mainUrl}${urlCompany.companyUrl}`, {
      data: requestData,
    });

    expect(response.status()).toBe(200);

    const jsonData = await response.json();
    // Дополнительные проверки
  });
});
