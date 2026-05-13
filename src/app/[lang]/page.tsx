import { getDictionary, hasLocale, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { TrackVisit } from "@/components/TrackVisit";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <TrackVisit />
      <Navbar dict={dict} />
      <main className="flex-1">
        <HeroSection dict={dict} />
        <ProjectsSection dict={dict} />
        <AboutSection dict={dict} />
        <SkillsSection dict={dict} />
        <EducationSection dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
