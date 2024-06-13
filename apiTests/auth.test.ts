import superagent from "superagent";
import request from 'superagent';
import { apiData } from "../pages/authPage";
import { urlCompany } from "../pages/companyPage";
import { generateRequestData } from "../pages/companyPage";
const requestData = generateRequestData();
let token: string | undefined;


describe("Users Test", () => {
    test("Auth First", async () => {
        const postRequest ={
            url: apiData.tokenUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
                grant_type: 'password',
                client_id: 'captain-fe',
                username: apiData.username,
                password: apiData.password
            }
        };
        const res = await request
            .post(postRequest.url)
            .type('form')
            .send(postRequest.form);
        
        expect(res.status).toEqual(200);
        //добавить проверок на поля

        const responseJson = res.body;
        token = responseJson['access_token'];
    });

    test("Add Company", async () => {
        if (!token) {
            throw new Error("Access token is missing");
        }

        const res = await request
            .post(urlCompany.addCompanyUrl)
            .set('Authorization', `Bearer ${token}`)
            .send(requestData);
            const responseJson = res.body;
        expect(res.status).toEqual(200);
       
        console.log(responseJson);
    });
});
