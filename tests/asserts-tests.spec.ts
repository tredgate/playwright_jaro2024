import test, { expect } from "@playwright/test";

test("toContainText test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click();
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  );
});

test("toHaveText test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("toBeVisibleTest", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator(".login-page-logo img")).toBeVisible();
});

test("toHaveValue test", async ({ page }) => {
  const username = "abcd";
  const usernameLocator = await page.locator("#username");

  await page.goto("https://tredgate.com/pmtool");
  await usernameLocator.fill(username);
  await expect(usernameLocator).toHaveValue(username);
});

test("Soft assert test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click();
});

test("Negativní test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator(".alert-danger")).not.toBeVisible();
});
