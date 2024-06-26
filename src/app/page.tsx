import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
const pjSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
      <main  className={pjSans.className}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <Header/>
          <Navbar/>
          <Hero/>
        </ThemeProvider>
      </main>
  );
}
