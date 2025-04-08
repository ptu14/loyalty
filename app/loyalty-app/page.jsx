"use client";
import Cta from "@/components/loyalty-app/Cta";
import Facts from "@/components/loyalty-app/Facts";
import Faq from "@/components/homes/home-4/Faq";
import Features from "@/components/loyalty-app/Features";
import Hero from "@/components/loyalty-app/Hero";
import Pricing from "@/components/loyalty-app/Pricing";
import Header3 from "@/components/headers/Header3";

export default function LoyaltyApp() {
  return (
    <>
      <Header3 />
      <Hero />
      <Features />
      <Facts />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
