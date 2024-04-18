import test from "@playwright/test";
import { LoginPage } from "../page-objects/pmtool/login_page";
import { HomePage } from "../page-objects/pmtool/home_page";

test("Page Objects test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.openPmtool();
  await loginPage.fillUsername("playwright_jaro24");
  await loginPage.fillPassword("Playwright!2024");
  await loginPage.clickLogin();
  await homePage.clickProfile();
  await homePage.clickLogoff();
});
