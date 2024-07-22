// tests/addCompany.spec.ts
import { expect } from "@playwright/test";
import { urlCompany } from "../../pages/companyPage";
import { generateRequestDataAddCompany } from "../../pages/companyPage";
import { testWithFixture } from "../../fixtures/fixtures";

let requestData = generateRequestDataAddCompany();


testWithFixture.describe("Adding Company Tests", () => {
    testWithFixture("Add Company", async ({ authorisedRequest, apiData }) => {
        const response = await authorisedRequest.post(`${apiData.mainUrl}${urlCompany.companyUrl}`, {
            data: requestData,
        });

        expect(response.status()).toBe(200);
        console.log({ apiData });
        const jsonData = await response.json();
        apiData.testId = jsonData.id;
        console.log({ apiData });
        // Дополнительные проверки
    });

});
