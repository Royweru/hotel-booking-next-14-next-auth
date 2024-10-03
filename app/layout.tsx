import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/nav";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ModalProvider } from "@/components/modal-provider";
import { Toaster } from "@/components/ui/sonner"
export const metadata: Metadata = {
  title: "Katuumula hotel booking",
  description: "Created with the power of Next JS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={` antialiased`}>
          <ModalProvider />
          <Navbar />
          {children}
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
