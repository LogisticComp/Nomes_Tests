import { test, expect, request } from "@playwright/test";
import { apiData } from "../../pages/authPage";

//global variables
export let tokenPlatformOwner: string | undefined;

test.describe("Auth", () => {
    test.beforeEach(async () => {});

    test.afterEach(async () => {});

    test("Login as PlatformOwner", async ({ request }) => {
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
        const tokenPlatformOwner = responseJson["access_token"];


        expect(response.status()).toBe(200);
        expect(responseJson).toHaveProperty("access_token");
        expect(responseJson).toHaveProperty("token_type");
    });
});
