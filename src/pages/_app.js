import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Component {...pageProps} />
    </div>
  );
}