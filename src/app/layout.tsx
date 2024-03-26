import type { Metadata } from "next";
import { DM_Sans, Questrial } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils/theme-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-DM_Sans",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  title: "Dealo Group Incorporation",
  description: "A Multinational Business Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${questrial.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
