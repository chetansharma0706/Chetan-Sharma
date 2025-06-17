
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themetoggler.css"; // Ensure you have a CSS file for styling


const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
      document.body.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme("dark");
        document.body.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button onClick={toggleTheme} className="themebutton">
      {theme === "dark" ? <BsSun size={17} /> : <BsMoon size={17} />}
    </button>
  );
};

export default ThemeToggle;
