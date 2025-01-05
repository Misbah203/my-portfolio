import { Caveat, Inter } from "next/font/google";

 export const caveatFont = Caveat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat",
});


 export const interFont = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

