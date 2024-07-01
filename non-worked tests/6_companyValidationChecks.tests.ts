import request from "superagent";
import { generateRequestDataAddCompany, urlCompany } from "../pages/companyPage";
import { companyId } from "../apiTests/2_addCompany.tests";
import { tokenPlatformOwner } from "../apiTests/1_auth.tests";
import { stringify } from 'flatted'; // импортируем stringify из flatted;


const requestData = generateRequestDataAddCompany();
requestData.companyShortName = '';

describe ("Company Validation Checks", () => {

    test("companyShortName validation", async () => {
        
        const res = await request
            .post(urlCompany.addCompanyUrl)
            .set("Authorization", `Bearer ${tokenPlatformOwner}`)
            .send(requestData);
        let jsonData = res.body

        expect(res.status).toEqual(400);
        console.log(res.body);
    });
})