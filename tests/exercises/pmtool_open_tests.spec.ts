import test from "@playwright/test";

test("Otevření PMTool, vyplnění už. jména a hesla", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("test");
  await page.locator("#password").fill("test");
});
