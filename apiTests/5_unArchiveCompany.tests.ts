import request from "superagent";
import { companyId } from "./2_addCompany.tests";
import { tokenPlatformOwner } from "./1_auth.tests"; 
import { urlCompany } from "../pages/companyPage";

describe ("UnArchive Company Tests", () => {
    test("Archive Tests", async () => {
        console.log(`${urlCompany.mainUrl}${urlCompany.companyUrl}/${companyId}/unarchive`);

        if (!tokenPlatformOwner) {
            throw new Error("Acces token is mising");
        }
        const res = await request
        .get(`${urlCompany.mainUrl}${urlCompany.companyUrl}/${companyId}/unarchive`)
        .set("Authorization", `Bearer ${tokenPlatformOwner}`);
                
        //Basic Checks
                expect(res.status).toEqual(200);
                expect(res.body).toEqual({});


    })
})