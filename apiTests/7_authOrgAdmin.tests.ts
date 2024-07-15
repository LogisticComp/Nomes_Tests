import request from "superagent";
import { apiData } from "../pages/authPage";
import { reqData } from "./2_addCompany.tests";
import { companyAdminEmail } from "../pages/authPage";


describe("auth OrgAdmin", () => {


    beforeEach(async () => {
        // Очистка или инициализация состояния перед каждым тестом
    });

    afterEach(async () => {
        // Очистка состояния после каждого теста
    });

    test("Login as OrgAdmin", async () => {

        console.log("Global companyAdminEmail in other test:", companyAdminEmail); // This should now have the expected value

    //     const postRequest = {
    //         url: apiData.tokenUrl,
    //         method: "POST",
    //         Headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //         },
    //         form: {
    //             grant_type: "password",
    //             client_id: "captain-fe",
    //             username: reqData.,
    //             password: apiData.defaultPasswordOrgAdmin,
    //         },
    //     };
    //     const res = await request.post(postRequest.url).type("form").send(postRequest.form);

    //     expect(res.status).toEqual(200);
    //     //добавить проверок на поля

    //     const responseJson = res.body;
    //     const tokenOrgAdmin = responseJson["access_token"];
    //     console.log(companyAdminLogin);
    });

});
