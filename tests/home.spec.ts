import { expect, test } from "@playwright/test";

test("home page renders hero and key sections", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });

  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();

  await expect(page).toHaveTitle(/First Ballston Commons/);
  await expect(page.getByRole("heading", { level: 1, name: "First Ballston Commons" })).toBeVisible();
  await expect(page.getByText("Tree-lined streets", { exact: false })).toBeVisible();

  await expect(page.getByRole("heading", { name: "Community features" })).toBeVisible();
  await expect(page.locator(".feature-card")).toHaveCount(3);

  await expect(page.getByRole("heading", { name: "Ideally located" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore the neighborhood" })).toBeVisible();
});

test("Get in touch button navigates to contact page", async ({ page, context }) => {
  await page.goto("/");
  const getInTouch = page.getByRole("link", { name: "Get in touch" });
  await expect(getInTouch).toBeVisible();
  await expect(getInTouch).toHaveAttribute(
    "href",
    "https://engage.goenumerate.com/s/firstballstoncommons/hoapage.php?page=contact_17941",
  );

  const [newPage] = await Promise.all([context.waitForEvent("page"), getInTouch.click()]);
  await newPage.waitForLoadState("domcontentloaded");
  expect(newPage.url()).toContain("https://engage.goenumerate.com/s/firstballstoncommons/hoapage.php?page=contact_17941");
});

test("Resident portal button navigates to portal", async ({ page, context }) => {
  await page.goto("/");
  const residentPortal = page.getByRole("link", { name: /Resident portal/i }).first();
  await expect(residentPortal).toBeVisible();
  await expect(residentPortal).toHaveAttribute(
    "href",
    "https://engage.goenumerate.com/s/firstballstoncommons/home.php",
  );

  const [newPage] = await Promise.all([context.waitForEvent("page"), residentPortal.click()]);
  await newPage.waitForLoadState("domcontentloaded");
  expect(newPage.url()).toContain("https://engage.goenumerate.com/s/firstballstoncommons/home.php");
});
