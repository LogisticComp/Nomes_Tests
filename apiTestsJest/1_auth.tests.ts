import request from "superagent";
import { apiData } from "../pages/authPage";
export let tokenPlatformOwner: string | undefined;
export let tokenPlatformOwnerTest: string | undefined;

describe("Auth", () => {
    beforeEach(async () => {
        // Очистка или инициализация состояния перед каждым тестом
    });

    afterEach(async () => {
        // Очистка состояния после каждого теста
    });

    test("Login as PlatforOwner", async () => {
        const postRequest = {
            url: apiData.tokenUrl,
            method: "POST",
            Headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            form: {
                grant_type: "password",
                client_id: "captain-fe",
                username: apiData.username,
                password: apiData.password,
            },
        };
        const res = await request.post(postRequest.url).type("form").send(postRequest.form);

        expect(res.status).toEqual(200);
        //добавить проверок на поля

        const responseJson = res.body;
        tokenPlatformOwner = responseJson["access_token"];
    });
});
