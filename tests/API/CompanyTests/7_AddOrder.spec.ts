import { expect } from "@playwright/test";
import { urlOrder } from "../../../pages/orderPage";
import { generateRequestDataAddOrder } from "../../../pages/orderPage";
import { testWithFixture as test } from "../../../fixtures/fixtures";
import { IOrder } from "../../../interfaces/ordersInteface";
let requestDataAddOrder = generateRequestDataAddOrder();

test.describe.configure({ mode: "serial" });
test.describe("Adding Order", () => {
    test("Add Order", async ({ authorisedRequestOrgAdmin, apiData }) => {
        const response = await authorisedRequestOrgAdmin.post(`${apiData.mainUrl}${urlOrder.addOrder}`, {
            data: requestDataAddOrder,
        });
        const jsonData = (await response.json()) as IOrder;

        //Basic Checks
        expect(response.status()).toEqual(200);
        expect(response.headers()["content-type"]).toMatch(/application\/json/);
        expect(typeof jsonData.id).toBe("number");
    });
});
