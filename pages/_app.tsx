import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <div className="h-screen bg-slate-900 px-10 py-5">
    <Component {...pageProps} />;
  </div>
}
