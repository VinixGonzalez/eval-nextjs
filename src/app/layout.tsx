import "./globals.css";
import { Mulish } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "EVAL",
  description: "EVAL Application",
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className}`}>
        <Toaster />
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
