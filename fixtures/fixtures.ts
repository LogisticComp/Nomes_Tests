import { test, request as baseRequest } from "@playwright/test";
import { apiData } from "../pages/authPage";
import { APIRequestContext } from "playwright";
import { addedCompanyData } from "../pages/companyPage";
//test
export type MyOptions = {
    apiData: typeof apiData;
    addedCompanyData: typeof addedCompanyData;

};
type MyFixtures = {
    authorisedRequest: APIRequestContext;
    authorisedRequestOrgAdmin: APIRequestContext;
};
//readme https://playwright.dev/docs/test-fixtures#fixtures-options
export const testWithFixture = test.extend<MyOptions & MyFixtures>({
    apiData: apiData,
    addedCompanyData: addedCompanyData,

    authorisedRequest: async ({ request, apiData }, use) => {
        const postRequest = {
            url: apiData.tokenUrl,
            data: new URLSearchParams({
                grant_type: "password",
                client_id: "captain-fe",
                username: apiData.username,
                password: apiData.password,
            }).toString(),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            
        };
        const response = await request.post(postRequest.url, {
            data: postRequest.data,
            headers: postRequest.headers,
        });

        const responseJson = await response.json();


        const authRequest = await baseRequest.newContext({
            extraHTTPHeaders: {
                "Authorization": `Bearer ${responseJson["access_token"]}`,
                "Content-Type": "application/json",
            },
        });

        await use(authRequest);
    },
    
    authorisedRequestOrgAdmin: async ({ request, apiData, addedCompanyData  }, use) => {
        const postRequest: Record<string, any> = {
            url: apiData.tokenUrl,
            data: new URLSearchParams({
                grant_type: "password",
                client_id: "captain-fe",
                username: addedCompanyData.emailOrgAdmin,
                password: apiData.password,
            }).toString(),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };
        const response = await request.post(postRequest.url, {
            data: postRequest.data,
            headers: postRequest.headers,
        });

        const responseJson = await response.json();


        const authRequest = await baseRequest.newContext({
            extraHTTPHeaders: {
                "Authorization": `Bearer ${responseJson["access_token"]}`,
                "Content-Type": "application/json",
            },
        });

        await use(authRequest);
    }
});