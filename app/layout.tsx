import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://timestudycafe-galmae.vercel.app"),
  title: "구리갈매 스터디카페 타임 | 몰입의 공간",
  description:
    "집중할 수 있는 나만의 공간, 구리갈매 스터디카페 타임. 24시간 운영, 합리적인 가격으로 공부하세요.",
  keywords: "스터디카페, 구리, 갈매, 스터디카페타임, 독서실, 자습실, 24시간",
  openGraph: {
    title: "구리갈매 스터디카페 타임 | 몰입의 공간",
    description: "집중할 수 있는 나만의 공간, 구리갈매 스터디카페 타임",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased" data-theme="dark">
      <body className="min-h-full flex flex-col bg-dark text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
