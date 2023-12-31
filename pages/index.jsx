import Head from "next/head";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import { CssVarsProvider } from '@mui/joy/styles';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <CssVarsProvider defaultMode="system" >
    <div className="container">
      <Head>
        <title>Guide | inspiracion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Info></Info>
      <footer>Desing</footer>
    </div>
    </CssVarsProvider>
  );
}
