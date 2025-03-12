import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Admin",
  description: "Admin panel for generating ecommerce site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
