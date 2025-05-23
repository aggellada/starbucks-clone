import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterOne from "@/components/FooterOne";
import FooterTwo from "@/components/FooterTwo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Starbucks Clone",
  description:
    "Recreated the Starbucks website, showcasing responsiveness, accessibility, and clean UI layouts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <FooterOne />
        <FooterTwo />
      </body>
    </html>
  );
}
