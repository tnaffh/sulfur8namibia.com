import { Poppins } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import { SiteHeader } from "@/features/SiteHeader";
import CommonClient from "./CommonClient";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sulfur8® Namibia",
  description: "Sulfur8® Namibia is a brand of anti-dandruff shampoos and conditioners.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="" className={poppins.className}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <div>
          <SiteHeader />
          {children}
          <Footer />
        </div>
        <CommonClient />
      </body>
    </html>
  );
}
