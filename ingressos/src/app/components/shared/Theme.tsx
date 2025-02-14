"use client";

import { useState, useEffect } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function Theme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for stored theme in localStorage
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";

    // Check system preference
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // Determine initial theme
    const initialTheme = storedTheme || (prefersDarkMode ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-mode", initialTheme);
    localStorage.setItem("theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-mode", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      className="fixed bottom-4 right-4 z-50 
                 w-12 h-12 
                 bg-gray-100 dark:bg-neutral-700 
                 text-black dark:text-white 
                 rounded-full 
                 flex items-center justify-center 
                 shadow-lg 
                 hover:bg-gray-200 dark:hover:bg-neutral-600 
                 transition-colors duration-300"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
      }
    >
      {theme === "light" ? <IconMoonStars size={25} /> : <IconSun size={25} />}
    </button>
  );
}
