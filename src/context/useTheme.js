import { useContext } from "react";
import { ThemeContext } from "./themeContextStore";

export function useTheme() {
  return useContext(ThemeContext);
}
