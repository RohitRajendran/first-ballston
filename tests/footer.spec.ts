import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", heading: "First Ballston Commons" },
  { path: "/about-the-community", heading: "About the Community" },
  { path: "/notice-to-residents", heading: "Notice to Residents" },
  { path: "/architectural-review", heading: "Architectural Review" },
];

const residentPortalHref =
  "https://engage.goenumerate.com/s/firstballstoncommons/home.php";

test.describe("Footer", () => {
  for (const { path, heading } of pages) {
    test(`renders expected links on ${path}`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.ok()).toBeTruthy();

      const footer = page.getByRole("contentinfo");
      await expect(footer).toBeVisible();
      await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();

      const portalLink = footer.getByRole("link", { name: /Resident portal/i }).first();
      await expect(portalLink).toHaveAttribute("href", residentPortalHref);

      const builtByLink = footer.getByRole("link", { name: /Rohit Rajendran/i });
      await expect(builtByLink).toHaveAttribute("href", "https://rohitrajendran.com");

      const currentYear = String(new Date().getFullYear());
      await expect(footer.getByText(currentYear)).toBeVisible();
    });
  }
});
