import test from "@playwright/test";
import { LoginPage } from "../page-objects/pmtool/fluent/login_fluent_page";

test("PMtool login logout via fluent interface", async ({ page }) => {
  await new LoginPage(page)
    .openPmtool()
    .then((page) => page.fillUsername("playwright_jaro24"))
    .then((page) => page.fillPassword("Playwright!2024"))
    .then((page) => page.clickLogin())
    .then((page) => page.clickProfile())
    .then((page) => page.clickLogoff());
});
