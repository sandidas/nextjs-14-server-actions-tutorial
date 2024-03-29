import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 px-5">
        <main className="bg-white max-w-3xl px-5 min-h-[100dvh] mx-auto py-10 gap-10 flex flex-col">
          
          <ul className="w-full bg-slate-950 text-white flex flex-row gap-5 uppercase">
            <li>
              <Link href={"/"} className="py-2 px-5 flex hover:text-slate-300">Home</Link>
            </li>
            <li>
              <Link href={"/user"} className="py-2 hover:text-slate-300 px-5 flex">User</Link>
            </li>
          </ul>
          {children}
          
          </main>
        <Toaster
          // position="bottom-right"
          toastOptions={{
            duration: 10000,
          }}
        />
      </body>
    </html>
  );
}
