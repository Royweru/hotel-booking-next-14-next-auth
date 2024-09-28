import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Sarova hotel booking",
  description: "Created with the power of Next JS",
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
