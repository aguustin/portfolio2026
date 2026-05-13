import type { Metadata } from "next";
import { getDictionary, hasLocale, locales, type Locale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: ["Full Stack Developer", "Product Engineer", "React", "Next.js", "Node.js", "SaaS", "TypeScript", "AI"],
    authors: [{ name: "Agustín Molé" }],
    creator: "Agustín Molé",
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_AR" : "en_US",
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Agustín Molé Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <>{children}</>;
}
