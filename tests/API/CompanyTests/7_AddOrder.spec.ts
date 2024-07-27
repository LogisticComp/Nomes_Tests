import { expect } from "@playwright/test";
import { urlOrder } from "../../../pages/orderPage";
import { generateRequestDataAddOrder } from "../../../pages/orderPage";
import { testWithFixture } from "../../../fixtures/fixtures";

let requestDataAddOrder = generateRequestDataAddOrder();


testWithFixture.describe.configure({mode: "serial"});
// testWithFixture.describe("Adding Order")