import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return <div className="h-auto bg-slate-900">
    <Component {...pageProps} />
  </div>
}
