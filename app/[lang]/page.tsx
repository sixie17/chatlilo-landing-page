import React from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import FeatureShowcase from "../../components/FeatureShowcase";
import Testimonials from "../../components/Testimonials";
import FinalCTA from "../../components/FinalCTA";
import { getDictionary } from "@/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" | "ar" }>;
}) {
  // Await the params Promise
  const { lang } = await params;
  
  // 1. Fetch the dictionary on the server
  const dict = getDictionary(lang);

  return (
    <>
      {/* 2. Pass the relevant parts of the dictionary down as props */}
      <Hero translations={dict.hero} />
      <Features translations={dict.features} />
      <FeatureShowcase translations={dict.featureShowcase} />
      <Testimonials translations={dict.testimonials} />
      <FinalCTA translations={dict.finalCta} />
    </>
  );
}