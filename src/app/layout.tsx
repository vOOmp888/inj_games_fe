import type { Metadata } from "next";
import { Inter, Joti_One } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import WalletContextProvider from "../context/counterContextProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const joti_one = Joti_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-joti-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "vOOmp.xyz",
  description: "The first lottery game on injective  protocol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${joti_one.variable}`}>
      <body className="max-w-[1440px] flex flex-col justify-start m-auto relative">
        <WalletContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </WalletContextProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
