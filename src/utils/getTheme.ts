import { getLocalStorage } from "./localStorage";

export function getTheme() {
  return (
    getLocalStorage("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
}
