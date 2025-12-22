import { expect, test } from "@playwright/test";

test("about page renders key sections", async ({ page }) => {
  const response = await page.goto("/about-the-community");
  expect(response?.ok()).toBeTruthy();

  await expect(page).toHaveTitle(/About the Community – First Ballston Commons/);
  await expect(page.getByRole("heading", { level: 1, name: "About the Community" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Welcome to First Ballston Commons" })
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Community Background" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Location & Convenience" })).toBeVisible();
});

test("about page resident portal link opens portal", async ({ page, context }) => {
  await page.goto("/about-the-community");
  const residentPortal = page.getByRole("link", { name: /Resident portal/i }).first();
  await expect(residentPortal).toBeVisible();
  await expect(residentPortal).toHaveAttribute(
    "href",
    "https://engage.goenumerate.com/s/firstballstoncommons/home.php"
  );

  const [newPage] = await Promise.all([context.waitForEvent("page"), residentPortal.click()]);
  await newPage.waitForLoadState("domcontentloaded");
  expect(newPage.url()).toContain("https://engage.goenumerate.com/s/firstballstoncommons/home.php");
});

test("about page management office link opens contact page", async ({ page, context }) => {
  await page.goto("/about-the-community");
  const managementOffice = page.getByRole("link", { name: /management office/i });
  await expect(managementOffice).toBeVisible();
  await expect(managementOffice).toHaveAttribute(
    "href",
    "https://engage.goenumerate.com/s/firstballstoncommons/hoapage.php?page=contact_17941"
  );

  const [newPage] = await Promise.all([context.waitForEvent("page"), managementOffice.click()]);
  await newPage.waitForLoadState("domcontentloaded");
  expect(newPage.url()).toContain(
    "https://engage.goenumerate.com/s/firstballstoncommons/hoapage.php?page=contact_17941"
  );
});
