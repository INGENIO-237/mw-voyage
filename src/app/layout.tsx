import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Wrapper from "@/components/AppWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const metadata: Metadata = {
  title: "MY WAY VOYAGE",
  description:
    "Apporter une aide concrète à la formation de la jeunesse constitue la raison de notre existence. MYWAY Consulting SARL est la lampe, cette lumière qui vous aide à trouver ou à retrouver votre voie. L’objectif premier de MYWAY Consulting SARL est de permettre l’accès facile aux personnes désireuses de poursuivre leurs carrières (académiques, professionnelles et familiales) à l’étranger. Nous leur offrons également un accompagnement de qualité afin de faciliter leur insertion dans leurs pays de destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <Wrapper>
          {children}
          {/* <Footer /> */}
        </Wrapper>
      </body>
    </html>
  );
}
