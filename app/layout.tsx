import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "聚合热搜",
  description: "🔎 聚合热搜 ⌈ 哔哩哔哩热搜 ⌋ ⌈ 微博热搜 ⌋ ⌈ 知乎热搜 ⌋ ⌈ 头条热搜 ⌋ ⌈ 抖音热搜 ⌋",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
