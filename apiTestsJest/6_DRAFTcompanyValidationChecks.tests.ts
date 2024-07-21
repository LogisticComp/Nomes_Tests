import request from "superagent";
import { generateRequestDataAddCompany, urlCompany } from "../pages/companyPage";
import { tokenPlatformOwner } from "./1_auth.tests";

const requestData = generateRequestDataAddCompany();
requestData.companyShortName = "";

describe("Company Validation Checks", () => {
    beforeEach(async () => {
        // Очистка или инициализация состояния перед каждым тестом
    });

    afterEach(async () => {
        // Очистка состояния после каждого теста
    });

    test("companyShortName validation", async () => {
        await expect(
            request
                .post(urlCompany.addCompanyUrl)
                .set("Authorization", `Bearer ${tokenPlatformOwner}`)
                .send(requestData),
        ).rejects.toMatchObject({
            status: 400,
            response: {
                body: {
                    errors: expect.arrayContaining([
                        expect.objectContaining({ code: "ORGANIZATION_SHORTNAME_IS_OVERSIZED" }),
                        expect.objectContaining({ code: "EMPTY_ORGANIZATION_SHORTNAME" }),
                    ]),
                },
            },
        });
    });

    test("companyLegalName validation", async () => {
        requestData.companyLegalName = "";
        await expect(
            request
                .post(urlCompany.addCompanyUrl)
                .set("Authorization", `Bearer ${tokenPlatformOwner}`)
                .send(requestData),
        ).rejects.toMatchObject({
            status: 400,
            response: {
                body: {
                    errors: expect.arrayContaining([
                        expect.objectContaining({ code: "EMPTY_ORGANIZATION_LEGAL_NAME" }),
                        expect.objectContaining({ code: "LEGAL_NAME_IS_OVERSIZED" }),
                    ]),
                },
            },
        });
    });

    // Add more tests for other fields as needed
});
