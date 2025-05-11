import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}