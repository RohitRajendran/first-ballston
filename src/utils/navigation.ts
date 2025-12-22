export type NavLink = {
  href: string;
  label: string;
};

export type ResidentLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about-the-community", label: "About the Community" },
];

export const residentLinks: ResidentLink[] = [
  { href: "/notice-to-residents", label: "Notice to Residents" },
  { href: "/architectural-review", label: "Architectural Review" },
  {
    href: "https://engage.goenumerate.com/s/firstballstoncommons/home.php",
    label: "Resident Portal",
    external: true,
  },
];

export const normalizePath = (path: string): string => {
  if (!path) return "/";
  const normalized = path.replace(/\/$/, "");
  return normalized === "" ? "/" : normalized;
};

export const isActivePath = (pathname: string, href: string): boolean => {
  return normalizePath(pathname) === normalizePath(href);
};
