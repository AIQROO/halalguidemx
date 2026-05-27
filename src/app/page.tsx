import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Categories from "@/components/sections/Categories";
import Destinations from "@/components/sections/Destinations";
import Mosques from "@/components/sections/Mosques";
import Services from "@/components/sections/Services";
import Faq from "@/components/sections/Faq";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <span id="top" aria-hidden="true" />
      <Navbar />

      <main className="flex-1 w-full">
        <Hero />
        <Mission />
        <Categories />
        <Destinations />
        <Mosques />
        <Services />
        <Faq />
        <About />
      </main>

      <Footer />
    </>
  );
}
