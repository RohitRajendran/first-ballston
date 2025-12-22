import { expect, test } from "@playwright/test";

test("navbar shows expected links and navigates across pages", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });

  const openResidentsMenu = async () => {
    await page.getByRole("button", { name: "For Residents" }).click();
    await page.waitForFunction(() => {
      const menu = document.querySelector("#residents-menu");
      return menu ? !menu.classList.contains("hidden") : false;
    });
  };

  await page.goto("/");

  const homeLink = page.getByRole("link", { name: "Home" }).first();
  const aboutLink = page.getByRole("link", { name: "About the Community" });
  const residentsToggle = page.getByRole("button", { name: "For Residents" });

  await expect(homeLink).toBeVisible();
  await expect(aboutLink).toBeVisible();
  await expect(residentsToggle).toBeVisible();

  await openResidentsMenu();
  await expect(page.getByRole("link", { name: "Notice to Residents" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Architectural Review" })).toBeVisible();
  const navResidentPortal = page
    .getByRole("navigation")
    .getByRole("link", { name: /Resident Portal/i })
    .first();
  await expect(navResidentPortal).toHaveAttribute(
    "href",
    "https://engage.goenumerate.com/s/firstballstoncommons/home.php",
  );

  await aboutLink.click();
  await expect(page).toHaveURL(/\/about-the-community\/?$/);
  await expect(page.getByRole("heading", { level: 1, name: "About the Community" })).toBeVisible();

  await homeLink.click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1, name: "First Ballston Commons" })).toBeVisible();

  await openResidentsMenu();
  await page.getByRole("link", { name: "Notice to Residents" }).click();
  await expect(page).toHaveURL(/\/notice-to-residents\/?$/);
  await expect(page.getByRole("heading", { level: 1, name: "Notice to Residents" })).toBeVisible();

  await homeLink.click();
  await expect(page).toHaveURL(/\/$/);

  await openResidentsMenu();
  await page.getByRole("link", { name: "Architectural Review" }).click();
  await expect(page).toHaveURL(/\/architectural-review\/?$/);
  await expect(page.getByRole("heading", { level: 1, name: "Architectural Review" })).toBeVisible();
});
