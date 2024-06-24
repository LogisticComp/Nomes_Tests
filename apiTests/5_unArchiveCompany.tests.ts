import request from "superagent";
import { urlCompany } from "../pages/companyPage";
import { companyId } from "./2_addCompany.tests";
import { tokenPlatformOwner } from "./1_auth.tests";
import { apiData, gettingToken } from "../pages/authPage";

describe ("Archive Company Tests", () => {
    test("UnArchive Company", async () => {
        if (!tokenPlatformOwner) {
            throw new Error ("Acces token is missing");
        }
        if (companyId) {
            console.log(companyId);
        }

        const res = await request
        .get(`http://109.205.183.105:8081/v1/api/companies/618/unarchive`)
        .set("Authorization", `Bearer ${tokenPlatformOwner}`);

        let jsonData = res.body;

        //Basic Checks
        expect(res.status).toEqual(200);

    })
})