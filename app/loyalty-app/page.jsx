"use client";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/loyalty-app/Cta";
import Facts from "@/components/loyalty-app/Facts";
import Faq from "@/components/homes/home-4/Faq";
import Features from "@/components/loyalty-app/Features";
import Hero from "@/components/loyalty-app/Hero";
import Pricing from "@/components/loyalty-app/Pricing";

export default function LoyaltyApp() {
  return (
    <>
      <Hero />
      <Features />
      <Facts />
      <Pricing />
      <Brands />
      <Faq />
      <Cta />
    </>
  );
}
