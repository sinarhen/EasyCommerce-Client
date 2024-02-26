import type { Metadata } from "next";
import "../globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import Container from "@/components/ui/container";
import Navbar from "@/app/(root)/components/navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="theme"
        >
          <Navbar />

          <Container>
            {children}

          </Container>

          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
