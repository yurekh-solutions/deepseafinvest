import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DEEPSEA FINVEST | Qualified & Unbiased Wealth Management Mumbai",
  description:
    "Mumbai-Based Trusted Wealth Management Firm since 2011. Expert financial advisors for High Yield Bonds, Mutual Funds, SIP, Insurance, Equity & Alternative Investments. Serving Marine Engineers, NRIs & Professionals.",
  keywords:
    "wealth management Mumbai, financial advisor India, high yield bonds, mutual funds SIP, life insurance, equity investment, alternative investments, marine engineer finance, NRI investment, SEBI registered, portfolio management, retirement planning, tax saving investments, fixed income products, corporate bonds",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    title: "DEEPSEA FINVEST | Wealth Management, Simplified",
    description:
      "Qualified & Unbiased Wealth Management across Various Financial Asset Classes - High Yield Bonds, Mutual Funds, Insurance, Equity & Alternatives",
    type: "website",
    images: [
      {
        url: "/",
        width: 1200,
        height: 630,
        alt: "Deepsea Finvest Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DEEPSEA FINVEST | Wealth Management",
    description: "Trusted Wealth Management Firm in Mumbai",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-navy-900`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}