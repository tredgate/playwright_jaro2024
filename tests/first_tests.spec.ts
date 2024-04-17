import { test } from "@playwright/test";

test("První test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("test");
});
