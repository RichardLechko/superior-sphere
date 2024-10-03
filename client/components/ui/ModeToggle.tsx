import React, { useEffect, useState } from "react";

const ModeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // This ensures localStorage is only used in the browser
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);

      const isDark =
        savedTheme === "dark" ||
        (savedTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"](
      "dark"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded"
    >
      {theme === "light" ? "\uD83C\uDF19" : "\uD83C\uDF1E"}
    </button>
  );
};

export default ModeToggle;
