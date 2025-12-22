import { expect, test } from "@playwright/test";

test("notice to residents page renders guidance sections", async ({ page }) => {
  const response = await page.goto("/notice-to-residents");
  expect(response?.ok()).toBeTruthy();

  await expect(page).toHaveTitle(/Notice to Residents – First Ballston Commons/);
  await expect(page.getByRole("heading", { level: 1, name: "Notice to Residents" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Parking reminders" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Noise reminders" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Trash and recycling" })).toBeVisible();
});

test("notice to residents parking permit link opens county page", async ({ page, context }) => {
  await page.goto("/notice-to-residents");
  const parkingPermitLink = page.getByRole("link", { name: /Residential-Permit-Parking/i });
  await expect(parkingPermitLink).toHaveAttribute(
    "href",
    "https://www.arlingtonva.us/Government/Programs/Transportation/Parking/Residential-Permit-Parking",
  );

  const [newPage] = await Promise.all([context.waitForEvent("page"), parkingPermitLink.click()]);
  await newPage.waitForLoadState("domcontentloaded");
  expect(newPage.url()).toContain(
    "https://www.arlingtonva.us/Government/Programs/Transportation/Parking/Residential-Permit-Parking",
  );
});

test("notice to residents resident portal link opens portal", async ({ page, context }) => {
  await page.goto("/notice-to-residents");
  const residentPortal = page.getByRole("link", { name: /Resident portal/i }).first();
  await expect(residentPortal).toHaveAttribute(
    "href",
    "https://engage.goenumerate.com/s/firstballstoncommons/home.php",
  );

  const [newPage] = await Promise.all([context.waitForEvent("page"), residentPortal.click()]);
  await newPage.waitForLoadState("domcontentloaded");
  expect(newPage.url()).toContain("https://engage.goenumerate.com/s/firstballstoncommons/home.php");
});
