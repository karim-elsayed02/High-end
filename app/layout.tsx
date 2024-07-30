import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  display: "swap" 
});

export const metadata: Metadata = {
  title: "HighEnd | General Trading",
  description: "Trading company in UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <NavBar />
          {children}
        </body>
    </html>
  );
}
