import { test as setup } from "@playwright/test";
import { apiData } from "../pages/authPage";

setup("authenticate", async ({ request }) => {
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

    process.env.TEST_API_TOKEN = responseJson["access_token"];
});