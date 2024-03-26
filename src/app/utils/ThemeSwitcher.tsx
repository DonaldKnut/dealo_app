"use client";
import { useState, useEffect, FC } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import { UseThemeProps } from "next-themes/dist/types";

interface Props {}

export const ThemeSwitcher: FC<Props> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      {theme === "light" ? (
        <BiMoon
          className="cursor-pointer"
          fill="black"
          size={25}
          onClick={toggleTheme}
        />
      ) : (
        <BiSun
          className="cursor-pointer"
          fill="white"
          size={25}
          onClick={toggleTheme}
        />
      )}
      {/* <style jsx global>{`
        body {
          background-color: ${theme === "light" ? "#fff" : "#222"};
          color: ${theme === "light" ? "#000" : "#fff"};
          transition: background-color 0.5s, color 0.5s;
        }
      `}</style> */}
    </div>
  );
};
