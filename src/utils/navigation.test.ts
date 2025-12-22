import { describe, expect, it } from "vitest";

import { isActivePath, navLinks, normalizePath, residentLinks } from "./navigation";

describe("navigation helpers", () => {
  it("normalizes paths with trailing slashes", () => {
    expect(normalizePath("/about/")).toBe("/about");
    expect(normalizePath("/")).toBe("/");
  });

  it("falls back to the root path for empty values", () => {
    expect(normalizePath("")).toBe("/");
  });

  it("determines active paths consistently", () => {
    expect(isActivePath("/about", "/about/")).toBe(true);
    expect(isActivePath("/notice-to-residents", "/architectural-review")).toBe(false);
  });

  it("lists the primary navigation destinations", () => {
    expect(navLinks).toEqual([
      { href: "/", label: "Home" },
      { href: "/about-the-community", label: "About the Community" },
    ]);
  });

  it("includes resident links with external metadata", () => {
    const portalLink = residentLinks.find((link) => link.label === "Resident Portal");
    expect(portalLink?.external).toBe(true);
    expect(residentLinks.map((link) => link.href)).toContain("/notice-to-residents");
  });
});
