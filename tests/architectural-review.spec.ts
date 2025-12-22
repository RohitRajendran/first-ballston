import { expect, test } from "@playwright/test";

test("architectural review page renders content and approved colors", async ({ page }) => {
  const response = await page.goto("/architectural-review");
  expect(response?.ok()).toBeTruthy();

  await expect(page).toHaveTitle(/Architectural Review – First Ballston Commons/);
  await expect(page.getByRole("heading", { level: 1, name: "Architectural Review" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Approved Front Door Colors" })).toBeVisible();
  await expect(page.locator('[href^="https://www.benjaminmoore.com"]')).toHaveCount(18);
});

test("architectural review download link opens PDF", async ({ page }) => {
  await page.goto("/architectural-review");
  const downloadRequestForm = page.getByRole("link", { name: "Download request form" });
  await expect(downloadRequestForm).toBeVisible();
  await expect(downloadRequestForm).toHaveAttribute(
    "href",
    "/assets/architectural-approval-form.pdf"
  );
});

test("architectural review contact manager link opens contact page", async ({ page, context }) => {
  await page.goto("/architectural-review");
  const contactManager = page.getByRole("link", { name: /Contact community manager/i });
  await expect(contactManager).toHaveAttribute(
    "href",
    "https://engage.goenumerate.com/s/firstballstoncommons/hoapage.php?page=contact_17941"
  );

  const [newPage] = await Promise.all([context.waitForEvent("page"), contactManager.click()]);
  await newPage.waitForLoadState("domcontentloaded");
  expect(newPage.url()).toContain(
    "https://engage.goenumerate.com/s/firstballstoncommons/hoapage.php?page=contact_17941"
  );
});
