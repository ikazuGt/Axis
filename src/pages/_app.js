import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div className={`${inter.className}`}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </SessionProvider>
  );
}