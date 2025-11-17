import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: 'Deveion',
  description: "Deveion is a Next.js 13 app with TailwindCSS and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
