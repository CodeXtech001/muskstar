import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainCover from "@/components/MainCover";
import Banner from "@/components/Banner";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "X Crypto Giveaway",
  description: "Elon Musk X Crypto Giveaway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:h-screen`}
      >
       <Toaster/>
       <MainCover>
         {children}
       </MainCover>
       <Banner/>
      </body>
    </html>
  );
}
