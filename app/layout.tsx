import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://timestudycafe-galmae.vercel.app"),
  title: "타임스터디카페 구리갈매점 | 몰입의 공간",
  description:
    "집중할 수 있는 나만의 공간, 타임스터디카페 구리갈매점. 쾌적한 환경, 합리적인 가격으로 공부하세요.",
  keywords: "스터디카페, 구리, 갈매, 타임스터디카페, 독서실, 자습실",
  openGraph: {
    title: "타임스터디카페 구리갈매점 | 몰입의 공간",
    description: "집중할 수 있는 나만의 공간, 타임스터디카페 구리갈매점",
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
