import { useEffect } from "react";
import {
  ThemeProviderContext,
  type ThemeProviderState,
} from "../hooks/useTheme";

type Theme = "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const theme: Theme = "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("dark");
  }, []);

  const value: ThemeProviderState = {
    theme,
    setTheme: () => {
      // No-op: theme is always dark
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
