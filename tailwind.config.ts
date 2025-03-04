import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        transparent: "transparent",
        current: "currentColor",
        uvgreen: "#009A46",
        uvRed1: "#E02020",
        uvOrange: "#FBAA19",
        gray67: "#676767",
        grayf4: "#F4F4F4",
        gray9c: "#9C9C9C",
        gray9a: "#9A9A9A",
        grayc8: "#C8C8C8",
        grayinput: "#F5F8FA",
        grayFB: "#FBFBFB",
        black21: "#212121",
        black40: "#404040",
        whitef8: "#f8f8f8",
        dark3F: "#3F4254",
        redFF: "#FF4F5B",
        green4D: "#4DB87E",
        blue2F: "#2F71D2",
        grayB4: "#B4B4B4",
        greenD9: "#D9F9E7",
        grayE6: "#E6E6E5",
        orangeDB: "#DB8C00",
        grayF6: "#F6F8FA",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        5: "5px",
        10: "10px",
        20: "20px",
        50: "50px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      zIndex: {
        1: "1",
        5: "5",
        75: "75",
        100: "100",
      },
      screens: {
        mobile: "320px",
        tablet: "640px",
        laptop: "1024px",
        laptopL: "1280px",
        laptopXL: "1536px",
      },
      width: {
        layout: "576px",
        tablet: "640px",
        18: "72px",
      },
      minHeight: {
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
      height: {
        18: "72px",
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
      maxHeight: {
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
      letterSpacing: {
        0.12: "0.12em",
      },
      fontSize: {
        xxxs: ["7px", "10.5px"],
        xxs: ["10px", "15px"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".snap-x-items-list": {
          overflowX: "auto",
          "-webkit-overflow-scrolling": "touch",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        },
        // Hide scrollbar for webkit browsers
        ".hide-scroll": {
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        },
        ".skeleton": {
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          backgroundColor: "#D3D3D3",
          borderRadius: "6px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
} satisfies Config;

export default config;
