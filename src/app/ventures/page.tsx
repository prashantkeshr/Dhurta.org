import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PillarsStrip from "@/components/ventures/PillarsStrip";
import VenturesShowcase from "@/components/ventures/VenturesShowcase";
import FutureSectors from "@/components/ventures/FutureSectors";

export const metadata: Metadata = {
  title: "Group Ventures — The Dhurta Group",
  description:
    "The companies and products of the Dhurta group — Dhurta Browser, Dhurta Connect, and Dhurta Setu — plus the honest roadmap of sectors we are building toward.",
};

export default function VenturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Group Ventures"
        title="The Companies of Dhurta"
        description="An umbrella built on Trust, Technology, and Culture — real shipping products first, ambitions named honestly second."
      />
      <PillarsStrip />
      <VenturesShowcase />
      <FutureSectors />
    </>
  );
}
