import test from "@playwright/test";

test("Click test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click();
});

test("Fill a pressSequentially test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("Start");
  await page.locator("#username").fill("End");
  await page.locator("#username").pressSequentially("Kde toto bude?");
});

test("Select tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("#dropdowm-menu-1").selectOption("sql");
  await page.locator("#dropdowm-menu-2").selectOption({ label: "TestNG" });
});

test("Checkbox, radio button test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("//input[@value='option-1']").check();
  await page.locator("//input[@value='orange']").setChecked(true);
  await page.locator("//input[@value='option-1']").uncheck();
});

test("iFrame Test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  const frame = await page.frameLocator("#frame");
  await frame.locator("#button-find-out-more").click();
});

test("Hover test", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  // ? Po kliknutí na list-alert tlačítko se zobrazí alert, kódem page.on jej vypíšeme (do console) a zavřeme
  page.on("dialog", async (dialog) => {
    console.log("Alert message:", dialog.message());
    await dialog.dismiss(); // Closes the dialog without clicking anything
  });
  await page
    .locator('//div[@class="dropdown hover"]//button[@class="dropbtn"]')
    .hover();
  await page
    .locator('//div[@class="dropdown hover"]//a[@class="list-alert"]')
    .click();
});
