// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { derived, writable } from "svelte/store";

let systemDarkMode = writable<boolean>(window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false);
window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  systemDarkMode.set(event.matches);
});

export { systemDarkMode };

export function makeDarkModeStore() {
  let userDarkMode = writable<boolean | null>(null);
  let darkMode = derived([systemDarkMode, userDarkMode], ([system, user]) => user ?? system);
  return { darkMode, userDarkMode };
}
