import { test, expect } from "@playwright/test";
import { apiData } from "../../../pages/authPage";

//export default function Auth(){
test.describe("Auth", () => {
    test.beforeEach(async () => {
    });

    test.afterEach(async () => {
    });
//test
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

        expect(response.status()).toBe(200);
        expect(responseJson).toHaveProperty("access_token");
        expect(responseJson).toHaveProperty("token_type");
    });
});
//}