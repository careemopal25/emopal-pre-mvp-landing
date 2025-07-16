import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="default"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 glass-toggle embossed-button floating-glow
                 rounded-full px-5 py-3 flex items-center gap-2
                 text-foreground font-medium border-none"
    >
      <span className="text-lg transition-all duration-300 drop-shadow-sm">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
      <span className="text-sm font-medium text-embossed">Mode</span>
    </Button>
  );
};